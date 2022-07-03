import { faker } from '@faker-js/faker';

export const randomInt = (min = 0, max = 100): number => {
  return min + Math.floor(Math.random() * max);
};

export const randomUser = (): IUser => {
  return {
    name: faker.name.findName(),
    profession: faker.name.jobTitle(),
    progress: randomInt(),
    bio: faker.lorem.paragraph(),
    email: faker.internet.email()
  };
};

export interface IUser {
  name: string;
  profession: string;
  progress: number;
  bio: string;
  email: string;
}

export interface UserProps {
  user: IUser;
}

export const USERS: IUser[] = Array.from({ length: 40 }, () => randomUser());
