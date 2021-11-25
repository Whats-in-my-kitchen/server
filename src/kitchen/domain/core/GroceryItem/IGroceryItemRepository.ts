import { GroceryItem } from "./GroceryItem";

export default interface IGroceryItemRepository<T> {
    addGroceryItem(listId: string): Promise<GroceryItem[]>
    removeGroceryItem(listId: string): Promise<GroceryItem[]>
    updateGroceryItem(listId: string): Promise<GroceryItem[]>
}