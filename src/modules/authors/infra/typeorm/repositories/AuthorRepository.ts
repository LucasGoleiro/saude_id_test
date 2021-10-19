import { getRepository, Repository } from 'typeorm';
import ICreateAuthorDTO from '../../../dtos/ICreateAuthorDTO';
import IAuthorsRepository from '../../../repositories/IAuthorsRepository';
import Author from '../entities/Author';

class AuthorRepository implements IAuthorsRepository {
  private ormRepository: Repository<Author>;

  constructor() {
    this.ormRepository = getRepository(Author)
  }

  public async findById(id: string): Promise<Author | undefined> {
    const author = await this.ormRepository.findOne(id)

    return author
  }

  public async create({ name }: ICreateAuthorDTO): Promise<Author> {
    const author = this.ormRepository.create({ name })

    await this.ormRepository.save(author)

    return author
  }
}

export default AuthorRepository
