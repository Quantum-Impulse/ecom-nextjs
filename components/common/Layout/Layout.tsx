interface LayoutProps {
    children: React.ReactNode;
  }

import style from "./Layout.module.css"
   
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return( 
      <main className={style.root}>
        { children }
      </main>
    )
  };

  export default Layout