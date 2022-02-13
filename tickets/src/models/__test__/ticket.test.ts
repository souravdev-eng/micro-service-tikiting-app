import { Ticket } from "../ticket";

it("implement optimistic concurrency control", async (next) => {
  const ticket = Ticket.build({
    title: "movie",
    price: 30,
    userId: "123",
  });

  await ticket.save();

  const firstInstance = await Ticket.findById(ticket.id);
  const scendInstance = await Ticket.findById(ticket.id);

  firstInstance!.set({ price: 10 });
  scendInstance!.set({ price: 15 });

  await firstInstance!.save();

  try {
    await scendInstance!.save();
  } catch (error) {
    return next();
  }

  throw new Error("Should not be reached to this point");
});

it("increments the version number on multiple saves", async () => {
  const ticket = Ticket.build({
    title: "concert",
    price: 20,
    userId: "123",
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
