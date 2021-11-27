import * as mongoose from 'mongoose';
export interface GroceryItemDocument extends mongoose.Document {
    name: string,
    displayImageUrl?: string,
    unitPrice?: number,
    unitMeasurement?: string,
    tags?: string[],
    count?: number,
}

export interface GroceryItemModel extends mongoose.Model<GroceryItemDocument> { }

const GroceryItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    displayImageUrl: { type: String, required: false },
    unitPrice: { type: Number, required: false },
    unitMeasurement: { type: String },
    count: { type: Number },
    tags: { type: [String] },
})
export { GroceryItemSchema }