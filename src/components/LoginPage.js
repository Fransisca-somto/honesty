/** @format */

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import image12 from "../images/image12.jpg";
import image13 from "../images/image13.jpg";
import image14 from "../images/image14.jpg";
import image15 from "../images/image15.jpg";
import image16 from "../images/image16.jpg";
import "../styles/loginpage.css";

const LoginPage = () => {
  const [bgImage, setBgImage] = useState(image1);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBgImage(randomImage);
  }, []);

   return (
    <div
      className="img-bg"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="darker">
      <ul className="index__list">
        <li>Point Of Sales (POS)</li>
        <li>Multi-Location POS</li>
        <li>Dynamic Offline/Online Sync</li>
        <li>Stock Management</li>
        <li>Customers' Ledger</li>
        <li>Cash Flow/Bank Transactions</li>
        <li>Expenditures</li>
        <li>Secured Access Level</li>
        <li>Access from Any Device</li>
        <li>And More...</li>
      </ul>

        <Outlet/>

      </div>
    </div>
  );
};

export default LoginPage;
