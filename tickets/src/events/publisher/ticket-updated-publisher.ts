import { Publisher, Subjects, TicketUpdatedEvent } from "@micro-tick/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
