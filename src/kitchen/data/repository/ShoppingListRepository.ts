import Pageable from "../../domain/core/Pageable";
import IShoppingListRepository from "../../domain/Shopping/IShoppingListRepository";
import { ShoppingList } from "../../domain/Shopping/ShoppingLists";


export default class ShoppingListRepository implements IShoppingListRepository {
    async findAll(): Promise<ShoppingList> {
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
