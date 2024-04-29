const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require('body-parser');

require("./DB");

const RegisterModel = require("./Model/RegisterModel");
const PersonalInfoModel = require("./Model/PersonalInfo");
const CustomerModel = require("./Model/CustomerModel");

const JWT = require("jsonwebtoken");
const LoanDetails = require("./Model/LoanDetails");
const PreviosLoan = require("./Model/PreviousLoan");
const MessageModel = require("./Model/MessageModel");
const BankModel = require("./Model/BankForm");
const AdditionalModel = require("./Model/AdditionalInfo");
const Varification = require("./Model/Varification");
const Jwtkey = "this_is_secreate_key_always_keep_it_in_.env_file";
const path = require("path");
const Register = require("./Model/RegisterModel");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Set the destination path for file uploads
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Generate a unique filename
  },
}); 

const upload = multer({ storage });



app.post("/register", async (req, res) => {
  let user = new RegisterModel(req.body);
  let result = await user.save();
  result = result.toObject();
  result = delete user.password;
  if (user) {
    res.send({ result });
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  Register.findOne({ username, password })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      // If user found, return user data
      res.json({ username: user.username, id: user._id }); 
    })
    .catch(error => {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Server error' });
    });
});
app.post("/personalinfo", async (req, res) => {
  let Loan = new PersonalInfoModel(req.body);
  let result = await Loan.save();
  if (Loan) {
    res.send({ result });
  }
});

app.get("/personalinfo", async (req, res) => {
  try {
    let result = await PersonalInfoModel.find();
    if (result.length > 0) {
      res.send({ result });
    } else {
      console.error("No data found in Personal Information");
      res.status(404).send("No data found in Personal Information");
    }
  } catch (error) {
    console.error("Error fetching loan register data:", error);
    res.status(500).send("Error fetching loan register data");
  }
});

app.post("/customer", async (req, res) => {
  let Customer = new CustomerModel(req.body);
  let result = await Customer.save();
  if (Customer) {
    res.send({ result });
  }
});

app.get("/customer", async (req, res) => {
  try {
    let result = await CustomerModel.find();
    if (result.length > 0) {
      res.send({ result });
    } else {
      console.error("No data found in CustomerModel");
      res.status(404).send("No data found in CustomerModel");
    }
  } catch (error) {
    console.error("Error fetching loan Customer data:", error);
    res.status(500).send("Error fetching loan Customer data");
  }
});

app.post("/additionalinform", async (req, res) => {
  let additional = new AdditionalModel(req.body);
  let result = await additional.save();
  if (additional) {
    res.send({ result });
  }
});

app.post("/loandetails", async (req, res) => {
  let Loan = new LoanDetails(req.body);
  let result = await Loan.save();
  if (Loan) {
    res.send({ result });
  }
});

app.post("/verificationform", async (req, res) => {
// app.post("/varificationform", upload.single("file"), async (req, res) => {
  try {
    let verify = new Varification(req.body);
    let result = await verify.save();
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message }); // Sending the error message back to the client
  }
});


app.get("/loandetails", async (req, res) => {
  try {
    let result = await LoanDetails.find();
    if (result.length > 0) {
      res.send({ result });
    } else {
      console.error("No data found in LoanDetails");
      res.status(404).send("No data found in LoanDetails");
    }
  } catch (error) {
    console.error("Error fetching loan LoanDetails data:", error);
    res.status(500).send("Error fetching loan LoanDetails data");
  }
});

app.get("/previousloan", async (req, res) => {
  try {
    let result = await PreviosLoan.find();
    if (result.length > 0) {
      res.send({ result });
    } else {
      console.error("No data found in previousloan");
      res.status(404).send("No data found in previousloan");
    }
  } catch (error) {
    console.error("Error fetching loan previousloan data:", error);
    res.status(500).send("Error fetching loan previousloan data");
  }
});

app.post("/bankform", async (req, res) => {
  let bank = new BankModel(req.body);
  let result = await bank.save();
  if (bank) {
    res.send({ result });
  }
});

app.post("/massage", async (req, res) => {
  let massage = new MessageModel(req.body);
  let result = await massage.save();
  if (massage) {
    res.send({ result });
  }
});

app.get("/massage", async (req, res) => {
  try {
    let result = await MessageModel.find();
    if (result.length > 0) {
      res.send({ result });
    } else {
      console.error("No data found ");
      res.status(404).send("No data found ");
    }
  } catch (error) {
    console.error("Error fetching Massage data:", error);
    res.status(500).send("Error fetching massage data");
  }
});

app.listen(5000);
