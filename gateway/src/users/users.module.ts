import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { RmqClientModule } from '../rmq-client/rmq-client.module';

@Module({
    imports: [
        RmqClientModule.forRootAsync({
            name: 'USER_SERVICE',
            queue: 'user_queue',
        }),
    ],
    providers: [UsersResolver, UsersService],
    exports: [UsersService],
})
export class UsersModule {}
