import { ErrorCodes , HttpExcpetions } from "./root";

export class BadRequestExceptions extends HttpExcpetions {
    constructor(message : string , errorCode : ErrorCodes){
        super(message , errorCode , 400 , null)
    }
}