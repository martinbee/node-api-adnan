import express from 'express';

// refactor to be a called function
import './db';
import UserController from './users/UserController';

const port = process.env.PORT || 3000;

const app = express();

// refactor to be in attachRoutes and in the routes file
app.use('/users', UserController);

app.listen(port, () => console.log(`Express server listening on port ${port}`));
