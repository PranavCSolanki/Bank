import React, { useState } from "react";
import styles from "./AdditionalInfoForm.module.css"; // Make sure this matches your file structure
import logo from "../logo.png"; // Adjust the path as needed
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AdditionalInfoForm() {
  const [formData, setFormData] = useState({
    additionalInfo: "",
    previousLoanHistory: "",
    outstandingDebts: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveAndNext = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/additionalinform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          additionalInfo: formData.additionalInfo,
          previousLoanHistory: formData.previousLoanHistory,
          outstandingDebts: formData.outstandingDebts,
        }),
      }); 

      navigate('/varificationform');
      if (response.ok) {
        const data = await response.json();
        toast.success("Form data submitted successfully:", data);
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
          <h2 className={styles.formTitle} style={{ color: "#2c3e50" }}>
            Additional Information
          </h2>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="additionalInfo">Additional Information:</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            required
            onChange={handleChange}
            className={styles.formControl}
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="previousLoanHistory">
            Any Previous Loan History:
          </label>
          <input
            type="text"
            id="previousLoanHistory"
            name="previousLoanHistory"
            required
            value={formData.previousLoanHistory}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="outstandingDebts">Any Outstanding Debts:</label>
          <input
            type="text"
            id="outstandingDebts"
            required
            name="outstandingDebts"
            value={formData.outstandingDebts}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/loandetails");
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

export default AdditionalInfoForm;
