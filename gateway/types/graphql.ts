
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    name: string;
    age: number;
}

export interface UpdateUserInput {
    id: string;
    name?: Nullable<string>;
    age?: Nullable<number>;
}

export interface User {
    id: string;
    name: string;
    age: number;
}

export interface IQuery {
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    findUsersByAge(age: number): Nullable<User>[] | Promise<Nullable<User>[]>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
