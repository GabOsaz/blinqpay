import StoreProvider from "./StoreProvider";
import CartImgComp from "./CartImgComp";
import LogoBtn from "./LogoBtn";

function Navbar() {
  return (
    <nav className="px-6 py-4 h-20 flex items-center justify-between bg-[#3A223E] bg-opacity-90 sticky top-0 border-b border-gray-700">
      {/* <StoreProvider> */}
        <LogoBtn />
      {/* </StoreProvider> */}
      <StoreProvider>
        <CartImgComp />
      </StoreProvider>
    </nav>
  );
}

export default Navbar;
