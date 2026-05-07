import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container">
        <div className="row p-4">

          {/* About Us */}
          <div className="col-md-4 mb-3">
            <h4 className="text-center">About Us</h4>
            <p>
                We specialize in high-quality electronics and smart devices built for everyday use. From cutting-edge gadgets to reliable accessories, our goal is to bring you
             innovative tech that improves your lifestyle. We focus on performance, durability,
             and affordability so you always get the best value in every purchase. 
            </p>
          </div>

          {/* Contact Us */}
          <div className="col-md-4 mb-3">
            <h4 className="text-center">Contact Us</h4>

            <form>
              <input
                type="email"
                placeholder="Enter your email..."
                className="form-control mb-2"
                required
              />

              <textarea
                placeholder="Leave a comment"
                className="form-control mb-2"
                rows="4"
              />

              <button type="submit" className="btn btn-dark w-100">
                Send a Message
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div className="col-md-4 text-center mb-3">
            <h4>Follow for more</h4>

            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <img src="/images 2/fb.png" alt="Facebook" width="30" />
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src="/images 2/in.png" alt="Instagram" width="30" />
              </a>

              <a href="https://www.x.com" target="_blank" rel="noreferrer">
                <img src="/images 2/x.png" alt="X" width="30" />
              </a>
            </div>
          </div>

        </div>

        <hr className="bg-light" />

        <p className="text-center pb-3 mb-0">
          © {new Date().getFullYear()} The Gadget Vault. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
