import { useAccountModal, useConnectModal } from '@rainbow-me/rainbowkit';
import { useCallback, useEffect } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
// import { SetUser, logoutUser } from "../redux/actions";


export const useSignIn = () => {
  const { address, isDisconnected } = useAccount();
  const { openAccountModal } = useAccountModal();
  const { openConnectModal } = useConnectModal();
//   const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();

  const connectWallet = useCallback(async () => {

    if (openConnectModal) {
      openConnectModal();
    }
    if (openAccountModal) {
      openAccountModal();
    }
  }, [openConnectModal, openAccountModal]);

  const logout = useCallback(() => {
    handleClosePopup();
    disconnect();
   
  }, [disconnect]);

  const handleClosePopup = () => {
    setTimeout(() => {
      const button = document.querySelectorAll('button.iekbcc0');
      if (button && button.length) {
        button.forEach((item: any) => {
          const attr = item.getAttribute('aria-label');
          if (attr === 'Close') {
            item.click();
          }
        });
      }
    }, 400);
  };

  const signInSequence = useCallback(async () => {
    if (!address) {
      logout();
      return;
    }
    // save user info

    try {
    
    } catch (error) {
      console.error(error);
      logout();
    }
  }, [address, logout]);

  useEffect(() => {
    if (isDisconnected) {
      logout();
    }
  }, [isDisconnected, logout]);

  return { connectWallet, signInSequence, logout };
};
