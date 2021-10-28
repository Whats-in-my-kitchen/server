export default class User{
    constructor (
        public readonly id: string,
        public readonly username: string,
        public readonly emailAddress: string,
        public readonly password: string,
        public readonly displayImageUrl: string,
    ){}
}