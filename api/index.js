import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user_route.js"
import authRouter from "./routes/auth_route.js"

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => { console.log(err); });
const app = express();

app.listen(3000, () => { 
    
  console.log('Server running on port 3000');
}
);

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send("Hello World")
})

app.use('/api', userRouter)

app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});