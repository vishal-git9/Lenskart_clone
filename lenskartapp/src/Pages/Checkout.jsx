import React from "react";
import CartItem from "./CartItem";
import "./Pay.css";
import CartNavbar from "../Cart/CartNavbar";
import { useNavigate } from "react-router-dom";
function Payment() {
  let navigate = useNavigate();
  return (
    <>
      <CartNavbar />
      <div id="payment-container">
        <div id="addres">
          <h1 id="ships">Shipping Address</h1>
          <div id="shipping-ad">
            <input
              type="text"
              name="First Name*"
              placeholder="First Name"
              className="input"
              required
            />

            <input required
              type="text"
              name="Last Name*"
              placeholder="Last Name"
              className="input"
            />

            <div id="radio">
              <label>Gender</label>
              <input required type="radio" id="Male" name="Male" value="Male" />
              <label for="Male">Male</label>
              <input required type="radio" id="Female" name="Male" value="Female" />
              <label for="Female">Female</label>
            </div>

            <input required
              className="input"
              type="number"
              name="Email"
              placeholder="Number"
            />

            <input required
              className="input"
              type="email"
              name="Email"
              placeholder="Email"
            />

            <hr />

            <input required
              className="input"
              type="text"
              name=""
              value=""
              placeholder="Addresh Line 1"
            />
            <input required
              className="input"
              type="text"
              name=""
              value=""
              placeholder="Addresh Line 2"
            />

            <br />

            <input required
              className="input"
              type="text"
              name=""
              value=""
              placeholder="Zip/Postal Code"
            />
            <input required
              className="input"
              type="text"
              name=""
              value=""
              placeholder="City/District"
            />

            <br />

            <input required
              className="input"
              type="text"
              name=""
              value="India"
              placeholder="Addresh Line 1"
            />
            <input required
              className="input"
              type="text"
              name=""
              value=""
              placeholder="State"
            />

            <br />

            <p id="shiping" onClick={() => navigate("/payment")}>
              CONTINUE
            </p>
          </div>
        </div>

        <CartItem />
      </div>
    </>
  );
}

export default Payment;
