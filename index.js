import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipes.js";

// Connect to database
await mongoose.connect(process.env.MONGO_URL);

// Create Express APP
const app = express();

// Apply middleware
app.use(express.json());



// use routes
app.use(recipeRouter);


app.patch('/sign', (req, res) => 
    { res.json('sign up');

});

// Listen for incoming request
app.listen(3000, () => {
    console.log('App listening on port 3000');
});