import { Express, ErrorRequestHandler } from 'express';
import { AppError } from './errors';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (!(err instanceof AppError)) return next(err);

  const status = err.status;
  const message = err.message;

  const json = { error: { status: status, message: message } };
  res.status(status).json(json);
}

export default {
  init(app: Express) {
    app.use(errorHandler);
  }
}