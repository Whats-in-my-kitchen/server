'use strict';
import Kitchen from '../../../kitchen/domain/Kitchen/Kitchen';
// import UserModel from '../../../auth/data/models/UserModel';
import { Model, UUIDV4 } from 'sequelize';

interface KitchenAssignmentModel {
    KitchenId: string;
    UserId: string;

}
module.exports = (sequelize: any, DataTypes: any) => {
    class KitchenAssignment extends Model<KitchenAssignmentModel> implements KitchenAssignmentModel {
        /**
         Helper Method for defining associations. 
         This method is not a part of sequealize lifecycle
         The `models/index` file will call this method automatically
         */
        KitchenId!: string;
        UserId!: string;

        static associate(models: any) {
            // KitchenAssignment.belongsToMany(models.User,{
            //     through: 'KitchenAssignment'
            // });
            // KitchenAssignment.belongsTo(models.InventoryModel);
        }
    }
    KitchenAssignment.init({
        KitchenId: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Kitchen',
                key: 'id'
            }
        },
        UserId: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'User',
                key: 'id'
            }
        },
    }, {
        sequelize,
        modelName: 'KitchenAssignment'
    });
    return KitchenAssignment;
}