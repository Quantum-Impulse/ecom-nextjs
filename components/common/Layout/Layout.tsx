interface LayoutProps {
    children: React.ReactNode;
  }

import s from "./Layout.module.css"
   
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return( 
      <div className={s.root}>
        <main 
          style={{color: "var(--primary)"}}
          className="fit">
          { children }
        </main>
      </div>
    )
  };

  export default Layout