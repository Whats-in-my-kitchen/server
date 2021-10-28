'use strict';
import { Model, UUIDV4 } from 'sequelize';

interface UserModelAttributes {
    id: string;
    name: string;
    email: string;
    password: string;
    displayImageUrl: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class UserModel extends Model<UserModelAttributes> implements UserModelAttributes {
        /**
         * 
         Helper Method for defining associations. 
         This method is not a part of sequealize lifecycle
         The `models/index` file will call this method automatically
         */
        id!: string;
        name!: string;
        email!: string;
        password!: string;
        displayImageUrl!: string;
        static associate(models: any) {
            // deifine association here. 
            UserModel.belongsTo(models.Kitchen)
            
        }
    }
    UserModel.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        displayImageUrl: {
            type: DataTypes.STRING,
            defaultValue: 'https://palmbayprep.org/wp-content/uploads/2015/09/userModel-icon-placeholder.png',
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'User'
    });
    return UserModel;
}