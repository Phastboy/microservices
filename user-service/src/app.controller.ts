import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private service: AppService) {}
    private logger = new Logger(AppController.name);

    @MessagePattern('find_all_users')
    findAll() {
        this.logger.log('request to fetch all users received from the client');
        return this.service.findAll();
    }

    @MessagePattern('find_one_user')
    findOne(id: string) {
        return this.service.findOne(id);
    }

    @MessagePattern('create_user')
    create(data: { name: string; age: number }) {
        return this.service.create(data);
    }

    @MessagePattern('delete_user')
    delete(id: string) {
        return this.service.delete(id);
    }

    @MessagePattern('find_users_by_age')
    findByAge(age: number) {
        return this.service.findByAge(age);
    }
}
