import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { RmqClientModule } from '../rmq-client/rmq-client.module';

@Module({
  imports: [
    RmqClientModule.forRootAsync({
      name: 'USERS_SERVICE',
      queue: 'users_queue',
    }),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
