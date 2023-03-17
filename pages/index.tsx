import { useEffect } from "react"
import play from "../playground";

const Home = () => {

  
  useEffect( () => {
    play();
  }, [])
  
  return (
    
    <div>
      Hello World
    </div>
  )
}

export default Home