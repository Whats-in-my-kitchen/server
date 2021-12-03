import User from "../../../auth/domain/User";
import { GroceryItem } from "../core/GroceryItem/GroceryItem";


export class ShoppingList {
    constructor(
        public readonly name: string,
        public readonly createdBy: string,
        public readonly kitchenId?: string,
        public readonly description?: string,
        public readonly id?: string,
        public readonly items?: Array<String>,
        public readonly users?: Array<String>
    ) {
    }
}
