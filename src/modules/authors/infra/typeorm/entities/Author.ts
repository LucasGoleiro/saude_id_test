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
}

export default Author;
