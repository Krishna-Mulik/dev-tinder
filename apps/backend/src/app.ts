import express from 'express';

const app = express();

app.get('/health', (_req, res) => {
    res.status(200).send('healthy');
});

app.use(express.json({ limit: '16kb' }));

import userRouter from './routes/user.route';
import errorHandler from './middlewares/error-handler';

app.use('/api/v1/user', userRouter);

//error-handler
app.use(errorHandler);

export default app;
