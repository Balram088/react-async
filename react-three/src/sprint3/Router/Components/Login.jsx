import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export const Login = () => {
   const [formState , setFormState] = useState({
    email:"",
    password:""
   });
   const auth = useContext(AuthContext);
   const navigate = useNavigate();
   function handleChange(e){
    const {name , value } =e.target;
    setFormState({
        ...formState,
        [name]:value
    });}
    function handleSubmit(e){
        e.preventDefault();
        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json" 
            },
            body: JSON.stringify(formState)
        })
        .then((res) => res.json())
        .then((res) => {
            
            console.log(res);
            auth.handleLogin(res.token);
            navigate("/users");
        })
        .catch((err) =>{
            alert("Please Enter Currect email or password ");
        });
    }
    return (
    <div> 
         <h1>
            Login
         </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                 value={formState.email}
                 onChange={handleChange}
                 placeholder="Email"
                 name="email"
                />
            </div>
            <div>
                <input 
                 value={formState.password}
                 onChange={handleChange}
                 placeholder="Password"
                 name="password"
                 type="password"
                />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
