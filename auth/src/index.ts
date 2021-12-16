import express from 'express';
import 'express-async-errors';
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middleware/error-handler';
import { currentUserRoute } from './routes/current-user';
import { signinRoute } from './routes/signin';
import { signOutRoute } from './routes/signout';
import { signupRoute } from './routes/signup';

const app = express();

app.use(express.json());

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

app.listen(3000, () => {
  console.log('Listening auth in PORT --> 3000...');
});
