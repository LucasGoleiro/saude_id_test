import { inject, injectable } from 'tsyringe';
import Post from '../infra/typeorm/entities/Post';
import PostRepository from '../infra/typeorm/repositories/PostRepository';

interface IRequest {
  title: string;
  description: string;
  author_id: string;
  category_id: string;
}

@injectable()
class CreatePostService {
  constructor(
    @inject('PostRepository') private postRepository: PostRepository,
  ){}

  public async execute({
    title,
    description,
    author_id,
    category_id }: IRequest): Promise<Post> {

    const post = await this.postRepository.create({
      title,
      description,
      author_id,
      category_id
     });

    return post
  }
}

export default CreatePostService
