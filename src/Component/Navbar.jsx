import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <form className="d-flex  col-6" role="search">
              <input
                className="form-control "
                type="search"
                placeholder="Search For Products,Brands & More "
                aria-label="Search"
              />
            </form>
            <div className="container mt-2 ">
              <ul className=" ulhead">
                <li className=" order-first">
                    <Link className="link" to="/Login">
                  <i className="fa-regular fa-user"> </i>
                  <span className="m-2">Login</span>
                 
                    </Link>
                </li>
                 <li className=" ">
                    <Link className="link navbar-link cart-trolley--link" to={"/cart"}>
                  <i className="fa-solid fa-cart-shopping fa-lg cart-trolley"></i> 
                <span className='cart-total--item'>{}</span>

                    </Link>

                    
                </li> 
                  <li>
              
            </li>
                <li className="  order-last">
                  <Link className="link"> 
                  <i className="fa-solid fa-store fa-lg "></i>
                  <span> Become a Seller</span>
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-ellipsis-vertical fa-lg"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
