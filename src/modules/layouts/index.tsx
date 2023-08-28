import Header from "./Header";
import Footer from "./Footer";

const Layout =({children}: {children: React.ReactNode})=>{
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  )
}
export default Layout;