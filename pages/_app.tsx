
import { AppProps } from "next/app"
import { FC } from "react"

interface Layout {
    children: React.ReactNode;
  } 
const Noop: React.FC<Layout> = ({children}) => <>{children}</>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC}}) {
  const Layout = Component.Layout ?? Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp