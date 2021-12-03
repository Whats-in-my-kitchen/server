import User from '../../../auth/domain/User';
import Kitchen from './Kitchen';


export default interface IKitchenRepository {
    // Kitchen
    createKitchen(name: string, userId: string): Promise<Kitchen>
    joinKitchen(code: string, userId: string): Promise<Kitchen>
    findOne(id: string): Promise<Kitchen>
    updateKitchen(kitchen: Kitchen): Promise<Kitchen>
    deleteKitchen(kitchen: Kitchen): Promise<Kitchen>

    // Users in Kitchen
    removeUserFromKitchen(kitchenCode: string, user: string, userId: string): Promise<string>
}
