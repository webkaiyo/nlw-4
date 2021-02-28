import { NextFunction, Request, Response, Router } from 'express';
import { getCustomRepository } from 'typeorm';

import { AppError } from '../errors';
import UsersRepository from '../repositories/UsersRepository';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { name, email } = req.body;
  const users = getCustomRepository(UsersRepository);

  if (await users.findOne({ email })) {
    return next(new AppError(400, 'User already exists'));
  }

  const user = users.create({ name, email });
  await users.save(user);

  return res.status(201).json(user);
})

export default {
  path: '/users',
  router: router
};
