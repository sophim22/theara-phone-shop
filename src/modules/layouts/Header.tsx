import { Navbar } from "@/modules/components/shared/NavBar";
import { MobileNav } from "@/modules/components/shared/MobileNav";
const Header = () => {
  return (
    <div>
      <Navbar scrolling={true}/>
      <MobileNav />
    </div>
  );
};

export default Header;
