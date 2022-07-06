import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const AppContext = createContext();
export default function AppContextProvider({children}){
    const [state ,setState] =useState("dark");
    const toggleState =()=>{
        setState(state==="dark"?"light":"dark");
    }



const ContextApp = () => {
  return (
    <div>
         <AppContextApp.Provider value={[state,toggleState]}>
           <children/>
         </AppContextApp.Provider>
    </div>
  );
}
}

export default ContextApp

