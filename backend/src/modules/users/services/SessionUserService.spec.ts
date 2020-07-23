import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import SessionUserService from './SessionUserService';

let fakeUserRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: SessionUserService;

describe('SessionUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    authenticateUser = new SessionUserService(
      fakeUserRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authentincate', async () => {
    const user = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'john@doe.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authentincate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'john@doe.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authentincate with wrong password', async () => {
    await fakeUserRepository.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password: 'wrongPassword',
    });

    await expect(
      authenticateUser.execute({
        email: 'john@doe.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
