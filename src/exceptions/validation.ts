import { HttpExcpetions , ErrorCodes } from "./root";

export class UnprocessableEntry extends HttpExcpetions {
    constructor(error : any , message : string , errorCode : ErrorCodes){
        super(message , errorCode , 422 , error )
    }
}