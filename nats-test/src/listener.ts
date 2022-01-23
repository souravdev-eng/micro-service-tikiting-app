import { randomBytes } from 'crypto';
import nats, { Message } from 'node-nats-streaming';
console.clear();

//. NATS client are not listing multiple connection with same client ID
const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Listener connected!');

  stan.on('close', () => {
    console.log('NATS connection closed!');
    process.exit();
  });

  //! NOTE:- When we listen some chanel
  //. 1) we first create a "subscription and pass the chanel name"

  const options = stan
    .subscriptionOptions()
    .setManualAckMode(true)
    .setDeliverAllAvailable()
    .setDurableName('order-service');

  /*
   *setManualAckMode --> In this method we manually acknowledge event and conform it
   */

  //* "orders-queue-group" --> this is a Que group name. This assure if we have same listener with same client ID it send data only one service each time. ( If event no. 1 send to client "A" it not also publish same event on client "B")
  const subscription = stan.subscribe(
    'ticket:created',
    'orders-queue-group',
    options,
  );

  //. 2) After creating subscription we listen a very particular event and create a callback function

  subscription.on('message', (msg: Message) => {
    const data = msg.getData();

    if (typeof data === 'string') {
      console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
    }

    //* msg.ack()--> This mean we acknowledge this event OR conform that we received this event
    msg.ack();
  });
});

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());
