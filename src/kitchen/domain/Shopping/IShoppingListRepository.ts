import { GroceryItem } from "../core/GroceryItem/GroceryItem";
import Pageable from "../core/Pageable";

import { ShoppingList } from "./ShoppingLists";

export default interface IShoppingListRepository {
    findAll(): Promise<ShoppingList>
    // CRUD
    findOne(id: string): Promise<ShoppingList>
    createShoppingList(shoppingList: ShoppingList): Promise<ShoppingList>
    updateShoppingList(shoppingList: ShoppingList): Promise<ShoppingList>
    deleteShoppingList(shoppingListId: string): Promise<ShoppingList>
}
