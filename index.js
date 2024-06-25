import express from "express";
import recipeRouter from "./routes/recipes.js";

// Create Express APP
const app = express();

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