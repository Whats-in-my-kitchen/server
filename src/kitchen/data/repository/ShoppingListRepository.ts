import Pageable from "../../domain/core/Pageable";
import IShoppingListRepository from "../../domain/Shopping/IShoppingListRepository";
import { ShoppingList } from "../../domain/Shopping/ShoppingLists";


export default class ShoppingListRepository implements IShoppingListRepository {
    findAll(page: number, pageSize: number): Promise<Pageable<ShoppingList>> {
        throw new Error("Method not implemented.");
    }
    // TODO : Additional Feature- should Implement later on
    search(page: number, pageSize: number, query: string): Promise<Pageable<ShoppingList>> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<ShoppingList> {
        throw new Error("Method not implemented.");
    }
    createShoppingList(shoppingList: ShoppingList): Promise<ShoppingList> {
        throw new Error("Method not implemented.");
    }
    updateShoppingList(shoppingList: ShoppingList): Promise<ShoppingList> {
        throw new Error("Method not implemented.");
    }
    deleteShoppingList(shoppingListId: string): Promise<ShoppingList> {
        throw new Error("Method not implemented.");
    }
}