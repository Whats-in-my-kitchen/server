import express from "express";
import IGroceryItemRepository from "../../domain/core/GroceryItem/IGroceryItemRepository";
import IKitchenRepository from "../../domain/Kitchen/IKitchenRepository";
import Kitchen from "../../domain/Kitchen/Kitchen";
import IShoppingListRepository from "../../domain/Shopping/IShoppingListRepository";

export default class ShoppingListController {
    constructor(private readonly repository: IShoppingListRepository, private readonly groceryRepository: IGroceryItemRepository,) { }

    public async status(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Shopping List endpoint is Running 💅' })
    }

    // SHOPPING LIST

    public async createShoppingList(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Shopping List endpoint is Running 💅' })
    }

    public async getShoppingList(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Get Shopping List Route 💅' })
    }

    public async getAllShoppingList(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Get All Shopping List Route 💅' })
    }

    public async updateShoppingList(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Update Shopping List Route 💅' })
    }

    public async deleteShoppingList(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Delete Shopping List Route 💅' })
    }


    // GROCERY ITEMS IN SHOPPING LIST
    public async addGroceryItem(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Add Grocery Item Route💅' })
    }
    public async deleteGroceryItem(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Delete Grocery Item Route 💅' })
    }
    public async updateGroceryItem(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Update Grocery Item Route 💅' })
    }
}

declare module 'express-serve-static-core' {
    interface Request {
        user?: any
    }
}