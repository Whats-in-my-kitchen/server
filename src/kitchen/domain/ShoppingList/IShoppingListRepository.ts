import Pageable from '../core/Pageable';
import GroceryItem from '../Grocery/Grocery';
import ShoppingList from './ShoppingList';

export default interface IShoppingListRepository {
    findAll(page: number, pageSize: number): Promise<Pageable<ShoppingList>>

    findOne(id: string): Promise<ShoppingList>

    search(
        page: number,
        pageSize: number,
        query: string,
    ): Promise<Pageable<ShoppingList>>
    
    getGroceryItems(shoppingListId: string): Promise<GroceryItem[]>
    createShoppingList(shoppingList: ShoppingList): Promise<ShoppingList>
    updateShoppingList(shoppingList: ShoppingList): Promise<ShoppingList>
    deleteShoppingList(shoppingListId: string): Promise<ShoppingList>
}