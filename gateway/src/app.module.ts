import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
import { RmqClientModule } from './rmq-client/rmq-client.module';

@Module({
    imports: [GraphqlModule, RmqClientModule],
    providers: [],
})
export class AppModule {}
