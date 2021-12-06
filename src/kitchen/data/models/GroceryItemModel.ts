import * as mongoose from 'mongoose';
export interface GroceryItemDocument extends mongoose.Document {
    name: string,
    displayImageUrl?: string,
    unitPrice?: number,
    unitMeasurement?: string,
    quantity?: number,
    status?: boolean

}

export interface GroceryItemModel extends mongoose.PaginateModel<GroceryItemDocument> { }

const GroceryItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    displayImageUrl: { type: String, required: false },
    unitPrice: { type: Number, required: false },
    unitMeasurement: { type: String },
    quantity: { type: Number, default: 1 },
    status: { type: Boolean, default: false }
})
export { GroceryItemSchema }