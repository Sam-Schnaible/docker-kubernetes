const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379 // this is default port, not necessary to specify
});
client.set('visits', 0);

app.get('/', (req, res) => {
  process.exit(0); //status code 0 means we exited and everything is OK
  client.get('visits', (err, visits) => {
    res.send(`Number of visits is ${visits}`);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on 8081');
});