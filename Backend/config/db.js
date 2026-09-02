import mongoose from 'mongoose';
import dns from 'dns';
dns.setServers(['8.8.8.8','1.1.1.1'])

export async function connectDatabase() {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI is not configured.');

  await mongoose.connect(uri);
  console.log('MongoDB connected successfully.');
}
