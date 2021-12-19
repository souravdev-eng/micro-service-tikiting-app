import mongoose from 'mongoose';
import 'express-async-errors';

import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be present');
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-srv/auth');
    console.log('Auth DB connected successfully...');
  } catch (error: any) {
    console.error(error.message);
  }

  app.listen(3000, () => {
    console.log('Listening auth in PORT --> 3000...');
  });
};

start();
