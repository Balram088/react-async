import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'

export const PrivateRouter = ({children}) => {
    const {state} =useContext(AuthContext);

    if(!state.isAuth){
       
        return <Navigate to="/login" />
    }else{
      return children
   }
}
   
 

