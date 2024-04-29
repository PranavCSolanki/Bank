import React, { useState, useEffect } from "react";
import styles from "./VerificationForm.module.css"; // Ensure this matches your file structure
import Button from "@mui/material/Button";
import logo2 from "../logo2.jpeg";
import logo from "../logo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function VerificationForm() {
    const [identity, setIdentity] = useState('');
    const [file, setFile] = useState(null);
    const [verificationMethod, setVerificationMethod] = useState('');
    const [verificationInfo, setVerificationInfo] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
  
    useEffect(() => {
      // Any initialization logic goes here
    }, []);
  
    const navigate = useNavigate();
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSaveAndNext = async (e) => {
      e.preventDefault();
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("identity", identity);
        formDataToSend.append("file", file);
        formDataToSend.append("verificationMethod", verificationMethod);
        formDataToSend.append("verificationInfo", verificationInfo);
        formDataToSend.append("otp", otp);
    
        const response = await fetch("http://localhost:5000/verificationform", {
          method: "POST",
          body: formDataToSend,
        });
    
        if (response.ok) {
          const data = await response.json();
          console.log("Form data submitted successfully:", data);
          // toast.success('Form data submitted successfully:', data);
          navigate('/');
        } else {
          console.error("Failed to submit form data. Server responded with:", response.status, response.statusText);
          // toast.error('Failed to submit form data. Server responded with:', response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
        // toast.error('Error submitting form data:', error);
      }
    };
  
  const sendOtp = (e) => {
    e.preventDefault();
    console.log(`Sending OTP to ${verificationInfo}`);
    setOtpSent(true);
    console.log(`OTP sent to ${verificationInfo}.`);
  };

  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={handleSaveAndNext}
        className={styles.formContainer}
        encType="multipart/form-data"
      >
        <div>
          {" "}
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.titleWithLogo}>
          {/* <img src={logo} alt="Logo" className={styles.logo} /> */}
          <img src={logo2} alt="Logo" className={styles.logo2} />
          <h2 className={styles.formTitle}>Verification Details</h2>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="identity">Proof of Identity:</label>
          <select
            id="identity"
            name="identity"
            value={identity}
            onChange={(e) => setIdentity(e.target.value)}
            className={styles.formControl}
          >
            <option value="">Select Identity Proof</option>
            <option value="aadharCard">Aadhar Card</option>
            <option value="passport">Passport</option>
            <option value="pancard">PAN Card</option>
          </select>
          {identity && (
            <>
              <label htmlFor="file">Upload Identity Proof:</label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                className={styles.formControl}
              />
            </>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="verificationMethod">Verification Method:</label>
          <select
            id="verificationMethod"
            name="verificationMethod"
            value={verificationMethod}
            onChange={(e) => setVerificationMethod(e.target.value)}
            className={styles.formControl}
          >
            <option value="">Select Verification Method</option>
            <option value="email">Email</option>
            <option value="phone">Phone Number</option>
          </select>
        </div>

        {verificationMethod && (
          <div className={styles.formGroup}>
            <label htmlFor="verificationInfo">{`Enter your ${verificationMethod}:`}</label>
            <input
              type="text"
              id="verificationInfo"
              name="verificationInfo"
              value={verificationInfo}
              onChange={(e) => setVerificationInfo(e.target.value)}
              placeholder={`Your ${verificationMethod}`}
              className={styles.formControl}
            />
            <Button
              variant="contained"
              onClick={sendOtp}
              disabled={otpSent}
              style={{ marginLeft: "10px" }}
            >
              Send OTP
            </Button>
          </div>
        )}

        {otpSent && (
          <div className={styles.formGroup}>
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className={styles.formControl}
            />
          </div>
        )}

        <div className={styles.buttons}>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/additionalinfoform");
            }}
          >
            Back
          </Button>
          <Button type="submit" variant="contained" disabled={!otpSent}>
            Verify and Proceed
          </Button>
        </div>
      </form>
    </div>
  );
}

export default VerificationForm;
