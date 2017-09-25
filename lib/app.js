import express from 'express';

import './db';
import UserController from './users/UserController';

const app = express();

app.use('/users', UserController);

export default app;
