'use strict';
import Kitchen from '../../domain/Kitchen/Kitchen';
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
            // define association here
        }
    }
    KitchenAssignment.init({
        KitchenId: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Kitchens',
                key: 'id'
            }
        },
        UserId: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
    }, {
        sequelize,
        modelName: 'KitchenAssignment'
    });
    return KitchenAssignment;
}