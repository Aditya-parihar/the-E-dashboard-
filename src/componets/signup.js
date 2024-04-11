import { stringify } from 'postcss';
import React , {useEffect, useState} from 'react'
import {useNavigate, json } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const collectData = async() => {
      // console.warn(name, email, password);
      let data = await fetch("http://localhost:443/register" , {
        method : "post",
        body : JSON.stringify({name, email, password}),
        headers :{
            "content-type" : "application/json"
        }
      })
      data = await data.json()
      let {name , email , password} = data
      if(!name || !email || !password){
        alert("please enter the")
      }
      // localStorage.setItem("user" , JSON.stringify(data))

      setName('');
      setEmail('');
      setPassword('');

    navigate('/login')

    return false
     
    };

    // useEffect(()=>{
    //   const auth = localStorage.getItem('user')
    //   if(auth){
    //     navigate('/')
    //   }
    // }, [])

  return (
    <div>
        <h1 className='font-bold text-3xl mb-4 mt-5 text-center'>Register</h1>
        <form className=' flex flex-col items-center mt-8 '>
            <input className='mb-2 px-4 py-2 border rounded text-2xl' type='name' value={name} onChange={(e)=>{
                setName(e.target.value)
                console.log(e.target.value)
            }} placeholder='Name'/>
            <input className='mb-2 px-4 py-2 border rounded text-2xl' type='email' value={email} onChange={(e)=>{
                setEmail(e.target.value)}} placeholder='E-mail'/>
            <input className='mb-2 px-4 py-2 border rounded text-2xl' type='password' value={password} onChange={(e)=>{
                setPassword(e.target.value)}} placeholder='Password'/>
            <button className='mb-2 px-4 py-2 border rounded text-2xl bg-blue-500' type='button' onClick={collectData}>Sign Up</button>
        </form>
    </div>
  )
}

export default Signup