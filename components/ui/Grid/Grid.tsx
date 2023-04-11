
import s from "./Grid.module.css"
import cn from "classnames"


interface Grid {
    children: React.ReactNode;
    layout?: "A" | "B"
  }

const Grid: React.FC<Grid> = ({
    children, layout = "A"
}) => {

    const rootClassName = cn(
        s.root,
        {
          [s.layoutA]: layout === "A",
          [s.layoutB]: layout === "B",
        }
      )

    return (
        <div className={rootClassName}>
            {children}
        </div>
    )
}

export default Grid