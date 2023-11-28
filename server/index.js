import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose.connect(process.env.MONGOURL).then(() => {
   console.log("DB Connected Successfully");
}).catch(error => console.log(error));

const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen(4000, () => {
   console.log("Server is running on port 4000!");
});

app.use("/server/user", userRouter);
app.use("/server/auth", authRouter);

app.use((err,req,res,next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server error';
   return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
   });
});