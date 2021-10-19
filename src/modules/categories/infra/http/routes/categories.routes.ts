import { Router } from 'express';
import { getRepository } from 'typeorm';
import { container } from 'tsyringe';
import Category from '../../typeorm/entities/Category';
import CreateCategoryService from '../../../services/CreateCategoryService';

const categoriesRouter = Router()

categoriesRouter.get('/', async (request, response) => {
  const categoriesRepository = getRepository(Category)

  const categories = await categoriesRepository.find({
    order: { name: 'ASC' }
  })

  return response.json(categories)
})

categoriesRouter.post('/', async (request, response) => {
  const { name } = request.body

  const createCategory = container.resolve(CreateCategoryService)

  return response.json(createCategory)
})

export default categoriesRouter
