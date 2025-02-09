import { DynamicModule, Module } from '@nestjs/common';
import {
    ClientsModule,
    Transport,
    ClientProxyFactory,
} from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

export interface RmqClientModuleOptions {
    name: string;
    queue: string;
}

@Module({})
export class RmqClientModule {
    static forRootAsync(options: RmqClientModuleOptions): DynamicModule {
        return {
            module: RmqClientModule,
            imports: [
                ClientsModule.registerAsync([
                    {
                        name: options.name,
                        imports: [ConfigModule],
                        useFactory: (configService: ConfigService) => ({
                            transport: Transport.RMQ,
                            options: {
                                urls: [
                                    configService.get<string>('RABBITMQ_URL') ??
                                        'amqp://rabbitmq:5672',
                                ],
                                queue: options.queue,
                                queueOptions: {
                                    durable: false,
                                },
                            },
                        }),
                        inject: [ConfigService],
                    },
                ]),
            ],
            exports: [ClientsModule],
        };
    }
}
