
import { ReactNode, FC } from "react"
import {Marquee as newMarquee} from "react-fast-marquee";
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
      <newMarquee>
        { () =>
          <div className={s.container}>
            {children}
          </div>
        }
      </newMarquee>
    </div>
  )
}

export default Marquee