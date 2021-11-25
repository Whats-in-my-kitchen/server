export class GroceryItem {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly displayImageUrl: string,
        public readonly unitPrice: number,
        public readonly unitMeasurement: string,
        public readonly tags: Array<string> = new Array<string>()
    ) {

    }
}