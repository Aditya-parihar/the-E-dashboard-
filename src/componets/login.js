import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const Navigate = useNavigate()
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const clickTheLogin = async ()=>{
        let data = await fetch("http://localhost:443/login" , {
            method : "post",
            body : JSON.stringify({email, password}),
            headers :{
                "content-type" : "application/json"
            }
        })
        if (!data.ok) {
            throw new Error(`HTTP error! Status: ${data.status}`);
        }
        console.log(data)
        data = await data.json(data)
        console.log(data)

        if(data.name){
            localStorage.setItem("user" , JSON.stringify(data))
            Navigate('/profile')
        }else{
            alert("Enter the correct info")
        }
        setEmail("")
        setPassword("")
        return false
    }
  return (
    <div className='flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='font-bold text-3xl mb-7'>Login and Move into Your world</h1>
        <form className=' flex flex-col p-4 mb-20'>
           <input className='mb-2 px-4 py-2 border rounded text-lg' type='text' placeholder='email' value={email} onChange={(e)=>{
            setEmail(e.target.value)
            console.log("Email:", e.target.value)
           }} />
           <input className='mb-2 px-4 py-2 border rounded text-lg' type='password' placeholder='Enter the Password' value={password} onChange={(e)=>{
            setPassword(e.target.value)
            console.log(e.target.value)
           }} />
           <button className=' px-4 py-2 border rounded bg-blue-500' type='button' onClick={clickTheLogin}>Login</button>
        </form>
    </div>
  )
}

export default Login