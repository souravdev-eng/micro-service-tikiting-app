import mongoose from 'mongoose';
import 'express-async-errors';

import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY ) {
    throw new Error('JWT_KEY must be present');
  }
  
  if( !process.env.MONGO_URI){
    throw new Error('MONGO_URI must be present');
  }


  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Tickets DB connected successfully...');
  } catch (error: any) {
    console.error(error.message);
  }

  app.listen(4000, () => {
    console.log('Listening tickets in PORT --> 4000...');
  });
};

start();
