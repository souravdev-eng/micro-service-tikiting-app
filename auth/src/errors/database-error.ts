import { CustomError } from './custom-error';

export class DatabaseError extends CustomError {
  reason = 'Error connecting to database';
  statusCode = 500;

  constructor() {
    super('DB connection error');
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
  serializeErrors() {
    return [{ message: this.reason }];
  }
}
