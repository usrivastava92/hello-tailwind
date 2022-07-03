import { faker } from '@faker-js/faker';

export const randomProfile = (): IProfileInfo => {
  return {
    name: faker.name.findName(),
    profession: faker.name.jobTitle(),
    bio: faker.lorem.sentence(),
    email: faker.internet.email()
  };
};

export interface IProfileInfo {
  name: string;
  profession: string;
  bio: string;
  email: string;
}

export interface ProfileProps {
  profileInfo: IProfileInfo;
}
