import 'reflect-metadata';
import express from 'express';

import createConnection from './database';
createConnection();

const app = express();

import middlewares from './middlewares'
import routes from './routes';
import handlers from './handlers';

middlewares.init(app);
routes.init(app);
handlers.init(app);

export default app;
