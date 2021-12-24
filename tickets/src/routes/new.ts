import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/api/tickets', async (req: Request, res: Response) => {
  res.sendStatus(200);
});

export { router as createTicketsRoute };
