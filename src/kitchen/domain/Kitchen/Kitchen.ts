export class Kitchen {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly inventoryId: string,
    ) { }
}

export class Inventory {
    constructor(
        public readonly id: string,
        public readonly kitchenId: string,
    ) {
    }
}

