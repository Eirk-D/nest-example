import { Todo } from '../../src/modules/resources/todos/entities/todo.entity';
import { User } from '../../src/modules/resources/users/entities/user.entity';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';

const ormConfig: ConnectionOptions = {
  type: 'mariadb',
  database: 'nest_full',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456789',
  entities: [User, Todo],
};

export default ormConfig;
