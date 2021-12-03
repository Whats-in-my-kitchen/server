import { Mongoose } from "mongoose";
import { GroceryItem } from "../../domain/core/GroceryItem/GroceryItem";
import IGroceryItemRepository from "../../domain/core/GroceryItem/IGroceryItemRepository";
import Pageable from "../../domain/core/Pageable";

export default class GroceryItemRepositoryShopping implements IGroceryItemRepository {
    constructor(private readonly client: Mongoose) { }
    async addGroceryItem(listId: string): Promise<GroceryItem> {
        throw new Error("Method not implemented.");
    }
    async removeGroceryItem(listId: string): Promise<GroceryItem> {
        throw new Error("Method not implemented.");
    }
    async updateGroceryItem(id: string): Promise<GroceryItem> {
        throw new Error("Method not implemented.");
    }
    async findAll(page: number, pageSize: number): Promise<Pageable<GroceryItem>> {
        throw new Error("Method not implemented.");
    }
}

