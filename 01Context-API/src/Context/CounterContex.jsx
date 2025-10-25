import { createContext, useState } from "react";
import engin from "../Logics/engin";
// create context 
export const CounterContext = createContext();

// creating provider 
export function CounterProvider({children}){
    const service = new engin()
    const [count,setCount] = useState(service.getCount())
    function Increment(){
        setCount(service.increment())
    }
    return(
        <CounterContext.Provider value={{count,Increment}}>
            {children}
        </CounterContext.Provider>
    )
}