import { v4 as uuidV4 } from 'uuid';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import Author from '../../../../authors/infra/typeorm/entities/Author';
import Category from '../../../../categories/infra/typeorm/entities/Category';

@Entity('posts')
class Post {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @ManyToOne(() => Author)
  @JoinColumn({ name: 'author_id' })
  author: Author;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }

}

export default Post;
