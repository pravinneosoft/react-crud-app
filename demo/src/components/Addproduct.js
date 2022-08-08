import React, { useState } from "react";
import { addProducts } from "../config/Myservice";
import { useNavigate } from "react-router-dom";
export default function Addproduct() {
  const [state, setState] = useState({ pname: "", price: "", quantity: "" });
  const navigate = useNavigate();
  const handler = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const postData = (e) => {
    e.preventDefault();
    console.log(state);
    addProducts(state).then((res) => {
      alert("Product Added");
      navigate("/");
    });
  };
  return (
    <div>
      <h2> Add Products</h2>
      <form onSubmit={postData}>
        <div className="form-group">
          <label> Pname </label>
          <input
            type="text"
            name="pname"
            className="form-control"
            onChange={handler}
          />
        </div>
        <div className="form-group">
          <label> Price </label>
          <input
            type="text"
            name="price"
            className="form-control"
            onChange={handler}
          />
        </div>
        <div className="form-group">
          <label> Quantity </label>
          <input
            type="text"
            name="quantity"
            className="form-control"
            onChange={handler}
          />
        </div>
        <input type="submit" value="Add" className="btn btn-success" />
      </form>
    </div>
  );
}
