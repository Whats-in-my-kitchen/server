import { Mongoose } from 'mongoose'
import { nanoid } from 'nanoid'
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

        const kitchen = new kitchenModel({
            name: name,
            kitchenCode: nanoid(6),
            admin: userId,
            users: [],
            inventory: [],
        });
        await kitchen.save()
        return kitchen;
    }
    async joinKitchen(code: string): Promise<Kitchen> {
        const model = this.client.model<KitcenDocument>(
            'kitchen',
            KitchenSchema
        ) as KitchenModel
        const result = await model.findOne({ kitchenCode: code })

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

    addUserToKitchen(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

    // TODO: Should Implement this later
    removeUserFromKitchen(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    // TODO: Should Implement this later
    deleteKitchen(kitchen: Kitchen): Promise<Kitchen> {
        throw new Error("Method not implemented.");
    }

}

