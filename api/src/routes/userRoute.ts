import { Router, Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import { User } from '../models/User';
import { AppError } from '../errors';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { name, email } = req.body;
  const users = getRepository(User);

  if (await users.findOne({ email })) {
    return next(new AppError(400, 'User already exists'));
  }

  const user = users.create({ name, email });
  await users.save(user);

  return res.json(user);
})

export default {
  path: '/users',
  router: router
};
