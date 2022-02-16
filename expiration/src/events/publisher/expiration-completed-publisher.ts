import {
  ExpirationCompletedEvent,
  Publisher,
  Subjects,
} from "@micro-tick/common";

export class ExpirationCompletedPublisher extends Publisher<ExpirationCompletedEvent> {
  subject: Subjects.ExpirationCompleted = Subjects.ExpirationCompleted;
}
