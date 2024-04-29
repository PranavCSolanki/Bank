import React, { useState } from "react";
import styles from "./LoanDetails.module.css"; // Import the CSS module
import Button from "@mui/material/Button";
import logo from "../logo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function LoanDetails() {
  const [loanData, setLoanData] = useState({
    loanAmountRequested: "",
    purposeOfLoan: "",
    preferredLoanTerm: "",
    collateral: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSaveAndNext = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/loandetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loan_amt_requested: loanData.loanAmountRequested,
          loan_purpose: loanData.purposeOfLoan,
          loan_term: loanData.preferredLoanTerm,
          collateral: loanData.collateral,
        }),
      });

        navigate('/additionalinfoform');
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
      <div className={styles.backgroundImage}></div>
      <form onSubmit={handleSaveAndNext} className={styles.formContainer}>
        <div className={styles.titleWithLogo}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <h3 className={styles.sectionTitle}>Loan Details</h3>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="loanAmountRequested">Loan Amount Requested:</label>
          <input
            type="number"
            id="loanAmountRequested"
            name="loanAmountRequested" 
            required
            value={loanData.loanAmountRequested}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="purposeOfLoan">Purpose of Loan:</label>
          <textarea
            id="purposeOfLoan"
            name="purposeOfLoan"
            required
            value={loanData.purposeOfLoan}
            onChange={handleChange}
            className={styles.formControl}
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="preferredLoanTerm">
            Preferred Loan Term (Months):
          </label>
          <input
            type="number"
            id="preferredLoanTerm"
            required
            name="preferredLoanTerm"
            value={loanData.preferredLoanTerm}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="collateral">Collateral (if any):</label>
          <input
            type="text"
            id="collateral"
            name="collateral"
            required
            value={loanData.collateral}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/bankform");
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

export default LoanDetails;
