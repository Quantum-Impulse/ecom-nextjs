import { Sidebar } from "@components/ui";
import s from "./Layout.module.css"
import { Footer, Navbar } from "@components/common"
import { CartSidebar } from "@components/cart";


interface LayoutProps {
    children: React.ReactNode;
  }


   
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return( 
      <div className={s.root}>
        <Navbar/>
        <Sidebar>
          <CartSidebar />
        </Sidebar>
        <main className="fit">
          { children }
        </main>
        <Footer/>
      </div>
    )
  };

  export default Layout