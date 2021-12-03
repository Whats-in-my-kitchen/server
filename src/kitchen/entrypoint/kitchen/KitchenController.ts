import express from "express";
import IKitchenRepository from "../../domain/Kitchen/IKitchenRepository";
import Kitchen from "../../domain/Kitchen/Kitchen";

export default class KitchenController {
    constructor(private readonly repository: IKitchenRepository) { }

    public async status(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Kitchen endpoint is Running 💅' })
    }
    public async createKitchen(req: express.Request, res: express.Response) {
        try {
            const { name } = req.body

            return this.repository
                .createKitchen(name, req.user)
                .then((kitchen) =>
                    res.status(200).json({
                        kitchen: kitchen,
                    })
                )
                .catch((err: Error) => res.status(404).json({ error: err }))
        } catch (err) {
            return res.status(400).json({ error: err })
        }


    }
    public async findOne(req: express.Request, res: express.Response) {
        try {
            const { id } = req.params

            return this.repository
                .findOne(id)
                .then((kitchen) =>
                    res.status(200).json({
                        kitchen: kitchen,
                    })
                )
                .catch((err: Error) => res.status(404).json({ error: err }))
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
    public async updateKitchen(req: express.Request, res: express.Response) { }
    public async deleteKitchen(req: express.Request, res: express.Response) { }
    // Users in Kitchen
    public async joinKitchen(req: express.Request, res: express.Response) {
        try {
            const { kitchenCode } = req.body

            return this.repository
                .joinKitchen(kitchenCode, req.user)
                .then((kitchen) =>
                    res.status(200).json({
                        kitchen: kitchen,
                    })
                )
                .catch((err: Error) => res.status(404).json({ error: err }))
        } catch (err) {
            return res.status(400).json({ error: err })
        }

    }
    public async removeUserFromKitchen(req: express.Request, res: express.Response) {
        try {
            const { kitchenCode, removeUserId } = req.body

            return this.repository
                .removeUserFromKitchen(kitchenCode, removeUserId, req.user)
                .then((removedUser) =>
                    res.status(200).json({
                        removedUser: removedUser,
                        "userRemoved": true,
                    })
                )
                .catch((err: Error) => res.status(404).json({ error: err, "userRemoved": false }))
        } catch (err) {
            return res.status(400).json({ error: err })
        }
    }
}

declare module 'express-serve-static-core' {
    interface Request {
        user?: any
    }
}