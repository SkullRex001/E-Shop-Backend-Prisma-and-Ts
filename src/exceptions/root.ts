export class HttpExcpetions extends Error {
    message: string;
    errorCode :ErrorCodes;
    statusCode : number;
    errors:any;

    constructor(message:string , errorCode:ErrorCodes , statusCode : number , errors:any){
        super(message)
        this.message = message
        this.errorCode = errorCode
        this.statusCode = statusCode
        this.errors = errors
    }

}

export enum ErrorCodes {
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXISTS = 1002,
    INCORRECT_PASSOWRD = 1003,
    UNPROCESSABLE_ENTRY = 2001,
    INTERNAL_EXCEPTION = 3001
}