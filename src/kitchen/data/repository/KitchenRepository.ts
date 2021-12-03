import { Mongoose } from 'mongoose'
import { nanoid } from 'nanoid'
import { UserModel, UserSchema } from '../../../auth/data/models/UserModel';
import User from "../../../auth/domain/User";
import IKitchenRepository from "../../domain/Kitchen/IKitchenRepository";
import Kitchen from "../../domain/Kitchen/Kitchen";
import { KitchenModel, KitcenDocument, KitchenSchema } from "../models/KitchenModel";

export class KitchenRepository implements IKitchenRepository {
    constructor(private readonly client: Mongoose) { }

    async createKitchen(name: String, userId: String): Promise<Kitchen> {
        const kitchenModel = this.client.model<KitcenDocument>(
            'kitchen',
            KitchenSchema
        ) as KitchenModel
        const userModel = this.client.model<UserModel>('User', UserSchema)
        const user = await userModel.findById(userId)
        if (user == null) return Promise.reject('User Does not Exist')
        if (user.kitchenId != null) return Promise.reject('User cannot create more than one kitchen')
        const kitchen = new kitchenModel({
            name: name,
            kitchenCode: nanoid(6),
            admin: userId,
            users: [],
            inventory: [],
        });
        await kitchen.save()
        if (user != null) {
            user.kitchenId = kitchen.id;
            user.save()
        }
        return kitchen;
    }

    async joinKitchen(kitchenCode: string, userId: string): Promise<Kitchen> {
        const model = this.client.model<KitcenDocument>(
            'kitchen',
            KitchenSchema
        ) as KitchenModel
        const kitchen = await model.findOne({ kitchenCode: kitchenCode })

        if (kitchen === null) return Promise.reject('Kitchen not found')
        // const userExists = await model.findOne({ kitchenCode: kitchenCode, users: { $in: [userId] } })
        const userExists = kitchen.users.includes(userId)
        if (!userExists) {
            kitchen.users.unshift(userId)
            await kitchen.save()

            const userModel = this.client.model<UserModel>('User', UserSchema)
            const user = await userModel.findById(userId)
            if (user != null) {
                user.kitchenId = kitchen.id;
                user.save()
            }

            return new Kitchen(
                kitchen.name,
                kitchen.kitchenCode,
                kitchen.admin,
                kitchen.users,
                kitchen.inventory,
                kitchen.id,
            )
        }
        else {
            return Promise.reject('User Already Joined the Kitchen')
        }
    }

    async findOne(id: string): Promise<Kitchen> {
        const model = this.client.model<KitcenDocument>(
            'kitchen',
            KitchenSchema
        ) as KitchenModel
        const result = await model.findById(id)
        if (result === null) return Promise.reject('Kitchen not found')
        return new Kitchen(
            result.name,
            result.kitchenCode,
            result.admin,
            result.users,
            result.inventory,
            result.id,
        )
    }

    updateKitchen(kitchen: Kitchen): Promise<Kitchen> {
        throw new Error("Method not implemented.");
    }




    async removeUserFromKitchen(kitchenCode: string, user: string, userId: String): Promise<string> {
        const model = this.client.model<KitcenDocument>(
            'kitchen',
            KitchenSchema
        ) as KitchenModel

        const kitchen = await model.findOne({ kitchenCode: kitchenCode })

        if (kitchen === null) return Promise.reject('Kitchen Not Found')
        if (kitchen.admin != userId) return Promise.reject('Only admins can remove user')
        const userExists = kitchen.users.includes(user)
        if (userExists) {
            await kitchen.update({ $pull: { users: user } })
            return user;
        }
        else {
            return Promise.reject('User is not in the Kitchen')
        }
        return user;
    }
    // TODO: Should Implement this later
    deleteKitchen(kitchen: Kitchen): Promise<Kitchen> {
        throw new Error("Method not implemented.");
    }

}

