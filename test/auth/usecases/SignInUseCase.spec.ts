import 'mocha'
import chai, { expect } from 'chai';
import SignInUseCase from '../../../src/auth/usecases/SignInUseCase';
import IAuthRepository from '../../../src/auth/domain/IAuthRepository';
import IPasswordService from '../../../src/auth/services/IPasswordService';
import { v4 as uuidv4 } from 'uuid';
import FakeRepository from '../helpers/FakeRepository';
import FakePasswordService from '../helpers/FakePasswordService';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);

describe('SignInUseCase', () => {
    // System Under Test here is SignInUseCase
    let sut: SignInUseCase
    let repository: IAuthRepository
    let passwordService: IPasswordService

    const user = {
        id: uuidv4(),
        username: 'Saurav',
        email: 'saurav@gmail.com',
        password: 'sauravPassword',
        displayImageUrl: 'none',
        type: 'email',
    }
    beforeEach(() => {
        repository = new FakeRepository()
        passwordService = new FakePasswordService()
        sut = new SignInUseCase(repository, passwordService);
    })

    it('should throw an error when user is not found', async () => {
        const wrongUser = { email: 'wrong@gmail.com', password: 'wrongPassword' }
        // Assert
        await expect(sut.execute(wrongUser.email, wrongUser.password)).to.be.rejectedWith('User not found')
    })
});