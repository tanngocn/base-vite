import '@rainbow-me/rainbowkit/styles.css';
import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import './index.css';
import { routers } from './routes/index.ts';
import { WagmiProvider } from 'wagmi';
import { config } from '@/lib/wagmiConfig';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          <RouterProvider router={routers} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  // </StrictMode>
);
