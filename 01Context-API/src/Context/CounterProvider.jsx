

import { useRef, useState } from "react";
import { CounterContext } from "./CounterContext";
import Engine from "../Logics/Engine";
// creating provider 
export function CounterProvider({children}){
    const serviceRef = useRef(new Engine())
    const service = serviceRef.current;
    const [count,setCount] = useState(service.count)
    function Increment(){
        setCount(service.increment())
        console.log(count)
    }
    return(
        <CounterContext.Provider value={{count,Increment}}>
            {children}
        </CounterContext.Provider>
    )
}