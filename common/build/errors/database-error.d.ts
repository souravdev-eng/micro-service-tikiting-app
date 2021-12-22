import { CustomError } from './custom-error';
export declare class DatabaseError extends CustomError {
    reason: string;
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
