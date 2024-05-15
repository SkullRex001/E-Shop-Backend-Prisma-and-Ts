import { NextFunction, Request , Response } from "express";
import { Client } from "..";
import {hashSync , compareSync} from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { JWT } from "../secrets";
import { BadRequestExceptions } from "../exceptions/bad-request";
import { ErrorCodes } from "../exceptions/root";
import { signUpSchema } from "../schema/users";


//login
export const login = async (req : Request , res :Response)=>{
    const {email , password} = req.body;

    let user = await Client.user.findFirst({where : {email}})

    if(!user) throw Error("Either email or password is incorrect")

    if(!compareSync(String(password) ,user.password)) throw Error("Either email or password is incorrect")

     const token = jwt.sign({
        userId: user.id
     } , JWT )   
    

     res.json({
        user  , jwt : token
     })

}

//Signup


export const signup = async (req : Request , res :Response , next : NextFunction)=>{
     

    signUpSchema.parse(req.body)
     
    const {email , password , name } = req.body;

    let user = await Client.user.findFirst({where : {email}})

    if(user) {next(new BadRequestExceptions('User already exists' , ErrorCodes.USER_ALREADY_EXISTS));
        return;
    }

     user = await Client.user.create({
        data : {
            name ,
            email,
            password : hashSync(String(password) , 10)
        }
     }) 
     res.json(user)
}