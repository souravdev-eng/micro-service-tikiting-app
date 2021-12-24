import 'express-async-errors';
import express from 'express';
import cookieSession from 'cookie-session';
import { NotFoundError, errorHandler } from '@smtick/common';
import { createTicketsRoute } from './routes/new';

const app = express();

app.set('trust proxy', true);

app.use(express.json());
app.use(
  cookieSession({
    // Disable encrypted
    signed: false,
    // Only access http connection
    secure: process.env.NODE_ENV !== 'test',
  }),
);

// routes
app.use(createTicketsRoute);

// Global error handler
app.all('*', async () => {
  new NotFoundError();
});
app.use(errorHandler);

export { app };
