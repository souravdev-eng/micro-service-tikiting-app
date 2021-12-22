import 'express-async-errors';
import express from 'express';
import cookieSession from 'cookie-session';
import { NotFoundError, errorHandler } from '@smtick/common';

import { currentUserRoute } from './routes/current-user';
import { signOutRoute } from './routes/signout';
import { signinRoute } from './routes/signin';
import { signupRoute } from './routes/signup';

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
app.use(currentUserRoute);
app.use(signinRoute);
app.use(signupRoute);
app.use(signOutRoute);

// Global error handler
app.all('*', async () => {
  new NotFoundError();
});
app.use(errorHandler);

export { app };
