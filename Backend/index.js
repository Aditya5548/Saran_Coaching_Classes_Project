import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import { initializeMailer } from './config/mail.js';
import contactRoutes from './routes/contactRoutes.js';
import counsellingRoutes from './routes/counsellingRoutes.js';

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(cors());
app.use(express.json({ limit: '100kb' }));
initializeMailer();
connectDB();

app.get('/', (_req, res) => {
  res.json({ message: 'Welcome to the Saranesh Edu Hub' });
});

app.use('/api/contact', contactRoutes);
app.use('/api/counselling', counsellingRoutes);

app.use((err, _req, res, _next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    message: 'Internal server error.'
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});

export default app;