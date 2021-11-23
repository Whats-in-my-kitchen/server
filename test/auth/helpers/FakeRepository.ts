import IAuthRepository from '../../../src/auth/domain/IAuthRepository';
import User from '../../../src/auth/domain/User';
export default class FakeRepository implements IAuthRepository {
    public users =
        [
            {
                id: '1',
                email: 'saurav@gmail.com',
                username: 'saurav',
                password: 'sauravPassword',
                displayImageUrl: 'localhost',
                type: 'email',
            },
            {
                id: '2',
                email: 'test@gmail.com',
                username: 'test',
                password: 'testPassword',
                displayImageUrl: 'localhost',
                type: 'google',
            }
        ]

    public async find(email: string): Promise<User> {
        const user = this.users.find((x) => x.email === email);
        if (!user) throw Promise.reject('User not found')
        return new User(
            user?.id,
            user?.username,
            user?.email,
            user?.password,
            user?.displayImageUrl,
            user?.type
        );
    }
    public async add(username: string, email: string, passwordHash: string, type: string): Promise<string> {
        const max = 9999
        const min = 1000
        const id = (Math.floor(Math.random() * (+max - +min)) + min).toString();
        this.users.push({
            id: id,
            email: email,
            username: username,
            type: type,
            password: passwordHash,
            displayImageUrl: ''
        })
        return id;
    }

}