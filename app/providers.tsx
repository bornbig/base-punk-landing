'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { config } from '@/lib/wagmi'
import './rainbowkit.css'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={{
            ...darkTheme({
              accentColor: '#0B0B0B',
              accentColorForeground: 'white',
              borderRadius: 'none',
              fontStack: 'system',
              overlayBlur: 'small',
            }),
            colors: {
              ...darkTheme().colors,
              modalBackground: '#0B0B0B',
              modalBorder: '#2B2B2B',
              modalText: 'white',
              modalTextSecondary: '#999',
              profileForeground: '#0B0B0B',
              accentColor: '#0B0B0B',
            }
          }}
          modalSize="compact"
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
