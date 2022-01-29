import { Publisher, OrderCreatedEvent, Subjects } from "@micro-tick/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
