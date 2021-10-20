import ICreatePostDTO from '../dtos/ICreatePostDTO';
import IUpdatePostDTO from '../dtos/IUpdatePostDTO';
import Post from '../infra/typeorm/entities/Post';

export default interface IPostsRepository {
  findById(id: string): Promise<Post | undefined>;
  create(data: ICreatePostDTO): Promise<Post>;
  update(data: IUpdatePostDTO): Promise<Post>;
  delete(data: Post): Promise<void>;
}
