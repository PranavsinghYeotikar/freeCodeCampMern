import express from "express";
import notesRoutes from './routes/notesRoutes.js';
import connectDB from "./config/db.js"
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = 5001;

connectDB();

app.use(express.json());

//when we write this, we mean that whenever we call 
//? /api/notes
// use this 'notesRoutes.js' and go there accordingly 
app.use('/api/notes', notesRoutes);


//? What is an Endpoint?
// An endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource.
//? this here down is a endpoint
app.get('/api/notes', (req,res)=> {
    res.send("You got 5 notes")
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})

// mongodb+srv://pranavsinghyeotikar2005_db_user:PeV5ZhBovPKO6wEx@cluster0.izuvic3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0