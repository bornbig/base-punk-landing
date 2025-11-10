'use client'

import { useState, useEffect } from 'react'
import { fetchBestListing, fetchCurrentHoldings, fetchSales, type BasedPunksAPIResponse, type CurrentHoldingsResponse, type SalesResponse } from '@/lib/api'
import { ConnectButton } from '@rainbow-me/rainbowkit'

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function ActivityPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [apiData, setApiData] = useState<BasedPunksAPIResponse | null>(null)
  const [holdingsData, setHoldingsData] = useState<CurrentHoldingsResponse | null>(null)
  const [salesData, setSalesData] = useState<SalesResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [holdingsLoading, setHoldingsLoading] = useState(true)
  const [salesLoading, setSalesLoading] = useState(true)

  useEffect(() => {
    // Fetch best listing for stats
    fetchBestListing()
      .then(data => {
        setApiData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching API data:', err)
        setLoading(false)
      })

    // Fetch current holdings for first NFT section
    fetchCurrentHoldings()
      .then(data => {
        setHoldingsData(data)
        setHoldingsLoading(false)
      })
      .catch(err => {
        console.error('Error fetching holdings data:', err)
        setHoldingsLoading(false)
      })

    // Fetch sales for second NFT section
    fetchSales()
      .then(data => {
        setSalesData(data)
        setSalesLoading(false)
      })
      .catch(err => {
        console.error('Error fetching sales data:', err)
        setSalesLoading(false)
      })
  }, [])

  const placeholderNfts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `BASED PUNK #${i + 1}`
  }))

  const faqs = [
    { question: 'WHAT IS BASEDSTR?' },
    { question: 'HOW DOES THE STRATEGY WORK?' },
    { question: 'WHAT MAKES BASEDSTR DIFFERENT FROM TRADITIONAL NFT TOKENS?' },
    { question: 'IS THERE A TOKEN TAX OR LAUNCH FEE?' },
    { question: "WHAT'S NEXT FOR BASEDSTR HOLDERS?" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-700 relative">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center h-full">
            <a href="/homeback" className="pl-6 pr-6 h-full flex items-center text-base font-bold tracking-wider border-r border-gray-700 hover:text-gray-400 transition">
              BASED STRATEGY
            </a>
          </div>
          
          {/* Desktop Menu - Right aligned */}
          <div className="hidden md:flex items-center h-full text-base font-bold ml-auto">
            <a href="/homeback#buy-sell" className="px-6 h-full flex items-center border-l border-gray-700 hover:bg-gray-900 transition">BUY/SELL</a>
            <a href="/homeback#how-it-works" className="px-6 h-full flex items-center border-l border-gray-700 hover:bg-gray-900 transition">HOW IT WORKS?</a>
            <a href="/activity" className="px-6 h-full flex items-center border-l border-gray-700 bg-gray-900">HOLDINGS</a>
            <a href="/homeback#mission" className="px-6 h-full flex items-center border-l border-gray-700 hover:bg-gray-900 transition">OUR MISSION</a>
            <div className="px-6 h-full flex items-center border-l border-gray-700">
              <ConnectButton.Custom>
                {({ account, chain, openAccountModal, openConnectModal, mounted }) => {
                  const isConnected = mounted && account && chain
                  
                  return (
                    <div
                      {...(!mounted && {
                        'aria-hidden': true,
                        style: {
                          opacity: 0,
                          pointerEvents: 'none',
                          userSelect: 'none',
                        },
                      })}
                    >
                      <button
                        onClick={isConnected ? openAccountModal : openConnectModal}
                        className="font-bold tracking-wider hover:text-gray-400 transition"
                        style={{ background: 'none', border: 'none', padding: 0, outline: 'none' }}
                      >
                        {isConnected ? `${account.displayName}` : 'CONNECT WALLET'}
                      </button>
                    </div>
                  )
                }}
              </ConnectButton.Custom>
            </div>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="px-6 h-full flex items-center border-l border-gray-700 hover:bg-gray-900 transition">
              <i className="fa-brands fa-x-twitter text-base"></i>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="px-6 h-full flex items-center border-l border-gray-700 hover:bg-gray-900 transition">
              <i className="fa-brands fa-x-discord text-base"></i>
            </a>
          </div>

          {/* Mobile Burger Menu */}
          <button 
            className="md:hidden px-6 h-full flex items-center border-l border-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-black border-b border-gray-700 z-50 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 border-b-0'
          }`}
        >
          <a href="/homeback#buy-sell" className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>BUY/SELL</a>
          <a href="/homeback#how-it-works" className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>HOW IT WORKS?</a>
          <a href="/activity" className="block px-6 py-4 border-b border-gray-700 bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>HOLDINGS</a>
          <a href="/homeback#mission" className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>OUR MISSION</a>
          <a href="#connect" className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>CONNECT WALLET</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block px-6 py-4 hover:bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-brands fa-x-twitter text-base mr-2"></i> TWITTER
          </a>
        </div>
      </nav>

      {/* Token Stats Bar */}
      <section className="px-6 pt-16 pb-4 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="border overflow-x-auto md:overflow-visible scrollbar-hide" style={{ backgroundColor: '#0B0B0B', borderColor: '#1C1C1C', letterSpacing: '0.5px' }}>
            <div className="flex items-center h-16 min-w-max md:min-w-0">
              <div className="px-5 h-full flex items-center font-bold border-r whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '18px', letterSpacing: '1px' }}>BASEDSTRATEGY™</div>
              <div className="flex-1"></div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>CA</span> <span className="ml-2" style={{ color: '#595959' }}>0X40A0...3E0F</span>
              </div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>MCAP</span> <span className="ml-2">$240K</span>
              </div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>PRICE</span> <span className="ml-2">$0.00024</span>
              </div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>24H VOLUME</span> <span className="ml-2">$2.4M</span>
              </div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>BURNED</span> <span className="ml-2">0.2M (6.3M)</span>
              </div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ fontWeight: 800 }}>TRADE</span> <span className="ml-2" style={{ fontSize: '18px' }}>↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Stats Section - Copied from Homepage */}
      <section className="px-6 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="border" style={{ backgroundColor: '#0B0B0B', borderColor: '#2B2B2B' }}>
            {/* Currently Holding */}
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <h2 className="text-2xl md:text-4xl tracking-wider font-extrabold" style={{ color: '#595959' }}>CURRENTLY<br />HOLDING</h2>
                <div className="text-left md:text-right">
                  <div style={{ textAlign: 'left', lineHeight: '1.2' }}>
                    <div className="text-3xl md:text-5xl tracking-wider" style={{ color: 'white', fontWeight: 400 }}>
                      {loading ? 'LOADING...' : apiData?.contract_balance?.eth_balance_formatted === '0' ? 'NO ETH' : `${apiData?.contract_balance?.eth_balance_formatted} ETH`}
                    </div>
                    <div className="text-3xl md:text-5xl tracking-wider" style={{ color: 'white', fontWeight: 400 }}>
                      {loading ? 'LOADING...' : apiData?.contract_balance?.nft_holdings === 0 ? 'NO NFTS' : `${apiData?.contract_balance?.nft_holdings} NFTS`}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="px-6 md:px-10">
              <div className="border-t" style={{ borderColor: '#2B2B2B' }}></div>
            </div>

            {/* We Are Buying Next */}
            <div className="p-6 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="w-full lg:w-[30%]">
                  <h2 className="text-2xl md:text-3xl mb-4 tracking-wider font-extrabold" style={{ color: '#595959' }}>WE ARE BUYING NEXT</h2>
                  <div className="text-3xl md:text-5xl mb-8 md:mb-12 tracking-wider" style={{ color: 'white', fontWeight: 400 }}>
                    {loading ? 'LOADING...' : apiData?.nft?.price?.amount_formatted ? `${apiData.nft.price.amount_formatted} ETH` : '0.072 ETH'}
                  </div>
                  
                  {/* Progress Bar - 5 rows x 20 boxes */}
                  <div className="mb-8">
                    <div className="space-y-3 mb-3">
                      {[...Array(5)].map((_, rowIndex) => (
                        <div key={rowIndex} className="flex gap-3">
                          {[...Array(20)].map((_, colIndex) => (
                            <div
                              key={colIndex}
                              style={{ 
                                width: '8px', 
                                height: '8px',
                                backgroundColor: rowIndex === 0 ? 'white' : '#202020'
                              }}
                            ></div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm tracking-wider font-bold" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#595959' }}>CURRENT PROGRESS</span>
                      <span style={{ color: 'white' }}>30%</span>
                    </div>
                  </div>

                  {/* Owner and Button */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="border px-3 py-2.5 text-xs sm:text-sm tracking-wide sm:flex-1 font-bold text-center" style={{ borderColor: '#2B2B2B', color: '#595959' }}>
                      OWNER <span style={{ color: 'white' }}>{loading ? 'LOADING...' : apiData?.nft?.owner_address ? `${apiData.nft.owner_address.slice(0, 6)}...${apiData.nft.owner_address.slice(-4)}` : '0XM0FA...6066'}</span>
                    </div>
                    <button className="border border-white px-3 py-2.5 text-xs sm:text-sm tracking-wide sm:flex-1 font-bold text-center" style={{ borderColor: '#2B2B2B', color: 'white' }}>
                      VIEW ON MARKETPLACE
                    </button>
                  </div>
                </div>

                {/* NFT Preview */}
                <div className="flex justify-center lg:justify-end w-full lg:flex-1 mt-8 lg:mt-0">
                  <div className="flex items-center justify-center">
                    {loading ? (
                      <div className="text-white">LOADING...</div>
                    ) : apiData?.nft?.image_url ? (
                      <img src={apiData.nft.image_url} alt={apiData.nft.name || 'NFT'} className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain" />
                    ) : (
                      <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full opacity-90"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holdings Stats Bar */}
      <section className="px-6 py-4 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="border overflow-x-auto md:overflow-visible scrollbar-hide" style={{ backgroundColor: '#0B0B0B', borderColor: '#1C1C1C', letterSpacing: '0.5px' }}>
            <div className="flex items-center h-16 min-w-max md:min-w-0">
              <div className="px-5 h-full flex items-center font-bold border-r whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '18px', letterSpacing: '1px' }}>BASE STRATEGY HOLDINGS</div>
              <div className="flex-1"></div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>CURRENT HOLDING</span> <span className="ml-2">{loading ? '...' : apiData?.contract_balance?.nft_holdings || '0'} NFTS</span>
              </div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>ETH SPENT</span> <span className="ml-2">{loading ? '...' : apiData?.contract_balance?.eth_balance_formatted || '0'} ETH</span>
              </div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ fontWeight: 800 }}>TRADE</span> <span className="ml-2" style={{ fontSize: '18px' }}>↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NFT Gallery - 20 items (Current Holdings) */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-dotted border-gray-700">
            {holdingsLoading ? (
              // Show loading state
              Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="relative border-r border-b border-dotted border-gray-700">
                  <div className="bg-black">
                    <div className="flex items-center justify-center py-12">
                      <div className="w-32 h-32 animate-pulse" style={{ backgroundColor: 'rgb(55, 65, 81)' }}></div>
                    </div>
                    <div className="px-3 pb-4 text-center">
                      <div className="h-4 animate-pulse mb-2" style={{ backgroundColor: 'rgb(55, 65, 81)' }}></div>
                      <div className="h-3 animate-pulse" style={{ backgroundColor: 'rgb(55, 65, 81)' }}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : holdingsData && holdingsData.items.length > 0 ? (
              // Show actual NFTs from holdings API (limit to 20)
              holdingsData.items.slice(0, 20).map((item) => (
                <a key={item.tokenId} href="https://based.so/punks" target="_blank" rel="noopener noreferrer" className="relative group border-r border-b border-dotted border-gray-700 block">
                  <div className="absolute top-2 right-2 z-10">
                    <button className="text-white text-xl" style={{ fontWeight: 300, fontFamily: 'sans-serif', letterSpacing: '2px', outline: 'none', border: 'none', background: 'none', padding: 0 }}>
                      ···
                    </button>
                  </div>
                  <div className="bg-black">
                    <div className="flex items-center justify-center py-12">
                      <img src={item.nft.imageUrl} alt={item.nft.name} className="w-32 h-32 object-contain" />
                    </div>
                    <div className="px-3 pb-4 text-center">
                      <p className="text-m text-white group-hover:text-gray-500 transition-colors duration-300" style={{ fontWeight: 900 }}>BASED PUNK</p>
                      <p className="text-sm text-gray-400 mt-1 font-extrabold">#{item.tokenId}</p>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              // Show placeholder NFTs when no data
              placeholderNfts.map((nft) => (
                <a key={nft.id} href="https://based.so/punks" target="_blank" rel="noopener noreferrer" className="relative group border-r border-b border-dotted border-gray-700 block">
                  <div className="absolute top-2 right-2 z-10">
                    <button className="text-white text-xl" style={{ fontWeight: 300, fontFamily: 'sans-serif', letterSpacing: '2px', outline: 'none', border: 'none', background: 'none', padding: 0 }}>
                      ···
                    </button>
                  </div>
                  <div className="bg-black">
                    <div className="flex items-center justify-center py-12">
                      <img src={`/${((nft.id - 1) % 10) + 1}.png`} alt={nft.name} className="w-32 h-32 object-contain" />
                    </div>
                    <div className="px-3 pb-4 text-center">
                      <p className="text-m text-white group-hover:text-gray-500 transition-colors duration-300" style={{ fontWeight: 900 }}>BASED PUNK</p>
                      <p className="text-sm text-gray-400 mt-1 font-extrabold">#{nft.id}</p>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Load More Button - Only show if holdings has more than 20 items */}
      {holdingsData && holdingsData.items.length > 20 && (
        <section className="px-6 pb-12 bg-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-center">
              <button className="border px-8 py-3 text-sm font-bold tracking-wider hover:bg-gray-900 transition" style={{ borderColor: '#2B2B2B', color: 'white' }}>
                LOAD MORE
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Sales Stats Bar */}
      <section className="px-6 py-4 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="border overflow-x-auto md:overflow-visible scrollbar-hide" style={{ backgroundColor: '#0B0B0B', borderColor: '#1C1C1C', letterSpacing: '0.5px' }}>
            <div className="flex items-center h-16 min-w-max md:min-w-0">
              <div className="px-5 h-full flex items-center font-bold border-r whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '18px', letterSpacing: '1px' }}>BASE STRATEGY SALES</div>
              <div className="flex-1"></div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>SOLD</span> <span className="ml-2">12 NFTS</span>
              </div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>TOTAL PROFIT</span> <span className="ml-2">484.609 ETH</span>
              </div>
              <div className="px-5 h-full flex items-center font-bold border-l whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ fontWeight: 800 }}>TRADE</span> <span className="ml-2" style={{ fontSize: '18px' }}>↗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second NFT Gallery - Sales Data (20 items) */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-dotted border-gray-700">
            {salesLoading ? (
              // Show loading state
              Array.from({ length: 20 }).map((_, index) => (
                <div key={`second-${index}`} className="relative border-r border-b border-dotted border-gray-700">
                  <div className="bg-black">
                    <div className="flex items-center justify-center py-12">
                      <div className="w-32 h-32 animate-pulse" style={{ backgroundColor: 'rgb(55, 65, 81)' }}></div>
                    </div>
                    <div className="px-3 pb-4 text-center">
                      <div className="h-4 animate-pulse mb-2" style={{ backgroundColor: 'rgb(55, 65, 81)' }}></div>
                      <div className="h-3 animate-pulse" style={{ backgroundColor: 'rgb(55, 65, 81)' }}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : salesData && salesData.items.length > 0 ? (
              // Show actual NFTs from sales API (limit to 20)
              salesData.items.slice(0, 20).map((sale) => (
                <a key={sale.tokenId} href="https://based.so/punks" target="_blank" rel="noopener noreferrer" className="relative group border-r border-b border-dotted border-gray-700 block">
                  <div className="absolute top-2 right-2 z-10">
                    <button className="text-white text-xl" style={{ fontWeight: 300, fontFamily: 'sans-serif', letterSpacing: '2px', outline: 'none', border: 'none', background: 'none', padding: 0 }}>
                      ···
                    </button>
                  </div>
                  <div className="bg-black">
                    <div className="flex items-center justify-center py-12">
                      <img src={sale.nft.imageUrl} alt={sale.nft.name} className="w-32 h-32 object-contain" />
                    </div>
                    <div className="px-3 pb-4 text-center">
                      <p className="text-m text-white group-hover:text-gray-500 transition-colors duration-300" style={{ fontWeight: 900 }}>BASED PUNK</p>
                      <p className="text-sm text-gray-400 mt-1 font-extrabold">#{sale.tokenId}</p>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              // Show placeholder NFTs when no data (21-40)
              Array.from({ length: 20 }, (_, i) => ({
                id: i + 21,
                name: `BASED PUNK #${i + 21}`
              })).map((nft) => (
                <a key={nft.id} href="https://based.so/punks" target="_blank" rel="noopener noreferrer" className="relative group border-r border-b border-dotted border-gray-700 block">
                  <div className="absolute top-2 right-2 z-10">
                    <button className="text-white text-xl" style={{ fontWeight: 300, fontFamily: 'sans-serif', letterSpacing: '2px', outline: 'none', border: 'none', background: 'none', padding: 0 }}>
                      ···
                    </button>
                  </div>
                  <div className="bg-black">
                    <div className="flex items-center justify-center py-12">
                      <img src={`/${((nft.id - 1) % 10) + 1}.png`} alt={nft.name} className="w-32 h-32 object-contain" />
                    </div>
                    <div className="px-3 pb-4 text-center">
                      <p className="text-m text-white group-hover:text-gray-500 transition-colors duration-300" style={{ fontWeight: 900 }}>BASED PUNK</p>
                      <p className="text-sm text-gray-400 mt-1 font-extrabold">#{nft.id}</p>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Load More Button - Only show if sales has more than 20 items */}
      {salesData && salesData.items.length > 20 && (
        <section className="px-6 pb-12 bg-black">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-center">
              <button className="border px-8 py-3 text-sm font-bold tracking-wider hover:bg-gray-900 transition" style={{ borderColor: '#2B2B2B', color: 'white' }}>
                LOAD MORE
              </button>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section - Side by Side Layout */}
      <section className="px-6 py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Heading */}
            <div>
              <h2 className="text-5xl font-bold tracking-wider sticky top-8" style={{ color: '#595959' }}>
                FREQUENTLY<br />
                ASKED QUESTIONS
              </h2>
            </div>
            
            {/* Right Side - Questions */}
            <div>
              <div>
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b" style={{ borderColor: '#2B2B2B' }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full py-4 flex items-center justify-between text-left"
                      style={{ outline: 'none', border: 'none', background: 'transparent' }}
                    >
                      <span className="text-m font-bold tracking-wider">{faq.question}</span>
                      <i className={`fa-solid fa-plus text-lg transition-transform ${openFaq === index ? 'rotate-45' : ''}`} style={{ color: '#2B2B2B' }}></i>
                    </button>
                    {openFaq === index && (
                      <div className="pb-4 text-s tracking-wider" style={{ color: '#595959' }}>
                        <p>Answer content goes here...</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Disclaimer Section */}
      <section className="px-6 py-4 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="border" style={{ backgroundColor: '#0B0B0B', borderColor: '#2B2B2B' }}>
            <div className="flex items-stretch" style={{ height: '100%' }}>
              <div className="px-6 py-3 flex items-center" style={{ borderRight: '1px solid #2B2B2B', color: 'white' }}>
                <h3 className="text-sm font-bold tracking-wider">BASESTRATEGY™</h3>
              </div>
              <div className="px-6 py-3 flex-1 flex items-center justify-end" style={{ borderRight: '1px solid #2B2B2B'}}>
                <div className="text-xs font-bold tracking-wider text-right" style={{ color: 'white' }}>
                  WE ARE NOT AFFILIATED WITH BASED PUNKS OR TRAF.<br/> THIS IS A COMMUNITY PROJECT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
