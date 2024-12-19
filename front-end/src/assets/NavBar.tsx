function NavBar() {
  return (
    <div>
      <nav
        className="flex items-center h-16 bg-green-500 text-black relative shadow-sm font-mono"
        role="navigation"
      >
        <div className="pl-3">
          <img src="jbicon.png" alt="JB Logo" className="h-12 w-12" />
        </div>
        <div className="pl-4">
          <h1 className="text-3xl font-bold text-green-100 font-serif">
            Juicebox Store
          </h1>
        </div>
        <div className="ml-auto pr-3">
          <a href="#" className="">
            <img src="cart.svg" alt="Cart" className="h-9 w-12" />
          </a>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
