import * as mongoose from 'mongoose'
export interface KitcenDocument extends mongoose.Document {
    name: string,
    kitchenCode: string,
    users: string[],
    inventory: string[]
}


export interface KitchenModel extends mongoose.Model<KitcenDocument> { }

const KitchenSchema = new mongoose.Schema({

    name: { type: String, required: true },
    kitchenCode: { type: String, required: true },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    inventory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "groceryItem",
    },
})


export { KitchenSchema }