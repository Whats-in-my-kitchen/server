import User from "../../../auth/domain/User";
import { GroceryItem } from "../core/GroceryItem/GroceryItem";

export default class Kitchen {
    constructor(
        public readonly name: string,
        public readonly kitchenCode: string,
        public readonly admin: string,
        public readonly users: Array<String>,
        public readonly inventory: Array<GroceryItem>,
        public readonly id?: string,
    ) { }
}

