"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseError = void 0;
const custom_error_1 = require("./custom-error");
class DatabaseError extends custom_error_1.CustomError {
    constructor() {
        super('DB connection error');
        this.reason = 'Error connecting to database';
        this.statusCode = 500;
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
    serializeErrors() {
        return [{ message: this.reason }];
    }
}
exports.DatabaseError = DatabaseError;
