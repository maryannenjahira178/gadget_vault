import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ open, close }) => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const items = [
    { name: "Home", path: "/" },
    { name: "Sell", path: "/addproduct" },
    { name: "About", path: "/aboutus" },
    { name: "Sign in", path: "/signin" }
  ];

  const handleClick = (item) => {
    setActive(item.name);
    navigate(item.path);   // 👉 makes it REAL (navigation)
    close();               // close sidebar after click
  };

  return (
    <>
      {open && <div className="overlay" onClick={close}></div>}

      <div className={open ? "sidebar active" : "sidebar"}>
        <h3 className="sidebar-title">Menu</h3>

        {items.map((item) => (
          <div
            key={item.name}
            className={`sidebar-item ${
              active === item.name ? "active-item" : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;