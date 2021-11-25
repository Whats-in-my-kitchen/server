import Pageable from "../Pageable";
import { GroceryItem } from "./GroceryItem";

export default interface IGroceryItemRepository {
    addGroceryItem(listId: string): Promise<GroceryItem>
    removeGroceryItem(listId: string): Promise<GroceryItem>
    updateGroceryItem(listId: string): Promise<GroceryItem>
    findAll(page: number, pageSize: number): Promise<Pageable<GroceryItem>>
}