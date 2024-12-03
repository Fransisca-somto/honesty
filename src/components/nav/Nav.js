/** @format */

import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./nav.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Logo from "../../images/logo.png";

const Nav = () => {
  return (
    <div className="nav">
      <nav>
        <div className="logo-section">
          <h1>H.C</h1>
          <img src={Logo} alt="Logo" className="logo" />
          <div className="socials">
            <div>
              <IoLogoWhatsapp />
              <p>Whatsapp</p>
            </div>
            <div>
              <FaFacebook />
              <p>Facebook</p>
            </div>
            <div>
              <FaTwitter />
              <p>Twitter</p>
            </div>
            <div>
              <FaLinkedin />
              <p>LinkedIn</p>
            </div>
            <div>
            <BiLogoGmail />
              <p>Email</p>
            </div>
          </div>
        </div>
        <ul className="navs">
          <li>
            <Link className="a home" to="/home" style={{ borderLeft: "0" }}>
              Home
            </Link>
          </li>
          <li>
            <Link className="a" to="#">
              Inventory
              {/* <MdKeyboardArrowDown /> */}
            </Link>
            <ul className="innernav">
              <li>
                <Link className="b" to="#">Products</Link>
                <ul>
                  <li><Link className="c" to="/newproduct">New Products</Link> </li>
                  <li><Link className="c" to="/modifyproduct">Modify Products</Link></li>
                </ul>
              </li>
              <li>
                <Link className="b">Customers</Link>
              </li>
              <li>
                <Link className="b">Vendors</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="a">
              Customer
              {/* <MdKeyboardArrowDown /> */}
            </Link>
          </li>
          <li>
            <Link className="a">
              Vendors
              {/* <MdKeyboardArrowDown /> */}
            </Link>
          </li>
          <li>
            <Link className="a">
              Account
              {/* <MdKeyboardArrowDown /> */}
            </Link>
          </li>
          <li>
            <Link className="a">
              Assets Mgnt
              {/* <MdKeyboardArrowDown /> */}
            </Link>
          </li>
          <li>
            <Link className="a">
              Company
              {/* <MdKeyboardArrowDown /> */}
            </Link>
          </li>
          <li>
            <Link className="a" style={{ borderRight: "0" }}>
              Report
              {/* <MdKeyboardArrowDown /> */}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer></footer>
    </div>
  );
};

export default Nav;
