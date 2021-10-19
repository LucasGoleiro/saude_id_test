import { Router } from 'express';
import { getRepository } from 'typeorm';
import Author from '../../typeorm/entities/Author';
import { container } from 'tsyringe';
import CreateAuthorService from '../../../services/CreateAuthorService';

const authorsRouter = Router()

authorsRouter.get('/', async (request, response) => {
  const authorsRepository = getRepository(Author)

  const authors = await authorsRepository.find({
    order: { name: 'ASC' }
  })

  return response.json(authors)
})

authorsRouter.post('/', async (request, response) => {
  const { name } = request.body

  const createAuthor = container.resolve(CreateAuthorService)

  return response.json(createAuthor)
})

export default authorsRouter
