
import { ReactNode, FC } from "react"
import {Marquee as NewMarquee} from "react-fast-marquee";
import s from "./Marquee.module.css"

interface Props {
  children: ReactNode[]
}

const Marquee: FC<Props> = ({children}) => {
  return (
    <div className={s.root}>
      <NewMarquee>
        { () =>
          <div className={s.container}>
            {children}
          </div>
        }
      </NewMarquee>
    </div>
  )
}

export default Marquee