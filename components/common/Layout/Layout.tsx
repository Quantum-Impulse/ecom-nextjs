interface LayoutProps {
    children: React.ReactNode;
  }

import s from "./Layout.module.css"
   
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return( 
      <>
        <main className={s.root}>
          { children }
        </main>
      </>
    )
  };

  export default Layout