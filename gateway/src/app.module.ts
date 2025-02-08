import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { RmqClientModule } from './rmq-client/rmq-client.module';
import { UserResolver } from './user.resolver';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [GraphqlModule, RmqClientModule, ConfigModule.forRoot()],
    providers: [UserResolver],
})
export class AppModule {}
