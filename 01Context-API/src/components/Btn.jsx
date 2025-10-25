import { useContext } from "react"
import { CounterContext } from "../Context/CounterContex"

export default function Btn(){
    const {Increment} = useContext(CounterContext)
    return(
        <div>

            <button onClick={Increment}>Increment</button>
            <button>Reset</button>
            <button>decrement</button>
        </div>
    
    )
}