import { injectable, inject } from 'tsyringe';
import Author from '../infra/typeorm/entities/Author';
import AuthorRepository from '../infra/typeorm/repositories/AuthorRepository'

interface IRequest {
  name: string;
}

@injectable()
class CreateAuthorService {
  constructor(
    @inject('AuthorRepository') private authorRepository: AuthorRepository,
  ){}

  public async execute({ name }: IRequest): Promise<Author> {

    const author = await this.authorRepository.create({ name });

    return author
  }
}

export default CreateAuthorService
