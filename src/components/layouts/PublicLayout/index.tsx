import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router";

const PublicLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-grow py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default PublicLayout;
