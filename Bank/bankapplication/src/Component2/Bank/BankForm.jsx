import React, { useState } from 'react';
import styles from './BankForm.module.css';
import logo from '../logo.png'; // Adjust the path as needed
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {toast,ToastContainer} from "react-toastify"
function BankForm() {
    const [name, setName] = useState('');
    const [accountType, setAccountType] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [IFSCCode, setIFSCCode] = useState('');
    const [address, setAddress] = useState('');
    const [pan, setPan] = useState('');

    const navigate = useNavigate()

    const handleSaveAndNext = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:5000/bankform", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                Account_type: accountType,
                Account_number: accountNumber,
                IFSC_code: IFSCCode,
                address: address,
                pan: pan
            }),
          });
          navigate('/loandetails');
    
          if (response.ok) {
              toast.sucess("Form data submitted successfully:");
            const data = await response.json();
          } else {
            toast.error(
              "Failed to submit form data. Server responded with:",
              response.status,
              response.statusText
            );
          }
        } catch (error) {
          toast.success("data submited");
        }
      };
    


    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleSaveAndNext} className={styles.formContainer}>
                <div className={styles.titleWithLogo}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    <h2 className={styles.formTitle}>Bank Statement Details</h2>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="bankName">Bank Name:</label>
                    <input
                        type="text"
                        id="bankName"
                        name="bankName"
                        required
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className={styles.formControl}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="accountType">Account Type:</label>
                    <input
                        type="text"
                        id="accountType"
                        name="accountType"
                        required
                        value={accountType}
                        onChange={(e)=>setAccountType(e.target.value)}
                        className={styles.formControl}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="accountNumber">Account Number:</label>
                    <input
                        type="text"
                        id="accountNumber"
                        name="accountNumber"
                        required
                        value={accountNumber}
                        onChange={(e)=>setAccountNumber(e.target.value)}
                        className={styles.formControl}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="ifscCode">IFSC Code:</label>
                    <input
                        type="text"
                        id="ifscCode"
                        name="ifscCode"
                        required
                        value={IFSCCode}
                        onChange={(e)=>setIFSCCode(e.target.value)}
                        className={styles.formControl}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        required
                        name="address"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                        className={styles.formControl}
                    ></textarea>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="panCard">PAN Card:</label>
                    <input
                        type="text"
                        id="panCard"
                        name="panCard"
                        required
                        value={pan}
                        onChange={(e)=>setPan(e.target.value)}
                        className={styles.formControl}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="outlined" onClick={()=>{navigate("/customerform")}}>Back</Button>
                    <Button type="submit" variant="contained">Save and Next</Button>
                </div>
            </form>
        </div>
    );
}

export default BankForm;
