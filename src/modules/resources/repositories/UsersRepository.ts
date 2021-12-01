import { EntityRepository, Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {}
