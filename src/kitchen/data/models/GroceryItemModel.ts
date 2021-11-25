import * as mongoose from 'mongoose';
export interface GroceryItemDocument extends mongoose.Document {
    name: string,
    ownerId: string,
    kitchenId: string,
    description: string,
}

export interface GroceryItemModel extends mongoose.Model<GroceryItemDocument> { }

const GroceryItemModelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    displayImageUrl: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    unitMeasurement: { type: String },
    tags: { type: [String] },
})
export { GroceryItemModelSchema }