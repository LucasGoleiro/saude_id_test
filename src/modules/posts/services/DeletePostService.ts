import { inject, injectable } from 'tsyringe';
import Post from '../infra/typeorm/entities/Post';
import PostRepository from '../infra/typeorm/repositories/PostRepository';

interface IRequest {
id: string;
}

@injectable()
class DeletePostService {
  constructor(
    @inject('PostRepository') private postRepository: PostRepository,
  ){}

  public async execute({id }: IRequest): Promise<Post> {
    const post = await this.postRepository.findById(id)

    if (!post) {
      throw new Error()
    }

    await this.postRepository.delete(post);

    return post
  }
}

export default DeletePostService
