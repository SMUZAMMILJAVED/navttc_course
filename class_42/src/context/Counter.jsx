import { createContext, useState } from "react";

export const CounterConetext=createContext(null)
export const CounterProvider=(props)=>{
   const [a,setA]= useState(12)
    return(
        <CounterConetext.Provider value={{count:a,setCount:setA}}>
            {props.children}
</CounterConetext.Provider>
    )
}

