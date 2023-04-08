interface LayoutProps {
    children: React.ReactNode;
  }

import style from "./Layout.module.css"
   
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return( 
      <div className={style.root}>
        <main className="fit">
          { children }
        </main>
      </div>
    )
  };

  export default Layout