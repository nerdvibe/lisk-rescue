const lisk = require( "@liskhq/lisk-transactions/");

console.log('Copy the following code and paste it in broadcast.js \n\n')

console.log(lisk.transfer({
  recipientId: 'Receiver address',
  amount: 'Ammount', // 1 === to 0.00000001 LSK
  passphrase: 'Your passphrase',
}));

console.log('\n\n')
