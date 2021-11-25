import { GroceryItem } from "../../domain/core/GroceryItem/GroceryItem";
import IGroceryItemRepository from "../../domain/core/GroceryItem/IGroceryItemRepository";
import Pageable from "../../domain/core/Pageable";
import { Inventory } from "../../domain/Kitchen/Kitchen";
import { ShoppingList } from "../../domain/Shopping/ShoppingLists";

export default class GroceryItemRepositoryShopping implements IGroceryItemRepository {

    addGroceryItem(listId: string): Promise<GroceryItem> {
        throw new Error("Method not implemented.");
    }
    removeGroceryItem(listId: string): Promise<GroceryItem> {
        throw new Error("Method not implemented.");
    }
    updateGroceryItem(listId: string): Promise<GroceryItem> {
        throw new Error("Method not implemented.");
    }
    findAll(page: number, pageSize: number): Promise<Pageable<GroceryItem>> {
        throw new Error("Method not implemented.");
    }
}

