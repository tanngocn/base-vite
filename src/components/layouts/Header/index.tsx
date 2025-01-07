import InputText from "@/components/common/Form/InputText";
import { Search } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="relative">
      <nav className="bg-gray-800 text-white">
        <div className="container">
          <div className="flex justify-between items-center py-4">
            <div>
              <a href="/" className="text-xl font-bold">
                Logo
              </a>
            </div>
            <div>
              <a href="/login" className="mr-4">
                Login
              </a>
              <a href="/register">Register</a>
            </div>
          </div>
        </div>
      </nav>
      <InputText classNames="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[300px] h-[40px] bg-white" prefix={<Search />}/>
    </header>
  );
};
export default Header;
