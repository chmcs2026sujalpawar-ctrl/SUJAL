import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import memberRoutes from './routes/memberRoutes.js';
import axios from "axios";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: "srv-d6n5364r85hc73ddohrg",
  })
);
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/members', memberRoutes);

app.get('/', (req, res) => {
    res.send('Gym Management API is running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
