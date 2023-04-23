
import { ReactNode, FC } from "react"
import {Marquee as NewMarquee} from "react-fast-marquee";
import s from "./Marquee.module.css"
import cn from "classnames"

interface Props {
  children: ReactNode[]
  variant?: "primary" | "secondary"
}

const Marquee: FC<Props> = ({children, variant="primary"}) => {
  const rootClassName = cn(
    s.root,
    {
      [s.secondary]: variant === "secondary"
    }
  )
  
  return(
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