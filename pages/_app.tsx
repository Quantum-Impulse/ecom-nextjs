
import { AppProps } from "next/app"
import { FC } from "react"
import "@assets/main.css"
import 'keen-slider/keen-slider.min.css'
import { UIProvider } from "@components/ui/context";

interface Layout {
    children: React.ReactNode;
  } 
  
const Noop: React.FC<Layout> = ({children}) => <>{children}</>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: any}}) {
  
  const Layout = Component.Layout ?? Noop

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}


export default MyApp