'use client'

import { useState, useEffect } from 'react'
import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi'
import { STRATEGY_ABI, STRATEGY_CONTRACT_ADDRESS } from '@/lib/abi'
import { parseEther } from 'viem'

interface BuyPunkModalProps {
  isOpen: boolean
  onClose: () => void
  nftData: {
    tokenId: number
    imageUrl: string
    name: string
    listPriceWei: string
    marketplaceUrl?: string
  } | null
  userBalance?: string // in ETH
}

export default function BuyPunkModal({ isOpen, onClose, nftData, userBalance = '0' }: BuyPunkModalProps) {
  const { address } = useAccount()
  const { data: hash, error: writeError, isPending: isWritePending, writeContract } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  })

  const [modalState, setModalState] = useState<'default' | 'insufficient' | 'success'>('default')
  const [txHash, setTxHash] = useState('')

  // Convert Wei to ETH
  const priceInEth = nftData ? (parseInt(nftData.listPriceWei) / 1e18).toFixed(4) : '0'
  const userBalanceNum = parseFloat(userBalance)
  const priceNum = parseFloat(priceInEth)
  const hasInsufficientFunds = userBalanceNum < priceNum

  // Calculate how much more ETH is needed
  const ethNeeded = hasInsufficientFunds ? (priceNum - userBalanceNum).toFixed(4) : '0'

  useEffect(() => {
    if (isOpen && hasInsufficientFunds) {
      setModalState('insufficient')
    } else if (isOpen) {
      setModalState('default')
    }
  }, [isOpen, hasInsufficientFunds])

  useEffect(() => {
    if (isConfirmed) {
      setTxHash(hash || '')
      setModalState('success')
    }
  }, [isConfirmed, hash])

  const handleBuyNow = async () => {
    if (!nftData) return

    try {
      writeContract({
        address: STRATEGY_CONTRACT_ADDRESS,
        abi: STRATEGY_ABI,
        functionName: 'sellTargetNFT',
        args: [BigInt(nftData.tokenId)],
        value: BigInt(nftData.listPriceWei),
      })
    } catch (error) {
      console.error('Transaction failed:', error)
    }
  }

  const isLoading = isWritePending || isConfirming

  if (!isOpen || !nftData) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={onClose}>
      <div
        className="relative bg-black border border-gray-700 w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {modalState === 'success' ? (
          // Success State
          <div className="p-8 md:p-12">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400 transition"
              style={{ fontFamily: "'Doto', sans-serif", fontWeight: 900 }}
            >
              X
            </button>

            <h2 className="text-center text-xl md:text-2xl mb-8 tracking-wider font-bold text-gray-400">
              YOUR PURCHASE IS COMPLETE
            </h2>

            <div className="flex flex-col items-center">
              <img
                src={nftData.imageUrl}
                alt={nftData.name}
                className="w-64 h-64 object-contain mb-6"
              />

              <p className="text-white text-lg mb-8 tracking-wider">
                PUNK #{nftData.tokenId}
              </p>

              <a
                href={`https://basescan.org/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition tracking-wider text-sm"
              >
                VIEW ON ETHERSCAN ↗
              </a>
            </div>
          </div>
        ) : (
          // Default / Insufficient Funds State
          <div className="p-6 md:p-8">
            {/* Header with centered title */}
            <div className="relative mb-6 border-b border-gray-700 pb-6">
              <h2 className="text-center text-xl md:text-3xl tracking-wider text-gray-400 pr-8" style={{ fontWeight: 800 }}>
                BUY PUNK FROM BASEDSTR VAULT
              </h2>
              <button
                onClick={onClose}
                className="absolute -top-2 right-0 text-white text-xl md:text-2xl hover:text-gray-400 transition"
                style={{ fontFamily: "'Doto', sans-serif", fontWeight: 800 }}
              >
                X
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left side - Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-gray-400 text-xl md:text-3xl mb-3 tracking-wider" style={{ fontWeight: 800 }}>
                    PUNK #{nftData.tokenId}
                  </p>
                  <p className="text-white text-4xl md:text-5xl tracking-wider font-medium">
                    {priceInEth} ETH
                  </p>


                </div>

                {/* Buttons at bottom */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleBuyNow}
                    disabled={isLoading}
                    className={`px-6 py-3 text-sm tracking-wider font-extrabold transition ${isLoading
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-gray-200'
                      }`}
                  >
                    {isLoading ? 'PROCESSING...' : 'BUY NOW!'}
                  </button>

                  <a
                    href={nftData.marketplaceUrl || `https://opensea.io/assets/base/0xcb28749c24af4797808364d71d71539bc01e76d4/${nftData.tokenId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-sm tracking-wider font-extrabold border border-white text-white hover:bg-gray-900 transition text-center"
                  >
                    VIEW ON MARKETPLACE
                  </a>
                </div>
              </div>

              {/* Right side - NFT Image */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src={nftData.imageUrl}
                  alt={nftData.name}
                  className="w-full max-w-sm h-auto object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
