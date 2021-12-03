import { Mongoose } from "mongoose";
import { GroceryItem } from "../../domain/core/GroceryItem/GroceryItem";
import IGroceryItemRepository from "../../domain/core/GroceryItem/IGroceryItemRepository";
import Pageable from "../../domain/core/Pageable";
import { GroceryItemDocument, GroceryItemModel, GroceryItemSchema } from "../models/GroceryItemModel";
import { ShoppingListDocument, ShoppingListModel, ShoppingListSchema } from "../models/ShoppingListModel";

export default class GroceryItemRepositoryShopping implements IGroceryItemRepository {
    constructor(private readonly client: Mongoose) { }


    async addGroceryItem(listId: string, groceryItem: GroceryItem): Promise<GroceryItem> {
        const groceryItemModel = this.client.model<GroceryItemDocument>(
            'groceryItem',
            GroceryItemSchema
        ) as GroceryItemModel

        const shoppingListModel = this.client.model<ShoppingListDocument>(
            'shoppingList',
            ShoppingListSchema
        ) as ShoppingListModel

        const shoppingList = await shoppingListModel.findById(listId)
        if (shoppingList === null) return Promise.reject('Shopping List Not Found')


        const newGroceryItem = new groceryItemModel({
            name: groceryItem.name,
            displayImageUrl: groceryItem.displayImageUrl,
            unitPrice: groceryItem.unitPrice,
            unitMeasurement: groceryItem.unitMeasurement,
            quantity: groceryItem.quantity,
            status: groceryItem.status,
        });
        await newGroceryItem.save()
        // Adding the reference to that shopping List
        shoppingList.items.unshift(newGroceryItem.id)
        await shoppingList.save()
        return newGroceryItem;
    }
    async findOne(id: string): Promise<GroceryItem> {
        const model = this.client.model<GroceryItemDocument>(
            'groceryItem',
            GroceryItemSchema
        ) as GroceryItemModel
        const result = await model.findById(id)
        if (result === null) return Promise.reject('Grocery Item not found')
        return new GroceryItem(result.name, result.displayImageUrl, result.unitPrice, result.unitMeasurement, result.quantity, result.status, result._id)
    }
    async removeGroceryItem(listId: string, itemId: string): Promise<string> {
        const groceryItemModel = this.client.model<GroceryItemDocument>(
            'groceryItem',
            GroceryItemSchema
        ) as GroceryItemModel

        const shoppingListModel = this.client.model<ShoppingListDocument>(
            'shoppingList',
            ShoppingListSchema
        ) as ShoppingListModel

        const shoppingList = await shoppingListModel.findById(listId)
        if (shoppingList === null) return Promise.reject('Shopping List Not Found')

        const groceryItem = await groceryItemModel.findById(itemId);
        if (groceryItem === null) return Promise.reject('Grocery Item Not Found')

        await groceryItemModel.findByIdAndRemove(itemId);

        const itemExists = shoppingList.items.includes(itemId)
        if (itemExists) {
            await shoppingList.update({ $pull: { items: itemId } })
            return itemId;
        }
        else {
            return Promise.reject('Item is not in the Shopping List')
        }
    }
    async updateGroceryItem(id: string, groceryItem: GroceryItem): Promise<GroceryItem> {
        const groceryItemModel = this.client.model<GroceryItemDocument>(
            'groceryItem',
            GroceryItemSchema
        ) as GroceryItemModel

        const findGroceryItem = await groceryItemModel.findById(id);
        if (findGroceryItem === null) return Promise.reject('Grocery Item Not Found')


        await findGroceryItem.update(groceryItem, { upsert: true, multi: true })

        return groceryItem;

    }
    findAll(listId: string, page: number, pageSize: number): Promise<Pageable<GroceryItem>> {
        throw new Error("Method not implemented.");
    }
}

