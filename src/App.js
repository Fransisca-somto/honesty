/** @format */

import "./App.css";
import LoginPage from "./components/LoginPage";
import Home from "./components/home/Home";
import SignUp from "./components/SignUp";
import LoginComponent from "./components/LoginComponent";
import Welcome from "./components/Welcome";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupSuccess from "./components/SignupSuccess";
import Inventory from "./components/inventory/Inventory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route index path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/success" element={<SignupSuccess />} />
        </Route>

        <Route path="/" element={<Nav />}>
          <Route index path="/home" element={<Home />} />
          <Route path="/newproduct" element={<Inventory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
