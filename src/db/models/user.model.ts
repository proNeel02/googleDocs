import {Model} from "sequelize";
import { Table,Column,DataType } from "sequelize-typescript";



@Table({tableName: 'user',underscored:true})
class User extends Model{
    @Column(DataType.STRING)
    email!:string

    @Column(DataType.STRING)
    password!:string

    @Column(DataType.BOOLEAN)
    isVerified!:boolean

    @Column(DataType.STRING)
    verificationToken!:string
}