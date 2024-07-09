import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decAction, IncAction, removeAction } from "../Component/Action";
import { Link } from "react-router-dom";

const Cart = () => {
  const data = useSelector((store) => store);

  const dispatch = useDispatch();

  function IncQty(id) {
    dispatch(IncAction(id));
  }
  function DecQty(id) {
    dispatch(decAction(id));
  }
  function removeItem(id) {
    dispatch(removeAction(id));
  }
    


  return (
    <div className="mb-5 mt-5">
      {data.length === 0 ? (
        <div className="d-flex w-100 gap-5 justify-content-center">

       <h4 className=" align-item-centers ">Your Cart Is Empty ! <span style={{fontSize:"30px"}} className="w-25 ">👉</span>  <br /> Add Item Now 🥹 : </h4>
        <Link to={"/"}>
        <button className="btn btn-primary"> Shop Now </button>
        </Link>
        </div>
      
      ) : (
        <>
          <div className="container justify-content-center">
            <div className="w-25 border mt-2 justify-content-between mb-3 d-flex col-6 w-50 bg-light">
              <div className="d-flex">
                <p className="m-1 mx-5">From Saved Address</p>
              </div>
              <button className="btn btn-primary">Enter Delivery Pincode</button>
            </div>
            <div></div>
          </div>
          <div>
            {data.map((el, i) => {
              return (
                <div key={el.id} className="d-flex gap-3 justify-content-around">
                  <div className="container" style={{ width: "18rem" }}>
                    <img
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        objectPosition: "top",
                        width: "300px",
                        borderRadius: "50px",
                        padding: "10px",
                      }}
                      src={el.img}
                      alt=""
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="text-success">{el.price}</h5>
                    
                    <h4>{el.name}</h4>
                    <h4 className="d-flex gap-3">
                      Quantity:
                      <button
                        onClick={() => DecQty(el.id)}
                        className="btn btn-primary"
                      >
                        -
                      </button>
                      <h4
                        style={{ width: "50px" }}
                        className="rounded border border-primary"
                      >
                        <span className="p-3">{el.qty}</span>
                      </h4>
                      <button
                        onClick={() => IncQty(el.id)}
                        className="btn btn-primary"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(el.id)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </h4>
                    <p className="w-50">{el.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;