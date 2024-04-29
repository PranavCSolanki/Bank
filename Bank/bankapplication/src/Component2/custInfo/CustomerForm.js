// CustomerForm.js
import React, { useState } from "react";
import styles from "./CustomerForm.module.css"; // Make sure this path is correct
import logo from "../logo.png"; // Adjust the path as needed
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function CustomerForm() {
  const [occupation, setOccupation] = useState("");
  const [status, setStatus] = useState("");
  const [income, setIncome] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSaveAndNext = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_occupation: occupation,
          customer_status: status,
          monthly_income: income,
          address :address,
        }),
      });

      navigate('/bankform');
      if (response.ok) {
        const data = await response.json();
        toast.success("Form data submitted successfully");
      } else {
        toast.error(
          "Failed to submit form data. Server responded with:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      toast.error("Error submitting form data:", error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSaveAndNext} className={styles.formContainer}>
        <div className={styles.titleWithLogo}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h2 className={styles.formTitle}>Customer Information</h2>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="customerOccupation">Customer Occupation:</label>
          <input
            type="text"
            id="customerOccupation"
            name="customerOccupation"
            required
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="customerStatus">Customer Status:</label>
          <select
            id="customerStatus"
            name="customerStatus"
            value={status}
            required
            onChange={(e) => setStatus(e.target.value)}
            className={styles.formControl}
          >
            <option value="">Select...</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="monthlyIncome">Monthly Income:</label>
          <input
            type="text"
            id="monthlyIncome"
            name="monthlyIncome"
            required
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Office Address:</label>
          <textarea
            id="address"
            name="address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
            className={styles.formControl}
          ></textarea>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/personalinfo");
            }}
          >
            Back
          </Button>
          <Button type="submit" variant="contained">
            Save and Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CustomerForm;
