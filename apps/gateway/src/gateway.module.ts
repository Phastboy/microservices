import { Module } from '@nestjs/common';
import { RmqClientModule } from './rmq-client/rmq-client.module';
import { GraphqlModule } from './graphql/graphql.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [RmqClientModule, GraphqlModule, UsersModule],
  controllers: [],
  providers: [],
})
export class GatewayModule {}
