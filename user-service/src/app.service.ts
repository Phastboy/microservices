import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export interface User {
    id: string;
    name: string;
    age: number | null;
}

@Injectable()
export class AppService {
    private users: User[] = [
        { id: '1', name: 'phastboy', age: 22 },
        { id: '2', name: 'gr8 pholex bahdo', age: 22 },
        { id: '3', name: 'shmuel vibez', age: 21 },
        { id: '4', name: 'real vibez', age: 23 },
    ];

    create(userInput: Omit<User, 'id'>) {
        const newUser = { id: uuidv4(), ...userInput };
        this.users.push(newUser);
        return newUser;
    }

    findAll(): User[] {
        return this.users;
    }

    findOne(id: string): User {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user;
    }

    update(id: string, userInput: Partial<User>): User {
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            throw new Error(`User with id ${id} not found`);
        }
        const updatedUser = { ...this.users[userIndex], ...userInput };
        this.users[userIndex] = updatedUser;
        return updatedUser;
    }

    delete(id: string): void {
        const userIndex = this.users.findIndex((user) => user.id === id);
        if (userIndex === -1) {
            throw new Error(`User with id ${id} not found`);
        }
        this.users.splice(userIndex, 1);
    }

    findByAge(age: number | null): User[] {
        return this.users.filter((user) => user.age === age);
    }
}
