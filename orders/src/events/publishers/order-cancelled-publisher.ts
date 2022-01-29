import { Subjects, Publisher, OrderCancelledEvent } from "@micro-tick/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
