import { useContext } from "react"
import { CounterContext } from "../Context/CounterContext"

export default function Btn(){
    const {Increment} = useContext(CounterContext)
    return(
        <div>

            <button onClick={Increment}>Increment</button>
            
        </div>
    
    )
}