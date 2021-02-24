import { Express } from 'express';

import userRoute from './userRoute';

export default {
  init(app: Express) {
    app.use(userRoute.path, userRoute.router);
  }
};
