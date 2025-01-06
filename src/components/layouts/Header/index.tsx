const Header: React.FC = () => {
  return (
    <header>
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
    </header>
  );
};
export default Header;
