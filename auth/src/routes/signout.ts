import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send('Sigin route');
});

export { router as signOutRoute };
