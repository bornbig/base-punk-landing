'use client'

import { useState } from 'react'

export default function Dashboard() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      <nav className="border-b border-gray-700 relative">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center h-full">
            <div className="pl-6 pr-6 h-full flex items-center text-base font-bold tracking-wider border-r border-gray-700">
              BASEDSTR
            </div>
          </div>
          
          {/* Desktop Menu - Right aligned */}
          <div className="hidden md:flex items-center h-full text-base font-bold ml-auto">
            <a href="#buy-sell" className="px-6 h-full flex items-center border-l border-gray-700 hover:bg-gray-900 transition">BUY/SELL</a>
            <a href="#how-it-works" className="px-6 h-full flex items-center border-l border-gray-700 hover:bg-gray-900 transition">HOW IT WORKS?</a>
            <a href="#holdings" className="px-6 h-full flex items-center border-l border-gray-700 hover:bg-gray-900 transition">HOLDINGS</a>
            <a href="#mission" className="px-6 h-full flex items-center border-l border-gray-700 hover:bg-gray-900 transition">OUR MISSION</a>
            <a href="#connect" className="px-6 h-full flex items-center border-l border-gray-700 hover:bg-gray-900 transition">CONNECT WALLET</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="px-6 h-full flex items-center border-l border-gray-700 hover:bg-gray-900 transition">
              <i className="fa-brands fa-x-twitter text-base"></i>
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
          <a href="#buy-sell" className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>BUY/SELL</a>
          <a href="#how-it-works" className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>HOW IT WORKS?</a>
          <a href="#holdings" className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>HOLDINGS</a>
          <a href="#mission" className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>OUR MISSION</a>
          <a href="#connect" className="block px-6 py-4 border-b border-gray-700 hover:bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>CONNECT WALLET</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block px-6 py-4 hover:bg-gray-900 transition-colors font-bold tracking-wider" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-brands fa-x-twitter text-base mr-2"></i> TWITTER
          </a>
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
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-l border-t border-dotted border-gray-700">
            {nfts.map((nft) => (
              <div key={nft.id} className="relative group border-r border-b border-dotted border-gray-700">
                <div className="absolute top-2 right-2 z-10">
                  <button className="text-white group-hover:text-black text-xl transition-colors" style={{ fontWeight: 300, fontFamily: 'sans-serif', letterSpacing: '2px' }}>
                    ···
                  </button>
                </div>
                <div className="bg-black hover:bg-white transition-colors duration-300">
                  <div className="bg-black group-hover:bg-white flex items-center justify-center py-6 transition-colors duration-300">
                    {/* Pixel Art Placeholder - In production, use actual NFT images */}
                    <div className="w-20 h-20 bg-white group-hover:bg-black rounded-full transition-colors duration-300"></div>
                  </div>
                  <div className="px-3 pb-3 text-center">
                    <p className="text-m text-white group-hover:text-black transition-colors duration-300" style={{ fontWeight: 900 }}>BASED PUNK</p>
                    <p className="text-sm text-gray-400 group-hover:text-black mt-1 font-extrabold transition-colors duration-300">#{nft.id}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Stats Bar */}
      <section className="px-6 py-4 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="border overflow-x-auto md:overflow-visible scrollbar-hide" style={{ backgroundColor: '#0B0B0B', borderColor: '#1C1C1C', letterSpacing: '0.5px' }}>
            <div className="flex items-center h-16 min-w-max md:min-w-0">
              <div className="px-5 h-full flex items-center font-bold border-r whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '18px', letterSpacing: '1px' }}>BASESTRATEGY™</div>
              <div className="px-16 h-full flex items-center border-r" style={{ borderColor: '#1C1C1C' }}></div>
              <div className="px-5 h-full flex items-center border-r font-bold whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>CA</span> <span className="ml-2" style={{ color: 'white' }}>COMING SOON</span>
              </div>
              <div className="px-5 h-full flex items-center border-r font-bold whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>M.CAP</span> <span className="ml-2" style={{ color: 'white' }}>$240K</span>
              </div>
              <div className="px-5 h-full flex items-center border-r font-bold whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>PRICE</span> <span className="ml-2" style={{ color: 'white' }}>$0.00024</span>
              </div>
              <div className="px-5 h-full flex items-center border-r font-bold whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>24H VOLUME</span> <span className="ml-2" style={{ color: 'white' }}>$2.4M</span>
              </div>
              <div className="px-5 h-full flex items-center border-r font-bold whitespace-nowrap" style={{ borderColor: '#1C1C1C', fontSize: '15px', letterSpacing: '0.5px' }}>
                <span style={{ color: '#595959' }}>BURNED</span> <span className="ml-2" style={{ color: 'white' }}>0.4% (6.3M)</span>
              </div>
              <div className="px-5 h-full flex items-center font-bold gap-2 whitespace-nowrap" style={{ color: 'white', fontSize: '17px', letterSpacing: '0.5px' }}>
                TRADE <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holdings & Buying Section - Combined Box */}
      <section className="px-6 py-16 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="border" style={{ backgroundColor: '#0B0B0B', borderColor: '#2B2B2B' }}>
            {/* Currently Holding */}
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <h2 className="text-2xl md:text-4xl tracking-wider font-extrabold" style={{ color: '#595959' }}>CURRENTLY<br />HOLDING</h2>
                <div className="text-left md:text-right">
                  <div className="text-3xl md:text-5xl tracking-wider" style={{ color: 'white', fontWeight: 400 }}>6.9432 ETH</div>
                  <div className="text-3xl md:text-5xl tracking-wider" style={{ color: 'white', fontWeight: 400 }}>+ 32 NFTS</div>
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
                  <div className="text-3xl md:text-5xl mb-8 md:mb-12 tracking-wider" style={{ color: 'white', fontWeight: 400 }}>6.9432 ETH</div>
                  
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
                      OWNER <span style={{ color: 'white' }}>0XM0FA...6066</span>
                    </div>
                    <button className="border border-white px-3 py-2.5 text-xs sm:text-sm tracking-wide sm:flex-1 font-bold text-center" style={{ borderColor: '#2B2B2B', color: 'white' }}>
                      VIEW ON MARKETPLACE
                    </button>
                  </div>
                </div>

                {/* NFT Preview */}
                <div className="flex justify-center lg:justify-end w-full lg:flex-1 mt-8 lg:mt-0">
                  <div className="w-64 h-72 md:w-72 md:h-80 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1C1C1C' }}>
                    <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-full opacity-90"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Based Punk Council */}
      <section className="px-6 py-16 bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="border" style={{ backgroundColor: '#0B0B0B', borderColor: '#2B2B2B' }}>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wider">
                    BASED PUNK COUNCIL<br />
                    <span className="font-bold tracking-wider">(COMING SOON)</span>
                  </h2>
                  <p className="text-xs md:text-sm mb-6 max-w-2xl font-bold tracking-wider" style={{ color: '#595959' }}>
                    THE TOP 1% OF BASEDSTR HOLDERS EARN A SEAT AT THE TABLE -<br className="hidden md:block" />
                    THE BASED PUNK COUNCIL. AN ELITE CIRCLE GUIDING FUTURE<br className="hidden md:block" />
                    PROTOCOL UPGRADES, CULTURAL COLLABS, AND TREASURY DECISIONS.
                  </p>
                  <button className="px-6 md:px-8 py-2.5 md:py-3 text-sm font-bold tracking-wider transition flex items-center gap-2" style={{ backgroundColor: '#FFFFFF', color: '#000000', WebkitTextFillColor: '#000000' }}>
                    COMING SOON <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </button>
                </div>
                <div className="flex items-center justify-center md:justify-end w-full md:w-auto" style={{ fontWeight: 300, color: 'white', letterSpacing: '0.15em', lineHeight: '1' }}>
                  <span className="text-[80px] md:text-[120px] lg:text-[180px]">01X</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* BASEDSTR Dot Matrix Section */}
      <section className="py-16 bg-black overflow-hidden">
        <div className="w-full">
          <div className="marquee">
            <span style={{ fontSize: '240px', fontWeight: 300, color: '#2B2B2B', letterSpacing: '0.4em', lineHeight: '1', whiteSpace: 'nowrap' }}>
              $BASEDSTR $BASEDSTR $BASEDSTR $BASEDSTR $BASEDSTR $BASEDSTR
            </span>
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

      {/* Footer */}
      {/* <footer className="px-6 py-8">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 BASEDSTR. ALL RIGHTS RESERVED.</p>
        </div>
      </footer> */}
    </div>
  )
}
