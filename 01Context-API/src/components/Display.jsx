import { useContext } from "react"
import { CounterContext } from "../Context/CounterContex"
export default function Display(){
    const {count}=useContext(CounterContext)
    return(
        <div>
            <h1>your Count : {count}</h1>
        </div>
    )
}