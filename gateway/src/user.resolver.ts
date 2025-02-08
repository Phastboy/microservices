import { Query, Resolver, Args } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Resolver('User')
export class UserResolver {
  constructor(
    @Inject('RMQ_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  @Query('user')
  async getUser(@Args('id') id: string) {
    return this.userClient.send('get_user', { id }).toPromise();
  }
}
