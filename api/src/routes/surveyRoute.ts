import { Request, Response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import SurveysRepository from '../repositories/SurveysRepository';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const surveys = getCustomRepository(SurveysRepository);
  return res.json(await surveys.find());
})

router.post('/', async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const surveys = getCustomRepository(SurveysRepository);

  const survey = surveys.create({ title, description });
  await surveys.save(survey);

  return res.status(201).json(survey);
});

export default {
  path: '/surveys',
  router: router
};