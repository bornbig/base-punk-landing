'use client'

export default function Home() {

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-50 border-b border-gray-800">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="text-white text-lg" style={{ letterSpacing: '0.15em' }}>
            $BASEDSTR
          </div>

          {/* Twitter X logo */}
          <a href="https://x.com/basedSTR" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors cursor-pointer relative z-50">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 -mt-40">
        {/* Marquee ticker */}
        <div className="w-full overflow-hidden mb-1">
          <div className="marquee">
            <span className="text-gray-500" style={{ fontSize: 'clamp(6rem, 20vw, 18rem)', letterSpacing: '0.3em', fontWeight: 400, whiteSpace: 'nowrap' }}>
              $BASEDSTR $BASEDSTR $BASEDSTR $BASEDSTR $BASEDSTR $BASEDSTR
            </span>
          </div>
        </div>

        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-8" style={{ letterSpacing: '0.05em', fontWeight: 400 }}>
          A HOME FOR BASED PUNKS
        </h1>

        <a href="https://x.com/basedSTR" target="_blank" rel="noopener noreferrer" className="border border-white text-white px-8 py-3 text-sm hover:bg-white hover:text-black transition-colors" style={{ letterSpacing: '0.2em' }}>
          COMING SOON
        </a>
      </div>
    </div>
  )
}
