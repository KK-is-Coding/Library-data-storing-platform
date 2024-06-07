import express, { json } from "express";
// import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoutes from "./routes/booksRoutes.js"
import cors from "cors"
import dotenv from "dotenv";


dotenv.config();


const app = express()

// Middlewares for parsing request body
app.use(express.json());


// config({
//     path: "./config.env"
// })


const PORT = process.env.PORT
const mongoDBURL = process.env.mongoDBURL
const HOST = process.env.HOST


// Middlewares for handling CORS policy
// Option 1: Allow all origins with default of cors(*) 
// app.use(cors())

// Option 2: Allow custom origins
app.use(
    cors({
        origin: HOST,
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: ['Content-Type'],
        credentials: true,
    })
)

app.use(express.json())

app.get('/', (req, res) => {
    console.log("request passed...")
    // res.json("request passed...")
})


app.use('/books', booksRoutes)


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("App is connected to the DataBase...")
        app.listen(PORT, () => {
            console.log(`App is listening to the port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
