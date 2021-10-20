import { v4 as uuidV4 } from 'uuid';

import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('authors')
class Author {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }

}

export default Author;
