import s from "./Layout.module.css"
import { Footer, Navbar } from "@components/common"


interface LayoutProps {
    children: React.ReactNode;
  }


   
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return( 
      <div className={s.root}>
        <Navbar/>
        <main className="fit">
          { children }
        </main>
        <Footer/>
      </div>
    )
  };

  export default Layout