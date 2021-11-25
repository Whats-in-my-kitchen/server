import User from '../../../auth/domain/User';
import { Inventory, Kitchen } from './Kitchen';


export interface IKitchenRepository {
    // Kitchen
    createKitchen(kitchen: Kitchen): Promise<Kitchen>
    findOne(id: string): Promise<Kitchen>
    updateKitchen(kitchen: Kitchen): Promise<Kitchen>
    deleteKitchen(kitchen: Kitchen): Promise<Kitchen>
    // Users in Kitchen
    addUserToKitchen(user: User): Promise<User>
    removeUserFromKitchen(user: User): Promise<User>
}

export interface IInventoryRepository {
    // Kitchen
    create(inventory: Inventory): Promise<Inventory>
    findOne(id: string): Promise<Inventory>
    update(inventory: Inventory): Promise<Inventory>
    delete(Inventory: Inventory): Promise<Inventory>
    // Users in Inventory
    addUserToInventory(user: User): Promise<User>
    removeUserFromInventory(user: User): Promise<User>
}