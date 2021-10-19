import { injectable, inject } from 'tsyringe';
import Category from '../infra/typeorm/entities/Category';
import CategoryRepository from '../infra/typeorm/repositories/CategoryRepository';

interface IRequest {
  name: string;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoryRepository') private categoryRepository: CategoryRepository,
  ){}

  public async execute({ name }: IRequest): Promise<Category> {

    const category = await this.categoryRepository.create({ name });

    return category
  }
}

export default CreateCategoryService
