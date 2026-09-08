import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { connectDatabase } from './config/db.js';
import { initializeMailer } from './config/mail.js';
import contactRoutes from './routes/contactRoutes.js';
import counsellingRoutes from './routes/counsellingRoutes.js';

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(cors());
app.use(express.json({ limit: '100kb' }));

app.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to the Saranesh Edu Hub',
  });
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'Saran Coaching Classes API',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

app.use('/api/contact', contactRoutes);
app.use('/api/counselling', counsellingRoutes);

app.use((err, _req, res, _next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    message: 'Internal server error.',
  });
});

const initServices = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await connectDatabase();
    }
    initializeMailer();
  } catch (err) {
    console.error('Service initialization error:', err);
  }
};

if (process.env.VERCEL) {
  initServices();
} else {
  initServices().then(() => {
    app.listen(PORT, () => {
      console.log(`Saran API running on http://localhost:${PORT}`);
    });
  });
}

export default app;