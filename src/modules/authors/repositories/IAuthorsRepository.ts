import ICreateAuthorDTO from '../dtos/ICreateAuthorDTO';
import Author from '../infra/typeorm/entities/Author';

export default interface IAuthorsRepository {
  findById(id: string): Promise<Author | undefined>;
  create(data: ICreateAuthorDTO): Promise<Author>;
}
