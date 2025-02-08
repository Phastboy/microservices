import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'RMQ_SERVICE',
                transport: Transport.RMQ,
                options: {
                urls: [ process.env.RABBITMQ_URL || 'amqp://localhost:5672'],
                    queue: 'user_queue',
                    queueOptions: { durable: false },
                },
            },
        ]),
    ],
    exports: [ClientsModule],
})
export class RmqClientModule {}
