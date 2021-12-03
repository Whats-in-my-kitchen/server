import express from "express";
import IGroceryItemRepository from "../../domain/core/GroceryItem/IGroceryItemRepository";
import IKitchenRepository from "../../domain/Kitchen/IKitchenRepository";
import Kitchen from "../../domain/Kitchen/Kitchen";
import IShoppingListRepository from "../../domain/Shopping/IShoppingListRepository";
import { ShoppingList } from "../../domain/Shopping/ShoppingLists";

export default class ShoppingListController {
    constructor(private readonly repository: IShoppingListRepository, private readonly groceryRepository: IGroceryItemRepository,) { }

    public async status(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Shopping List endpoint is Running 💅' })
    }

    // SHOPPING LIST

    public async createShoppingList(req: express.Request, res: express.Response) {
        try {
            const { name, createdBy, description, kitchenId } = req.body

            const shoppingList = new ShoppingList(name, createdBy, kitchenId, description)
            return this.repository
                .createShoppingList(shoppingList)
                .then((shoppingList) =>
                    res.status(200).json({
                        shoppingList: shoppingList,
                    })
                )
                .catch((err: Error) => res.status(404).json({ error: err }))
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }

    public async getShoppingList(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params

            return this.repository
                .findOne(id)
                .then((shoppingList) =>
                    res.status(200).json({
                        shoppingList: shoppingList,
                    })
                )
                .catch((err: Error) => res.status(404).json({ error: err }))
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }

    public async getAllShoppingList(req: express.Request, res: express.Response) {
        try {
            const { page, limit } = { ...req.query } as { page: any; limit: any }

            return this.repository
                .findAll(parseInt(page), parseInt(limit))
                .then((pageable) =>
                    res.status(200).json({
                        metadata: {
                            page: pageable.page,
                            pageSize: pageable.pageSize,
                            total_pages: pageable.totalPages,
                        },
                        shoppingList: pageable.data,
                    })
                )
                .catch((err: Error) => res.status(404).json({ error: err }))
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }

    public async updateShoppingList(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Update Shopping List Route 💅' })
    }

    public async deleteShoppingList(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params

            return this.repository
                .deleteShoppingList(id)
                .then((shoppingList) =>
                    res.status(200).json({
                        shoppingList: shoppingList,
                    })
                )
                .catch((err: Error) => res.status(404).json({ error: err }))
        } catch (err) {
            return res.status(400).json({ error: err })
        }
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