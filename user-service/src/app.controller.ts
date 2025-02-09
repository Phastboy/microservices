import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private service: AppService) {}

    @MessagePattern('find_all_users')
    findAll() {
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

    @MessagePattern('update_user')
    update(data: { id: string; name?: string; age?: number }) {
        return this.service.update(data.id, data);
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
