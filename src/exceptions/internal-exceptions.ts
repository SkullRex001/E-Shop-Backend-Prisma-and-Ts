import { ErrorCodes, HttpExcpetions } from "./root";

export class InternalExceptions extends HttpExcpetions {
    constructor(message: string , error : any , errorCode : ErrorCodes){
        super(message , errorCode , 500 , error)    
    }
}