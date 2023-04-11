
interface Grid {
    children: React.ReactNode;
  }

const Grid: React.FC<Grid> = ({children}) => {
    return (
        <div className="root-grid">
            {children}
        </div>
    )
}

export default Grid