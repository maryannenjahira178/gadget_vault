import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import Footer from './Footer'

const Home = ({ search, addToCart }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const img_url = "http://maryanne.alwaysdata.net/static/images/"

  const getProducts = async () => {
    setError("")
    setLoading("Wait as we load products...")

    try {
      const response = await axios.get(
        "https://maryanne.alwaysdata.net/api/get_product_details"
      )
      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  // 🔥 FILTER PRODUCTS BASED ON SEARCH
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes((search || "").toLowerCase()) ||
    product.product_description.toLowerCase().includes((search || "").toLowerCase())
  )

  return (
    <div className="container-fluid mt-4">

      {/* Carousel section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <Carousel />
        </div>
      {/* hero section */}
        <div className="col-md-6">
          <h1 className="hero">
            Discover Premium Tech at the Gadget Vault
          </h1>

          <p>
            High-quality electronics at the best prices
          </p>

          <button
            className="btn btn-dark mt-2 px-4 py-2 glow-btn"
            onClick={() => document.getElementById("products").scrollIntoView({behavior: "smooth"})}>
            Shop Now
          </button>
        </div>
      </div>

      {/* Products */}
      <h2 id="products" className="text mb-3">Available Products</h2>

      <h5 className="text">{loading}</h5>
      <h5 className="text-danger">{error}</h5>

      {/* invalid if no results are found */}
      {filteredProducts.length === 0 && search && (
        <p className="text-warning">No products found for "{search}"</p>
      )}

      <div className="row">
        {filteredProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card shadow text-center p-3 h-100">

              <img
                src={img_url + product.product_photo}
                alt=""
                className="product_img mt-2"
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />

              <div className="card-body">
                <h5 className="text-light mt-2">{product.product_name}</h5>

                <p className="text-light">
                  {product.product_description}
                </p>

                <b className="text-success d-block mb-2">
                  Ksh: {product.product_cost}
                </b>

                <button
                  className="btn btn-dark text-light"
                  onClick={() =>
                    navigate("/makepayment", { state: { product } })
                  }
                >
                  Buy Now
                </button> <br />
                 <button
                    className="btn mt-2"
                    onClick={(openCart) => addToCart(product)}
                  >
                    Add to Cart
                  </button>

              </div>

            </div>
          </div>
        ))}
      </div>
        <Footer/>
    </div>
  )
}

export default Home