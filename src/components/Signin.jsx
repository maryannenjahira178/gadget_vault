import axios from 'axios'
import React, { useState } from 'react'
// import Signup from './Signup'
import { Link, useNavigate } from 'react-router-dom'


const Signin = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")

  // hook for navigation
  const navigate=useNavigate()

  // function to handle signin
  const submit=async(e)=>{
    e.preventDefault()
    // console.log("Sign in function")
    setLoading("Please wait as we sign you in...")

    try {
      // create formdata object to hold our key-value pair
      const data=new FormData()
      // use append method to attach/put the key-value pairs in the data object
      data.append("email",email)
      data.append("password",password)

      // send the data object to the flask api via the endpoint
      // axios-library that allows us to send http requests post/get etc
      // await-used in an asychronous function it enables to wait for response to reach before proceeding with execution of other lines of code
      // response-any request must have a response form api is stored to the response variable
      const response=await axios.post("https://maryanne.alwaysdata.net/api/signin",data)
      setLoading("")
      console.log(response)
      // making decision based on the response from flask api
      if (response.data.user){
        // storing the logged in user in the local storage 
        localStorage.setItem("user",JSON.stringify(response.data.user))
        // redirect to get products component
        navigate("/")
      }else{
        setError(response.data.message)
      }

    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }

  }

  return (
    <div className='row mt-3 justify-content-center'>
      <div className='card shadow col-md-6 p-3 text-center'>
        <h2 className='h2'>Sign In</h2>
        <h5 className='text-light'>{loading}</h5>
        <h5 className='text-danger'>{error}</h5>
        <div>
          <form onSubmit={submit}>
            <input type="email" className='form-control' placeholder='Enter email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br />

            <input type="password" className='form-control' placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> <br />
            
            <button type='submit' className='btn btn-dark'>Sign In</button>
          </form>
          <p className='text-light'>Don't have an Account? <Link to={'/signup'}>Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signin