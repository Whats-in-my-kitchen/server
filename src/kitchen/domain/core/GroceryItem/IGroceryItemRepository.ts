import Pageable from "../Pageable";
import { GroceryItem } from "./GroceryItem";

export default interface IGroceryItemRepository {
    findOne(id: string): Promise<GroceryItem>
    addGroceryItem(listId: string, groceryItem: GroceryItem): Promise<GroceryItem>
    removeGroceryItem(listId: string, itemId: string): Promise<string>
    updateGroceryItem(listId: string, groceryItem: GroceryItem): Promise<GroceryItem>
    findAll(listId: string, page: number, pageSize: number): Promise<Pageable<GroceryItem>>
}