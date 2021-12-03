import { GroceryItem } from "../core/GroceryItem/GroceryItem";


export class ShoppingList {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly ownerId: string,
        public readonly kitchenId: string,
        public readonly description: string,
        public readonly items?: Array<GroceryItem>
    ) {
    }
}
