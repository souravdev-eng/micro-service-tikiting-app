import express from 'express';
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

app.listen(3000, () => {
  console.log('Listening auth in PORT --> 3000...');
});
