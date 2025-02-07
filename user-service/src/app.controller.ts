import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
    @MessagePattern('get_user')
    getUser(data: { id: string }) {
        return { id: data.id, name: 'John Doe' };
    }
}
