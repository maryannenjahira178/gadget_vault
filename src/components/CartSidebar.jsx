const CartSidebar = ({ cart, cartOpen, closeCart, removeFromCart }) => {
  const total = cart.reduce(
    (sum, item) => sum + Number(item.product_cost),
    0
  );

  return (
    <>
      {cartOpen && (
        <div className="overlay" onClick={closeCart}></div>
      )}

      <div className={cartOpen ? "cart-sidebar active" : "cart-sidebar"}>

        <h3>Your Cart</h3>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={`http://maryanne.alwaysdata.net/static/images/${item.product_photo}`}
                  alt=""
                  width="60"
                />

                <div>
                  <h6>{item.product_name}</h6>
                  <p>Ksh {item.product_cost}</p>
                </div>
                <button
                  className="remove-btn text-dark"
                  onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            ))}

            <h4 className="mt-4">
              Total: Ksh {total}
            </h4>

            <button className="btn btn-light w-100 mt-3">
              Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;