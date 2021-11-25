import User from '../../../auth/domain/User';
import Kitchen from './Kitchen';


export default interface IKitchenRepository {
    // Kitchen
    createKitchen(kitchen: Kitchen): Promise<Kitchen>
    findOne(id: string): Promise<Kitchen>
    updateKitchen(kitchen: Kitchen): Promise<Kitchen>
    deleteKitchen(kitchen: Kitchen): Promise<Kitchen>
    // Users in Kitchen
    addUserToKitchen(user: User): Promise<User>
    removeUserFromKitchen(user: User): Promise<User>
}
