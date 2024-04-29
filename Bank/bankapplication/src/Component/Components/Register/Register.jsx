import React, { useState } from "react";
// import './Register.css'
import "../../../App.css";

import { Link } from "react-router-dom";
import video1 from "../../LoginAssests/video1.mp4";
import logo from "../../LoginAssests/logo.png";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.error("Passwords do not match");
      return;
    }
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        conformPass: cpassword,
      }),
    });
    toast.success("Register Successfully")
  };

  return (
    <div className="registerPage flex">
      <ToastContainer />
      <div className="container flex">
        <div className="videoDiv">
          <video src={video1} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">
              Bridging Dreams to Reality, One Payment at a Time
            </h2>
            <p>Unlock dreams. Easy EMI!</p>
          </div>

          <div className="footerDiv  flex">
            <span className="text">Have an account?</span>
            <Link to={"/login"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>

          <form action="" className="form grid" onSubmit={handleSubmit}>
            <div className="inputDiv">
              <label htmlFor="email" style={{ marginLeft: "-213px" }}>
                Email
              </label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username" style={{ marginLeft: "-178px" }}>
                Username
              </label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  required
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password" style={{ marginLeft: "-178px" }}>
                Password
              </label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="cpassword" style={{ marginLeft: "-115px" }}>
                Confirm Password
              </label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="cpassword"
                  required
                  placeholder="Confirm Password"
                  value={cpassword}
                  onChange={(e) => setcpassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Register </span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <Link to="">Click Here</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
