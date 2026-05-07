import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = () => {
  const [product_name,setProductName]=useState("")
  const [product_description,setProductDescription]=useState("")
  const [product_cost,setProductCost]=useState("")
  const [product_photo,setProductPhoto]=useState("")

  const [loading,setLoading]=useState("")
  const [success,setSuccess]=useState("")
  const [error,setError]=useState("")
  

  const submit=async (e) => {
    e.preventDefault()
    setLoading("wait as we add your product...")
    setError("")
    setSuccess("")

    try {
      const data=new FormData()
      data.append("product_name",product_name)
      data.append("product_description",product_description)
      data.append("product_cost",product_cost)
      data.append("product_photo",product_photo)

      const response=await axios.post("https://maryanne.alwaysdata.net/api/add_product",data)
      console.log(response)
      setLoading("")
      setError("")
      setSuccess(response.data.message)
      
    } catch (error) {
      setError(error.message)
      setLoading("")
      setSuccess("")
      console.log(error)

    }
  }
  return (
    <div className='row mt-4 justify-content-center'>
      <div className='card shadow col-md-6 p-3 text-center'>
        <h1 className='text-light'>Add Product</h1>
        <h5 className='text-primary'>{loading}</h5>
        <h5 className='text-success'>{success}</h5>
        <h5 className='text-danger'>{error}</h5>
        <div>
          <form onSubmit={submit}>
            <input type="text" className='form-control' placeholder='Enter product name' required value={product_name} onChange={(e)=>{setProductName(e.target.value)}}/> <br />

            <input type="text" className='form-control' placeholder='Describe your product...' value={product_description} onChange={(e)=>{setProductDescription(e.target.value)}}/> <br />

            <input type="number" className='form-control' placeholder='Product cost' value={product_cost} onChange={(e)=>{setProductCost(e.target.value)}}/> <br />

            <input type="file" className='form-control' required accept='image/*' onChange={(e)=>setProductPhoto(e.target.files[0])}/> <br />
            <button type='submit' className='btn btn-dark'>Upload Product</button>
          </form>
          
        </div>

      </div>
        
    </div>
  )
}

export default AddProduct