
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./database/dbConnection');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"], credentials: true }));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: "Backend server is running!" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const express= require('express')
// const mongoose= require('mongoose')
// require('dotenv').config();
// // const cors= require('cors')
// // const path = require('path');
// // require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// if (!process.env.MONGO_URI) {
//     console.error("Error: MONGO_URI is not defined in the .env file");
//     process.exit(1);
//   }
 
// const app = express() 

// const dbURL = process.env.MONGO_URI;

// console.log(process.env.MONGO_URI) 

// // mongoose.connect(dbURL); 
 
// // mongoose.connect("mongodb+srv://tusharrk18:tushar123@cluster0.kc0oxs5.mongodb.net/crud"); // this step work it

// // Connect to MongoDB
// mongoose.connect(dbURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => { 
//       console.log("Connected to MongoDB!");
  
//       // Define the schema and model after successful connection
//       const userSchema = new mongoose.Schema({
//         name: String,
//         age: Number,
//       });
//       const userModel = mongoose.model('emp', userSchema);
  
//       // Create and save the new user
//       const emp1 = new userModel({
//         name: "Tushaar",
//         age: 23,
//       });
//       return emp1.save();
//     })
//     .then(() => {
//       console.log("User saved successfully!");
  
//       // Start the server after successful DB connection and save
//       app.listen(process.env.PORT, () => {
//         console.log("Server is running on port 3001!!");
//       });
//     })
//     .catch((err) => {
        
//       console.error("Error connecting to MongoDB or saving user:", err.message);
//       process.exit(1);
//     }); 

// // const userSchema = new mongoose.Schema({
// //     name:String, 
// //     age:Number
// // })
// // const userModel = mongoose.model('emp', userSchema);

// // const emp1= new userModel({
// //     name:"Tushar",
// //     age:23
// // })
// // emp1.save();

// // app.listen("3001", ()=>{
// //     console.log("server is running!!");
    
// // })

// // const MONGO_UR= "mongodb+srv://tusharrk18:tushar123@cluster0.kc0oxs5.mongodb.net/"


// // app.use(cors())
// // app.use(express.json())
// // mongoose.connect(MONGO_UR)
// // const db= mongoose.connection;
// // db.on('error',(err)=>{
// //     console.log("Mongocb connection error");
    
// // })
// // db.once('open',()=>{
// //     console.log("Mongodb is connected");
    
// // })

// // const userSchema = new mongoose.model('User',userSchema)
// // app.post('/register', async(req,res)=>{
// //     try {
// //         const newUser = new User({
// //             name: req.body.name,
// //             email: req.email,
// //             password: req.password,
// //         });
// //         const savedUser= await newUser.save()
// //         res.status(201).json(savedUser)
// //     } catch (error) {
// //         console.log('error during registration',error);
// //         res.status(500).json({error: "inter server error"});
        
// //     }
// // })

// // app.listen(PORT)
