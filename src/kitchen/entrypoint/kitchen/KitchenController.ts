import express from "express";
import IKitchenRepository from "../../domain/Kitchen/IKitchenRepository";
import Kitchen from "../../domain/Kitchen/Kitchen";

export default class KitchenController {
    constructor(private readonly kitchenRepository: IKitchenRepository) { }

    public async status(req: express.Request, res: express.Response) {
        return res.status(200).json({ message: 'Kitchen endpoint is Running 💅' })
    }
    public async createKitchen(req: express.Request, res: express.Response) {

    }
    public async updateKitchen(req: express.Request, res: express.Response) { }
    public async deleteKitchen(req: express.Request, res: express.Response) { }
    // Users in Kitchen
    public async addUserToKitchen(req: express.Request, res: express.Response) {
        // ADDS USER TO KITCHEN 

    }
    public async removeUserFromKitchen(req: express.Request, res: express.Response) { }
}

