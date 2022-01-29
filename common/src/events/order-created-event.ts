import { OrderStatus } from "./types/order-status";
import { Subjects } from "./subjects";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    version: number;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
