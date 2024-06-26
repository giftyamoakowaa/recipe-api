import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipes.js";

// Connect to database
await mongoose.connect(process.env.MONGO_URL);

// Create Express APP
const app = express();

// Apply middleware
app.use(express.json());

// Define routes
app.get('/', (req, res)=> { res.json('Welcome home')})
app.post('/login', (req, res) => {
    res.json('Login Successful');
});

// use routes
app.use(recipeRouter);


app.patch('/sign', (req, res) => 
    { res.json('sign up');

});

// Listen for incoming request
app.listen(3000, () => {
    console.log('App listening on port 3000');
});