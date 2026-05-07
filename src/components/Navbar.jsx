import { useState } from "react";

const Navbar = ({ openSidebar, onSearch, cart, openCart }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);   // send search to App.js
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">

      {/* Sidebar button */}
      <button onClick={openSidebar} className="btn text-white me-2">
        ☰
      </button>

      {/* SEARCH */}
      <form
        onSubmit={handleSubmit}
        className="d-flex mx-auto w-50"
      >
        <input
          className="form-control rounded-pill"
          type="search"
          placeholder="Search gadgets..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="btn rounded-pill search-btn">
          Search
        </button>
      </form>
      {/* cart */}
      <div className="cart-icon text-white ms-3">
        🛒 {cart.length}
      </div>

    </nav>
  );
};

export default Navbar;