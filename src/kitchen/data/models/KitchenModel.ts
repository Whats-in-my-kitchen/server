import * as mongoose from 'mongoose'
export interface KitcenDocument extends mongoose.Document {
    name: string,
    inventoryId: string,
}
export interface InventoryDocument extends mongoose.Document {
    kitchenId: string,
    groceryItems: string[]
}

export interface KitchenModel extends mongoose.Model<KitcenDocument> { }
export interface InventoryModel extends mongoose.Model<InventoryDocument> { }

const KitchenSchema = new mongoose.Schema({
    inventoryId: { type: String },
    name: { type: String, required: true }
})

const InventorySchema = new mongoose.Schema({
    kitchenId: { type: String, required: true },
    groceryItems: { type: [String] },
})

export { KitchenSchema, InventorySchema }