const APIClient = require('@liskhq/lisk-api-client');
const client = new APIClient.APIClient(['https://node01.lisk.io:443', 'https://node02.lisk.io:443']);

client.transactions.broadcast(
  // Paste here the object generated from generate.js
)
  .then(res => {
    console.log(res.data);
  })

