import * as mongoose from 'mongoose'

export interface UserModel extends mongoose.Document {
    id: string
    username: string
    email: string
    password?: string
    type: string
}

export const UserSchema = new mongoose.Schema({
    type: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: String,
})