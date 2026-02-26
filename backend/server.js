import express from "express";
import dotenv from "dotenv";

import AuthRoutes from './routes/auth.routes.js'
import connectToMongoDB from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();
app.use(express.json())// מאפשר לגשת למה שאתה שולח בBODY
app.use('/api/auth',AuthRoutes)


// app.get("/", (req, res) => {
//   // root route http://localhost:5000/
//   res.send("hello world!!");
// });




app.listen(PORT, () =>{ 
    connectToMongoDB()
    console.log(`server run on port ${PORT}`)
});
