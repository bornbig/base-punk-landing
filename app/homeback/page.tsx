'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const nfts = [
    { id: 1, name: 'BASED PUNK #1' },
    { id: 2, name: 'BASED PUNK #2' },
    { id: 3, name: 'BASED PUNK #3' },
    { id: 4, name: 'BASED PUNK #4' },
    { id: 5, name: 'BASED PUNK #5' },
    { id: 6, name: 'BASED PUNK #6' },
    { id: 7, name: 'BASED PUNK #7' },
    { id: 8, name: 'BASED PUNK #8' },
    { id: 9, name: 'BASED PUNK #9' },
    { id: 10, name: 'BASED PUNK #10' },
  ]

  const faqs = [
    { question: 'WHAT IS BASEDSTR AND HOW DOES IT WORK?' },
    { question: 'HOW DOES BASEDSTR SUPPORT BASED PUNKS?' },
    { question: 'WHAT MAKES BASEDSTR DIFFERENT FROM TRADITIONAL NFT TOKENS?' },
    { question: 'IS THERE A TOKEN TAX OR LAUNCH FEE?' },
    { question: "WHAT'S NEXT FOR BASEDSTR HOLDERS?" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-700">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center h-full">
            <div className="pl-6 pr-6 h-full flex items-center text-base font-bold tracking-wider border-r border-gray-700">
              BASEDSTR
            </div>
          </div>
          <div className="hidden md:flex items-center h-full text-base font-bold">
            <div className="border-l border-gray-700 h-full"></div>
            <a href="#" className="px-6 h-full flex items-center border-r border-gray-700 hover:bg-gray-900 transition">BUY/SELL</a>
            <a href="#" className="px-6 h-full flex items-center border-r border-gray-700 hover:bg-gray-900 transition">HOW IT WORKS?</a>
            <a href="#" className="px-6 h-full flex items-center border-r border-gray-700 hover:bg-gray-900 transition">HOLDINGS</a>
            <a href="#" className="px-6 h-full flex items-center border-r border-gray-700 hover:bg-gray-900 transition">OUR MISSION</a>
            <a href="#" className="px-6 h-full flex items-center border-r border-gray-700 hover:bg-gray-900 transition">CONNECT WALLET</a>
            <a href="#" className="px-6 h-full flex items-center hover:bg-gray-900 transition">
              <i className="fa-brands fa-x-twitter text-base"></i>
            </a>
          </div>
          <button className="md:hidden px-6">
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-wider">
            TURNING BASED PUNKS INTO<br />
            A PERPETUAL MARKET MACHINE.
          </h1>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="border border-white px-8 py-3 font-bold hover:bg-white hover:text-black transition flex items-center gap-2">
              BUY BASESTR <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
            <button className="border border-white px-8 py-3 font-bold hover:bg-white hover:text-black transition flex items-center gap-2">
              CHECK COLLECTION <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </div>
        </div>
      </section>

      {/* NFT Gallery */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-dotted border-gray-700">
            {nfts.map((nft) => (
              <div key={nft.id} className="relative group border-r border-b border-dotted border-gray-700">
                <div className="absolute top-2 right-2 z-10">
                  <button className="text-white hover:text-gray-400">
                    <i className="fa-solid fa-ellipsis text-xl"></i>
                  </button>
                </div>
                <div className="bg-black hover:bg-gray-900 transition">
                  <div className="bg-black flex items-center justify-center py-6">
                    {/* Pixel Art Placeholder - In production, use actual NFT images */}
                    <div className="w-20 h-20 bg-white rounded-full"></div>
                  </div>
                  <div className="px-3 pb-3 text-center">
                    <p className="text-xs font-bold text-white">BASED PUNK</p>
                    <p className="text-xs text-gray-400 mt-1">#{nft.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Stats Bar */}
      <section className="py-4" style={{ backgroundColor: '#0B0B0B' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center h-12 border border-gray-700" style={{ backgroundColor: '#0B0B0B' }}>
            <div className="px-4 h-full flex items-center font-bold text-sm border-r border-gray-700">BASESTRATEGY™</div>
            <div className="px-4 h-full flex items-center border-r border-gray-700"></div>
            <div className="px-4 h-full flex items-center text-xs border-r border-gray-700">
              <span className="text-gray-500">CA:</span> <span className="font-mono ml-1">0XC506...3E1F</span>
            </div>
            <div className="px-4 h-full flex items-center text-xs border-r border-gray-700">
              <span className="text-gray-500">MCAP:</span> <span className="text-green-400 ml-1">$240K</span>
            </div>
            <div className="px-4 h-full flex items-center text-xs border-r border-gray-700">
              <span className="text-gray-500">PRICE:</span> <span className="ml-1">$0.00024</span>
            </div>
            <div className="px-4 h-full flex items-center text-xs border-r border-gray-700">
              <span className="text-gray-500">24H VOLUME:</span> <span className="text-blue-400 ml-1">$2.4M</span>
            </div>
            <div className="px-4 h-full flex items-center text-xs border-r border-gray-700">
              <span className="text-gray-500">BURNED:</span> <span className="text-red-400 ml-1">0.4% (6.3M)</span>
            </div>
            <div className="px-4 h-full flex items-center text-xs font-bold gap-2">
              TRADE <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Holdings & Buying Section - Combined Box */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 border border-gray-700">
            {/* Currently Holding */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <h2 className="text-2xl font-bold mb-6 md:mb-0 text-gray-400">CURRENTLY<br />HOLDING</h2>
                <div className="text-right">
                  <div className="text-5xl font-bold mb-4">6.9432 ETH</div>
                  <div className="text-4xl font-bold text-gray-500">+ 32 NFTS</div>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-gray-700"></div>

            {/* We Are Buying Next */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-6">WE ARE BUYING NEXT</h2>
                  <div className="text-5xl font-bold mb-6">6.9432 ETH</div>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex gap-1 mb-2">
                      {[...Array(30)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-3 flex-1 ${i < 9 ? 'bg-white' : 'bg-gray-800'}`}
                        ></div>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">CURRENT PROGRESS</span>
                      <span className="font-bold">30%</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
                      OWNER: 0XM0FA...6066
                    </button>
                    <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
                      VIEW ON MARKETPLACE
                    </button>
                  </div>
                </div>

                {/* NFT Preview */}
                <div className="flex justify-center lg:justify-end">
                  <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <div className="w-48 h-48 bg-white rounded-full opacity-90"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Based Punk Council */}
      <section className="px-6 py-16 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                BASED PUNK COUNCIL<br />
                <span className="text-gray-500">(COMING SOON)</span>
              </h2>
              <p className="text-gray-400 text-sm mb-6 max-w-2xl">
                THE TOP 1% OF BASEDSTR HOLDERS EARN A SEAT AT THE TABLE -<br />
                THE BASED PUNK COUNCIL. AN ELITE CIRCLE GUIDING FUTURE<br />
                PROTOCOL UPGRADES, CULTURAL COLLABS, AND TREASURY DECISIONS.
              </p>
              <button className="bg-white text-black px-8 py-3 font-bold hover:bg-gray-200 transition flex items-center gap-2">
                COMING SOON <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
            <div className="text-8xl font-bold text-gray-800">
              ONLY
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Side by Side Layout */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Left Side - Heading */}
            <div className="md:col-span-4">
              <h2 className="text-3xl font-bold text-gray-400 sticky top-8">
                FREQUENTLY<br />
                ASKED QUESTIONS
              </h2>
            </div>
            
            {/* Right Side - Questions */}
            <div className="md:col-span-8">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-800">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full py-6 flex items-center justify-between text-left hover:text-gray-400 transition"
                    >
                      <span className="text-sm font-bold">{faq.question}</span>
                      <i className={`fa-solid fa-plus text-xl transition-transform ${openFaq === index ? 'rotate-45' : ''}`}></i>
                    </button>
                    {openFaq === index && (
                      <div className="pb-6 text-gray-400 text-sm">
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
      <section className="px-6 py-16 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">BASESTRATEGY™</h3>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">
                WE ARE NOT AFFILIATED WITH BASED PUNKS OR TRAF.<br />
                THIS IS A COMMUNITY PROJECT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 BASEDSTR. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}
