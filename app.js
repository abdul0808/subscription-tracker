import express from 'express';
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js';

const app = express();

// express built in middlewares
// this allows your app to handle data sent in request or api calls
app.use(express.json());

// this helps us to process the forms data sent via HTML forms in simple format
app.use(express.urlencoded({ extended: false }));

// this middleware reads cookies form incomin requests so your app can store user
app.use(cookieParser());

// rate limiting and bot detection middleware
app.use(arcjetMiddleware);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/workflows', workflowRouter);

// custom error middleware
app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to the subscription tracker API!');
});

app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
    await connectToDatabase();
});

export default app;