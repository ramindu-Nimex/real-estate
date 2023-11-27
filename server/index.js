import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGOURL).then(() => {
   console.log("DB Connected Successfully");
}).catch(error => console.log(error));

const app = express();

app.listen(4000, () => {
   console.log("Server is running on port 4000!");
}); 