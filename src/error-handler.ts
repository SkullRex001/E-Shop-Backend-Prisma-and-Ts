import { Request , Response , NextFunction } from "express";
import { ErrorCodes, HttpExcpetions } from "./exceptions/root";
import { InternalExceptions } from "./exceptions/internal-exceptions";

export const errorHandler = (method : Function)=>{
    return async (req : Request , res : Response , next : NextFunction) =>{
        try{
            await method(req , res , next)

        }

        catch(error : any){
            let exception : HttpExcpetions;
            if(error instanceof HttpExcpetions){
                exception = error
            }
            else {
                exception = new InternalExceptions('Something went Wrong!' , error , ErrorCodes.INTERNAL_EXCEPTION)
            }
            next(exception)
        }
    }
}