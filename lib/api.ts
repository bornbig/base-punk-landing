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

export async function fetchBestListing(): Promise<BasedPunksAPIResponse> {
  const response = await fetch(`${API_BASE_URL}/v1/opensea/best-listing/basedpunks`)
  
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }
  
  return response.json()
}
