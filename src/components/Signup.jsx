import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // hooks using useState that will be updated later in the program

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")

  // hook to store the error status
  const [error,setError]=useState("")
  const [loading,setLoading]=useState("")
  const [success,setSuccess]=useState("")

  const submit=async(e)=>{
    // preventDefault()-prevents the page from reloading and hooks from being cleared
    e.preventDefault()
    setSuccess("")
    setError("")
    setLoading("Wait as you get registered...")
    try {
      // prepare our data-FormData
      // create FormData object which will allow the key-value pairs
      const data=new FormData()
      // append key-value pairs to object data
      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)
      
      // Axios is a library that help in sending/making different types of http request to our api ie post/get/put/dalete/patch

      const response=await axios.post("https://maryanne.alwaysdata.net/api/signup",data)
      setLoading("")
      setSuccess(response.data.message)
      // clear our hooks start after succcessfully submission
      setUsername("")
      setEmail("")
      setPhone("")
      setPassword("")
      
    } catch (error) {
      setError(error.message)
      setLoading("")
      setSuccess("")
      
    }
  }

  return (
    <div className='row mt-4 justify-content-center'>
      <div className="card shadow col-md-6 p-3 text-center">
        <h2 className='h2'>Sign up</h2>
        <h5 className='text-danger'>{error}</h5>
        <h5 className='text-info'>{loading}</h5>
        <h5 className='text-success'>{success}</h5>
        <div>
          <form onSubmit={submit}>
              <input type="text" placeholder='Enter Username' required className='form-control'value={username} onChange={(e)=>setUsername(e.target.value)}/> <br />

              <input type="email" placeholder='Enter Email' required className='form-control'value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />

              <input type="password" placeholder='Enter Password' className='form-control' value={password} onChange={(e=>setPassword(e.target.value))}/> <br />

              <input type="tel" placeholder='Enter Phone' className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/> <br />

              <button type='submit' className='btn btn-dark'>Sign Up</button>
             
          </form>
          <p className='text-light'>Already have an account? <Link to={'/signin'}>Sign In</Link></p>
          </div>
      </div>
    </div>
  
  )
}

export default Signup