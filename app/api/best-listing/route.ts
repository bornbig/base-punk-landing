import { NextResponse } from 'next/server'

const API_BASE_URL = 'https://based-str-be-production.up.railway.app'

export async function GET() {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/opensea/best-listing/basedpunks`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching best listing:', error)
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    )
  }
}
