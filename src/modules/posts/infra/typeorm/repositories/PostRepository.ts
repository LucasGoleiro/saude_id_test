import { getRepository, Repository } from 'typeorm';
import ICreatePostDTO from '../../../dtos/ICreatePostDTO';
import IUpdatePostDTO from '../../../dtos/IUpdatePostDTO';
import IPostsRepository from '../../../repositories/IPostsRepository';
import Post from '../entities/Post';

class PostRepository implements IPostsRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post)
  }

  public async findById(id: string): Promise<Post | undefined> {
    const post = await this.ormRepository.findOne(id)

    return post
  }

  public async create({
    title,
    description,
    author_id,
    category_id
   }: ICreatePostDTO): Promise<Post> {

    const post = this.ormRepository.create({
      title,
      description,
      author_id,
      category_id
    })

    await this.ormRepository.save(post)

    return post
  }

  public async update({
    id,
    title,
    description,
    author_id,
    category_id
  }: IUpdatePostDTO): Promise<Post> {

    const post = this.ormRepository.create({
      title,
      description,
      author_id,
      category_id
    })

    const updated_post = await this.ormRepository.save(post)

    return updated_post

  }

  public async delete(post: Post): Promise<void> {
    await this.ormRepository.remove(post)
  }
}

export default PostRepository
