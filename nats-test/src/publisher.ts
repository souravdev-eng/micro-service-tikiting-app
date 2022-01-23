import nats from 'node-nats-streaming';

console.clear();
//. Creating client
const stan = nats.connect('ticketing', 'abc', {
  url: 'https://localhost:4222',
});

//. After creating client we listening for connect event
stan.on('connect', () => {
  console.log('Publisher connecting to NATS');

  //! NOTE:- In Nats publisher we only share RAW data or string
  //. So we first covering JSON into string
  const data = JSON.stringify({ id: '1234', title: 'Match', price: 10 });

  //. NOTE:- When we publish our data we first create a "publisher chanel or name" and then the "DATA"
  stan.publish('ticket:created', data, () => {
    console.log('Published Event!');
  });
});
