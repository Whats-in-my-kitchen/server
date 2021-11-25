import User from "../../../auth/domain/User";
import IKitchenRepository from "../../domain/Kitchen/IKitchenRepository";
import Kitchen from "../../domain/Kitchen/Kitchen";

export class KitchenRepository implements IKitchenRepository {

    createKitchen(kitchen: Kitchen): Promise<Kitchen> {
        throw new Error("Method not implemented.");
    }
    findOne(id: string): Promise<Kitchen> {
        throw new Error("Method not implemented.");
    }
    updateKitchen(kitchen: Kitchen): Promise<Kitchen> {
        throw new Error("Method not implemented.");
    }

    addUserToKitchen(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

    // TODO: Should Implement this later
    removeUserFromKitchen(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    // TODO: Should Implement this later
    deleteKitchen(kitchen: Kitchen): Promise<Kitchen> {
        throw new Error("Method not implemented.");
    }

}

