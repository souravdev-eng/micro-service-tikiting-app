import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

import { app } from '../app';

let mongo: any;

// Before all test happening
beforeAll(async () => {
  mongo = new MongoMemoryServer();
  const mongoUri = await mongo.getUri();
  await mongoose.connect(mongoUri);
});

// Before each test run
beforeEach(async () => {
  const collection = await mongoose.connection.db.collections();
  for (const collections of collection) {
    await collections.deleteMany({});
  }
});

// After all test
afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});
