/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form } from "react-router-dom";
import "./inventory.css"

const Inventory = () => {
  const [barCode, setBarCode] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [basicUom, setBasicUom] = useState("");
  const [salesUom, setSalesUom] = useState("");
  const [purchaseUom, setPurchaseUom] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [salesPrice, setSalesPrice] = useState("");
  const [dealerPrice, setDealerPrice] = useState("");
  const [reorderLevel, setReorderLevel] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNewproduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3500/newproduct",
        { barCode, productName, category, type, description, basicUom, salesUom, purchaseUom, costPrice, salesPrice, dealerPrice, reorderLevel },
        { headers: { "Content-Type": "application/json" } }
      );
      navigate("/created");
      console.log("New product created Successfully");
      alert("New product created Successfully");
    } catch (err) {
      setError("Product already exists");
    }
  };
  return (
    <div className="newproduct">
        <p>New Product</p>
        <div>
      <form action="#" method="POST">
        <label htmlFor="barcode">
          <span>Bar Code:</span>
          <input type="text" id="barcode"/>
        </label>
        <label htmlFor="productName">
          <span>Product Name:</span>
          <input type="text" id="productName" />
        </label>
        <label htmlFor="category">
          <span>Category:</span>
          <input type="text" id="category" />
        </label>
        <label htmlFor="type">
          <span>Type</span>
          <input type="text" id="type" />
        </label>
        <label htmlFor="description">
          <span>Description:</span>
          <input type="text" id="description"/>
        </label>
        <label htmlFor="basicUom">
          <span>Basic UoM:</span>
          <input type="text" id="basicUom"/>
        </label>
        <label htmlFor="salesUom">
          <span>Sales UoM:</span>
          <input type="text" id="salesUom" />
        </label>
        <label htmlFor="purchaseUom">
          <span>Purchase UoM:</span>
          <input type="text" id="purchaseUom" />
        </label>
        <label htmlFor="costprice">
          <span>Cost Price:</span>
          <input type="text" id="costprice"/>
        </label>
        <label htmlFor="salesprice">
          <span>Sales Price:</span>
          <input type="text" id="salesprice"/>
        </label>
        <label htmlFor="dealersprice">
          <span>Dealers Price</span>
          <input type="text" id="dealersprice"/>
        </label>
        <label htmlFor="reorderlevel">
          <span>Re-order Level:</span>
          <input type="text" id="reorderlevel"/>
        </label>
        <button type="submit">Submit</button>
      </form>
        </div>
    </div>
  );
};

export default Inventory;


// echo "# honesty.com" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Fransisca-somto/honesty.com.git
// git push -u origin main

// git remote add origin https://github.com/Fransisca-somto/honesty.com.git
// git branch -M main
// git push -u origin main
