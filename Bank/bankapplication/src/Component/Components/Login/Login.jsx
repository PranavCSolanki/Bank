import React, {useState} from "react";
// import './Login.css'
import "../../App.css";
// import './Login.scss'
import { Link } from "react-router-dom";
import video from "../../LoginAssests/video.mp4";
import logo from "../../LoginAssests/logo.png";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {

  
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
  
      if (!response.ok) {
        toast.warn("Failed to login");
      }
  
      if (response.ok) {
        toast.success('Login successful!');
        const data = await response.json();
      }
    } catch (error) {
      toast.error("Error:", error.message);
    }
  };
  
  
  return (
    <div className="loginPage flex">
      <ToastContainer />
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Empowering Your Dreams, One EMI at a Time</h2>
            <p>Dream big. Pay small!</p>
          </div>

          <div className="footerDiv  flex">
            <span className="text">Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form grid" onSubmit={handleSubmit}>
            <span className="showMessage">Login Status will go here</span>

            <div className="inputDiv">
              <label htmlFor="username" style={{ marginLeft: "-178px" }}>
                Username
              </label>
              <div className="input flex">
                <FaUserShield className="icon" style={{ color: "grey" }} />
                <input type="text" id="username" placeholder="Enter Username" required value={username} onChange={(e)=>setusername(e.target.value)}/>
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
                  required
                  placeholder="Enter Password"
                  value={password} onChange={(e)=>setpassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Login </span>
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

export default Login;
