import Pageable from '../../domain/core/Pageable';
import Grocery from '../../domain/Grocery/Grocery';
import IShoppingListRepository from '../../domain/ShoppingList/IShoppingListRepository';
import ShoppingList from '../../domain/ShoppingList/ShoppingList';

export default class ShoppingRepository implements IShoppingListRepository {
    
    findAll(page: number, pageSize: number): Promise<Pageable<ShoppingList>> {
        throw new Error('Method not implemented.');
    }
    findOne(id: string): Promise<ShoppingList> {
        throw new Error('Method not implemented.');
    }
    search(page: number, pageSize: number, query: string): Promise<Pageable<ShoppingList>> {
        throw new Error('Method not implemented.');
    }
    getGroceryItems(shoppingListId: string): Promise<Grocery[]> {
        throw new Error('Method not implemented.');
    }
    createShoppingList(shoppingList: ShoppingList): Promise<ShoppingList> {
        throw new Error('Method not implemented.');
    }
    updateShoppingList(shoppingList: ShoppingList): Promise<ShoppingList> {
        throw new Error('Method not implemented.');
    }
    deleteShoppingList(shoppingListId: string): Promise<ShoppingList> {
        throw new Error('Method not implemented.');
    }
}