import React, { useState } from "react";
import styles from "./Personal.module.css";
import logo from "../logo.png"; // Adjust the path as needed
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    DOB: "",
    gender: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveAndNext = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/personalinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      toast.success("Form data submitted successfully");

      if (response.ok) {
        navigate("/customerform");
        toast.success("Form data submitted successfully");

        const data = await response.json();
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
          <h3 className={styles.sectionTitle}>Personal Information</h3>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="DOB">Date of Birth:</label>
          <input
            type="date"
            id="DOB"
            required
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className={styles.formControl}
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Residential Address:</label>
          <textarea
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className={styles.formControl}
          ></textarea>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/");
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

export default PersonalInfo;
