import React from "react";
import CartItem from "./Cartitem";
import "../../Styles/pay.css";
import CartNavbar from "../Cart/CartNavbar";
import { useNavigate } from "react-router-dom";
function Payment() {
  let navigate = useNavigate();
  const handleClick = (e)=>{
    e.preventDefault()
    navigate("/payment")
  }
  return (
    <div style={{marginTop:"200px"}}>
      <CartNavbar />
      <div id="payment-container">
        <div id="addres">
          <h1 id="ships">Shipping Address</h1>
          <div id="shipping-ad">
            <form  onSubmit={handleClick}>
            <input
              type="text"
              name="First Name*"
              placeholder="First Name"
              className="input"
              required
            />

            <input
              type="text"
              name="Last Name*"
              placeholder="Last Name"
              className="input"
              required
            />

            <div id="radio">
              <label>Gender</label>
              <input type="radio" id="Male" name="Male" value="Male" required/>
              <label for="Male">Male</label>
              <input type="radio" id="Female" name="Male" value="Female" required />
              <label for="Female">Female</label>
            </div>

            <input
              className="input"
              type="number"
              name="Email"
              placeholder="Number"
              required
            />

            <input
              className="input"
              type="email"
              name="Email"
              placeholder="Email"
              required
            />

            <hr />

            <input
              className="input"
              type="text"
              name=""
              placeholder="Addresh Line 1"
              required
            />
            <input
              className="input"
              type="text"
              name=""
              placeholder="Addresh Line 2"
              required
            />

            <br />

            <input
              className="input"
              type="text"
              name=""
              placeholder="Zip/Postal Code"
              required
            />
            <input
              className="input"
              type="text"
              name=""
              placeholder="City/District"
              required
            />

            <br />

            <input
              className="input"
              type="text"
              name=""
              value="India"
              placeholder="Addresh Line 1"
              required
            />
            <input
              className="input"
              type="text"
              name=""
              placeholder="State"
              required
            />

            <br />

            <button id="shiping">
              CONTINUE
            </button>
            </form>
          </div>
        </div>

        <CartItem />
      </div>
    </div>
  );
}

export default Payment;
