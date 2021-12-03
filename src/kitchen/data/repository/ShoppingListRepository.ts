import { Mongoose, PaginateResult } from "mongoose";
import { UserModel, UserSchema } from "../../../auth/data/models/UserModel";
import Pageable from "../../domain/core/Pageable";
import IShoppingListRepository from "../../domain/Shopping/IShoppingListRepository";
import { ShoppingList } from "../../domain/Shopping/ShoppingLists";
import { ShoppingListDocument, ShoppingListModel, ShoppingListSchema } from "../models/ShoppingListModel";


export default class ShoppingListRepository implements IShoppingListRepository {
    constructor(private readonly client: Mongoose) { }
    async findAll(page: number, pageSize: number): Promise<Pageable<ShoppingList>> {
        const model = this.client.model<ShoppingListDocument>(
            'shoppingList',
            ShoppingListSchema
        ) as ShoppingListModel

        const pageOptions = { page: page, limit: pageSize }

        const pageResults = await model.paginate({}, pageOptions).catch((err: any) => null)
        return this.shoppingListFromPageResults(pageResults)
    }


    async findOne(id: string): Promise<ShoppingList> {
        const model = this.client.model<ShoppingListDocument>(
            'shoppingList',
            ShoppingListSchema
        ) as ShoppingListModel
        const result = await model.findById(id)
        if (result === null) return Promise.reject('Shopping List not found')
        return new ShoppingList(
            result.name,
            result.createdBy,
            result.kitchenId,
            result.description,
            result.id,
            result.items,
            result.users,
        )

    }
    async createShoppingList(shoppingList: ShoppingList): Promise<ShoppingList> {
        const shoppingListModel = this.client.model<ShoppingListDocument>(
            'shoppingList',
            ShoppingListSchema
        ) as ShoppingListModel

        const newShoppingList = new shoppingListModel({
            name: shoppingList.name,
            description: shoppingList.description,
            createdBy: shoppingList.createdBy,
            kitchenId: shoppingList.kitchenId,
        })
        await newShoppingList.save()
        return newShoppingList;
    }
    async updateShoppingList(shoppingList: ShoppingList): Promise<ShoppingList> {
        throw new Error("Method not implemented.");
    }
    async deleteShoppingList(shoppingListId: string): Promise<ShoppingList> {
        const model = this.client.model<ShoppingListDocument>(
            'shoppingList',
            ShoppingListSchema
        ) as ShoppingListModel
        const result = await model.findById(shoppingListId)
        if (result === null) return Promise.reject('Shopping List not found')
        const deletedResult = result
        await result.deleteOne()
        return new ShoppingList(
            deletedResult.name,
            deletedResult.createdBy,
            deletedResult.kitchenId,
            deletedResult.description,
            deletedResult.id,
            deletedResult.items,
            deletedResult.users,
        )
    }

    private shoppingListFromPageResults(
        pageResults: PaginateResult<ShoppingListDocument> | null
    ) {
        if (pageResults === null || pageResults.docs.length === 0)
            return Promise.reject('Shopping List not found')

        const results = pageResults.docs.map<ShoppingList>(
            (model) =>
                new ShoppingList(model.name, model.createdBy, model.kitchenId, model.description, model.id, model.items, model.users)
        )

        return new Pageable<ShoppingList>(
            pageResults.page ?? 0,
            pageResults.limit,
            pageResults.totalPages,
            results
        )
    }
}
