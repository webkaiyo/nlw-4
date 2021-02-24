import 'reflect-metadata';
import express from 'express';

import './database';

const app = express();
const port = 8000;

import middlewares from './middlewares'
import routes from './routes';
import handlers from './handlers';

middlewares.init(app);
routes.init(app);
handlers.init(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
