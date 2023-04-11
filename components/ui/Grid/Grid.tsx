
import s from "./Grid.module.css"

interface Grid {
    children: React.ReactNode;
  }

const Grid: React.FC<Grid> = ({children}) => {
    return (
        <div className={s.root}>
            {children}
        </div>
    )
}

export default Grid