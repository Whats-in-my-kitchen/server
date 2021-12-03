import express from "express";
import IKitchenRepository from "../../domain/Kitchen/IKitchenRepository";
import Kitchen from "../../domain/Kitchen/Kitchen";
import IShoppingListRepository from "../../domain/Shopping/IShoppingListRepository";

export default class ShoppingListController {
    constructor(private readonly repository: IShoppingListRepository) { }

    public async status(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Shopping List endpoint is Running 💅' })
    }


}

declare module 'express-serve-static-core' {
    interface Request {
        user?: any
    }
}