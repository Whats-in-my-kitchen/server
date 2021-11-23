'use strict';
import { Model, UUIDV4 }from 'sequelize';

interface InventoryModelAttributes {
    id: string;
    kitchenId:string;
   
}
module.exports = (sequelize:any,DataTypes: any) => {
    class InventoryModel extends Model<InventoryModelAttributes> implements InventoryModelAttributes {
        /**
         Helper Method for defining associations. 
         This method is not a part of sequealize lifecycle
         The `models/index` file will call this method automatically
         */
         id!: string;
         kitchenId!: string;
         
        static associate(models:any){
            // InventoryModel.belongsToMany(models.User,{
            //     through: 'InventoryAssignments'
            // });
            // InventoryModel.belongsTo(models.InventoryModel);
        }
    }
    InventoryModel.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        kitchenId: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull:false,
        },
    },{
        sequelize,
        modelName:'Inventory'
    });
    return InventoryModel;
}