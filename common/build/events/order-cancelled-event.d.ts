import { Subjects } from "./subjects";
export interface OrderCancelled {
    subject: Subjects.OrderCancelled;
    data: {
        id: string;
        title: {
            id: string;
        };
    };
}
