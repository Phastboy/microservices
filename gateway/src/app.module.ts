import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { RmqClientModule } from './rmq-client/rmq-client.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
    imports: [GraphqlModule, RmqClientModule, ConfigModule.forRoot(), UsersModule],
    providers: [],
})
export class AppModule {}
