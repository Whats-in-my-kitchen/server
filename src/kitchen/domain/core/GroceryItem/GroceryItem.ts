export class GroceryItem {
    constructor(
        public readonly name: string,
        public readonly displayImageUrl?: string,
        public readonly unitPrice?: number,
        public readonly unitMeasurement?: string,
        public readonly quantity?: number,
        public readonly status?: boolean,
        public readonly id?: string,

    ) {

    }
}