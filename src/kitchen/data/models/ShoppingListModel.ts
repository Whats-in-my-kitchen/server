import * as mongoose from 'mongoose';
import pagination from 'mongoose-paginate-v2'

export interface ShoppingListDocument extends mongoose.Document {
    name: string,
    kitchenId: string,
    description: string,
    createdBy: string,
    items: string[]
    users: string[]
}

export interface ShoppingListModel extends mongoose.PaginateModel<ShoppingListDocument> { }

const ShoppingListSchema = new mongoose.Schema({
    name: { type: String, required: true },
    createdBy: { type: String, required: true },
    kitchenId: { type: String },
    description: { type: String },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "groceryItem",
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],
})
ShoppingListSchema.plugin(pagination)
export { ShoppingListSchema }