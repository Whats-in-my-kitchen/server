import { GroceryItem } from "../../domain/core/GroceryItem/GroceryItem";
import IGroceryItemRepository from "../../domain/core/GroceryItem/IGroceryItemRepository";
import Pageable from "../../domain/core/Pageable";

export default class GroceryItemRepositoryShopping implements IGroceryItemRepository {

    addGroceryItem(listId: string): Promise<GroceryItem> {
        throw new Error("Method not implemented.");
    }
    removeGroceryItem(listId: string): Promise<GroceryItem> {
        throw new Error("Method not implemented.");
    }
    updateGroceryItem(id: string): Promise<GroceryItem> {
        throw new Error("Method not implemented.");
    }
    findAll(page: number, pageSize: number): Promise<Pageable<GroceryItem>> {
        throw new Error("Method not implemented.");
    }
}

