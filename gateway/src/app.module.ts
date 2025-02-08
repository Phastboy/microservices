import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { RmqClientModule } from './rmq-client/rmq-client.module';
import { UserResolver } from './user.resolver';

@Module({
    imports: [GraphqlModule, RmqClientModule],
    providers: [UserResolver],
})
export class AppModule {}
