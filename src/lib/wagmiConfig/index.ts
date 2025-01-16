import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { bsc, bscTestnet } from 'wagmi/chains';
import {
  binanceWallet,
  okxWallet,
  metaMaskWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { createConfig, http } from 'wagmi';
export const chainSupport = import.meta.env.NODE_ENV !== 'production' ? bscTestnet : bsc;
const walletConnectProjectId = '712214866d7d7e3929e6c329b701b717';
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [binanceWallet, okxWallet, metaMaskWallet, walletConnectWallet],
    },
  ],
  {
    appName: 'Shieldeum VPN',
    projectId: walletConnectProjectId,
  }
);

export const config = createConfig({
  connectors,
  chains: [chainSupport],
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
});
