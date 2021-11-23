'use strict';
import Kitchen from '../../domain/Kitchen/Kitchen';
// import UserModel from '../../../auth/data/models/UserModel';
import { Model, UUIDV4 }from 'sequelize';

interface KitchenModelAttributes {
    id: string;
    inventoryId:string;
   
}
module.exports = (sequelize:any,DataTypes: any) => {
    class KitchenModel extends Model<KitchenModelAttributes> implements KitchenModelAttributes {
        /**
         Helper Method for defining associations. 
         This method is not a part of sequealize lifecycle
         The `models/index` file will call this method automatically
         */
         id!: string;
         inventoryId!: string;
         
        static associate(models:any){
            // KitchenModel.belongsToMany(models.User,{
            //     through: 'KitchenAssignments'
            // });
            // KitchenModel.belongsTo(models.InventoryModel);
        }
    }
    KitchenModel.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        inventoryId: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull:false,
        },
    },{
        sequelize,
        modelName:'Kitchen'
    });
    return KitchenModel;
}