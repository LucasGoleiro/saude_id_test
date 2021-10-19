import { getRepository, Repository } from 'typeorm';
import ICreateCategoryDTO from '../../../dtos/ICreateCategoryDTO';
import ICategoriesRepository from '../../../repositories/ICategoriesRepository';
import Category from '../entities/Category';

class CategoryRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category)
  }

  public async findById(id: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne(id)

    return category
  }

  public async create({ name }: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create({ name })

    await this.ormRepository.save(category)

    return category
  }
}

export default CategoryRepository
