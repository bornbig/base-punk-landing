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

export interface HoldingNFTData {
  name: string
  imageUrl: string
  animationUrl: string
}

export interface HoldingItem {
  tokenId: number
  purchasePriceWei: string
  listPriceWei: string
  lastEventBlock: string
  nft: HoldingNFTData
  metaStatus: string
}

export interface CurrentHoldingsResponse {
  items: HoldingItem[]
  totalCount: number
  totalValue: {
    wei: string
    eth: number
  }
  next: string | null
}

export interface SaleNFT {
  name: string
  imageUrl: string
  animationUrl: string
}

export interface SaleItem {
  tokenId: number
  salePriceWei: string
  buyer: string
  soldAtBlock: string
  nft: SaleNFT
  metaStatus: string
}

export interface SalesResponse {
  items: SaleItem[]
  stats: {
    wei: string
    eth: number
    soldCount: number
  }
  next: string | null
}

export async function fetchBestListing(): Promise<BasedPunksAPIResponse> {
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

export async function fetchSales(): Promise<SalesResponse> {
  const baseUrl = typeof window === 'undefined' 
    ? 'http://localhost:3000' 
    : ''
  
  const response = await fetch(`${baseUrl}/api/sales`, {
    cache: 'no-store',
  })
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }
  
  return response.json()
}
