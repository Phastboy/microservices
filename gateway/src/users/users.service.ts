import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserInput, UpdateUserInput } from '../../types/graphql';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  async create(createUserInput: Omit<CreateUserInput, 'id'>) {
    return this.client.send('create_user', createUserInput).toPromise();
  }

  async findAll() {
    return this.client.send('find_all_users', {}).toPromise();
  }

  async findOne(id: string) {
    return this.client.send('find_one_user', id).toPromise();
  }

  async remove(id: string) {
    return this.client.send('delete_user', id).toPromise();
  }

  async findByAge(age: number) {
    return this.client.send('find_users_by_age', age).toPromise();
  }
}
