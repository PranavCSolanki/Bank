import "./Component1/App.scss";
// import "./Component/indexi.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component1/components/Navbar";
import Home from "./Component1/components/Home";
import Services from "./Component1/components/Services";
import Footer from "./Component1/components/Footer";
import ViewCustomers from "./Component1/components/ViewCustomers";
import TransHistory from "./Component1/components/TransHistory";
import MoneyTransfer from "./Component1/components/MoneyTransfer";
import "./App.css";
import BankForm from "./Component2/Bank/BankForm";
import PersonalInfo from "./Component2/Personalinfo/Personalinfo";
import LoanDetails from "./Component2/LoanDetail/LoanDetails";
import CustomerForm from "./Component2/custInfo/CustomerForm";
import AdditionalInfoForm from "./Component2/AdditionalInfo/AdditionalInfoForm";
import VerificationForm from "./Component2/Verification/VerificationForm";
import './App.css';
// import Dashboard from "./Component/Components/Dashboard/Dashboard";
import Login from "./Component/Components/Login/Login";
import Register from "./Component/Components/Register/Register";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import SignIn from './components/SignIn';
// import SignUp from './components/SignUp';
// import { app, database } from './firebaseConfig';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/allCustomers" element={<ViewCustomers />} />
          <Route path="/transactions" element={<TransHistory />} />
          <Route path="/moneyTransfer" element={<MoneyTransfer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/customerform" element={<CustomerForm />} />
          <Route path="/bankform" element={<BankForm />} />
          <Route path="/loandetails" element={<LoanDetails />} />
          <Route path="/additionalinfoform" element={<AdditionalInfoForm />} />
          <Route path="/varificationform" element={<VerificationForm />} />
          {/* <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;