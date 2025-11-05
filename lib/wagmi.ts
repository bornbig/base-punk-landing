import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { base } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Based Strategy',
  projectId: 'bcde5c7efe4663a74e3e6f8e51ceb6ee',
  chains: [base],
  ssr: true,
})
