import IconPlus from '@/assets/svg/IconPlus';
import Logo from '@/assets/svg/logo.svg';
import ButtonClipPath from '@/components/common/ButtonClipPath';
import { Button } from "@/components/ui/button";
import { useSignIn } from '@/hooks/useSignIn';

const Header: React.FC = () => {
    const { connectWallet } = useSignIn();

  return (
    <header className="relative">
      <nav className="text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <a href="/" className="text-xl font-bold">
                <img src={Logo} alt="logo-image" />
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <Button variant={'outline'} className='!h-9'>
                <IconPlus />
                Create an Agent
              </Button>
              <ButtonClipPath txtBtn="Connect wallet" onAction={connectWallet} />
            </div>
          </div>
      </nav>
    </header>
  );
};
export default Header;
