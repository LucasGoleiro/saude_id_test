import { Router } from 'express';
import { container } from 'tsyringe';
import { getRepository } from 'typeorm';
import CreatePostService from '../../../services/CreatePostService';
import DeletePostService from '../../../services/DeletePostService';
import UpdatePostService from '../../../services/UpdatePostService';
import Post from '../../typeorm/entities/Post';

const postsRouter = Router()

postsRouter.get('/', async (request, response) => {
  const postsRepository = getRepository(Post)

  const posts = await postsRepository.find({
    order: { id: 'ASC' }
  })

  return response.json(posts)
})

postsRouter.post('/', async (request, response) => {
  const { title, description, author_id, category_id } = request.body

  const createPost = container.resolve(CreatePostService)

  const post = await createPost.execute({
    title,
    description,
    author_id,
    category_id
  })

  return response.json(post)
})

postsRouter.put('/', async (request, response) => {
  const { id, title, description, author_id, category_id } = request.body

  const createPost = container.resolve(UpdatePostService)

  const post = await createPost.execute({
    id,
    title,
    description,
    author_id,
    category_id
  })

  return response.json(post)
})

postsRouter.delete('/:id', async (request, response) => {
  const { id } = request.body

  const deletePost = container.resolve(DeletePostService)

  await deletePost.execute(id)
})

export default postsRouter
