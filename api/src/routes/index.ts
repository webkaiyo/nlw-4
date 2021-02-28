import { Express } from 'express';

import userRoute from './userRoute';
import surveyRoute from './surveyRoute'

export default {
  init(app: Express) {
    app.use(userRoute.path, userRoute.router);
    app.use(surveyRoute.path, surveyRoute.router);
  }
};
