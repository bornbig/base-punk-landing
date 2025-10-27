'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Grid configuration
    const gridSize = 8
    const cols = Math.ceil(canvas.width / gridSize)
    const rows = Math.ceil(canvas.height / gridSize)

    // Create grid cells
    const cells: { x: number; y: number; alpha: number; targetAlpha: number; speed: number }[] = []

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        cells.push({
          x: i * gridSize,
          y: j * gridSize,
          alpha: Math.random() * 0.15,
          targetAlpha: Math.random() * 0.15,
          speed: 0.002 + Math.random() * 0.003
        })
      }
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      cells.forEach(cell => {
        // Randomly change target alpha
        if (Math.random() < 0.005) {
          cell.targetAlpha = Math.random() * 0.15
        }

        // Smoothly transition to target alpha
        if (Math.abs(cell.alpha - cell.targetAlpha) > 0.001) {
          cell.alpha += (cell.targetAlpha - cell.alpha) * cell.speed * 10
        }

        // Draw cell
        ctx.fillStyle = `rgba(128, 128, 128, ${cell.alpha})`
        ctx.fillRect(cell.x, cell.y, gridSize - 1, gridSize - 1)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Animated grid background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 border-b border-gray-800">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="text-white text-lg" style={{ letterSpacing: '0.15em' }}>
            $BASEDSTR
          </div>

          {/* Twitter X logo */}
          <button className="text-white hover:text-gray-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 -mt-40">
        <div className="text-gray-500 mb-1" style={{ fontSize: 'clamp(6rem, 20vw, 18rem)', letterSpacing: '0.3em', fontWeight: 400 }}>
          $BASED
        </div>

        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-8" style={{ letterSpacing: '0.3em', fontWeight: 400 }}>
          A HOME FOR BASED PUNKS
        </h1>

        <button className="border border-white text-white px-8 py-3 text-sm hover:bg-white hover:text-black transition-colors" style={{ letterSpacing: '0.2em' }}>
          COMING SOON
        </button>
      </div>
    </div>
  )
}
