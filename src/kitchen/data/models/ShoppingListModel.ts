import * as mongoose from 'mongoose';
export interface ShoppingListDocument extends mongoose.Document {
    name: string,
    ownerId: string,
    kitchenId: string,
    description: string,
}

export interface ShoppingListModel extends mongoose.Model<ShoppingListDocument> { }

const ShoppingListSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ownerId: { type: String, required: true },
    kitchenId: { type: String },
    description: { type: String, required: true },
    // users: { type: [String] },
})
export { ShoppingListSchema }