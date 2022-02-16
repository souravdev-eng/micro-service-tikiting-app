import { Subjects, Publisher, PaymentCreatedEvent } from "@micro-tick/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
