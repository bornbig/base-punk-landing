export interface NFTPrice {
  amount_raw: string
  amount_formatted: string
  currency: string
  decimals: number
}

export interface NFTData {
  image_url: string
  animated_url: string | null
  token_id: string
  name: string
  owner_address: string
  price: NFTPrice
}

export interface ContractBalance {
  eth_balance_raw: string
  eth_balance_formatted: string
  nft_holdings: number
  contract_address: string
}

export interface BasedPunksAPIResponse {
  nft: NFTData
  contract_balance: ContractBalance
}

const API_BASE_URL = 'https://based-str-be-production.up.railway.app'

export interface HoldingNFT {
  image_url: string
  animated_url: string | null
  token_id: string
  name: string
  collection_name: string
}

export interface CurrentHoldingsResponse {
  items: HoldingNFT[]
  totalCount: number
  totalValue: {
    wei: string
    eth: number
  }
  next: string | null
}

export async function fetchBestListing(): Promise<BasedPunksAPIResponse> {
  // Use absolute URL for SSR compatibility
  const baseUrl = typeof window === 'undefined' 
    ? 'http://localhost:3000' 
    : ''
  
  const response = await fetch(`${baseUrl}/api/best-listing`, {
    cache: 'no-store',
  })
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }
  
  return response.json()
}

export async function fetchCurrentHoldings(): Promise<CurrentHoldingsResponse> {
  const baseUrl = typeof window === 'undefined' 
    ? 'http://localhost:3000' 
    : ''
  
  const response = await fetch(`${baseUrl}/api/current-holdings`, {
    cache: 'no-store',
  })
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }
  
  return response.json()
}
