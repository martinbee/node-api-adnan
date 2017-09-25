import mongoose from 'mongoose';
import { load } from 'dotenv';

if (process.env.NODE_ENV !== 'production') load();

const { DB_URI, DB_USER, DB_PASS } = process.env;

mongoose.connect(DB_URI, {
  user: DB_USER,
  pass: DB_PASS,
});
