// Tee Token ja kodeeri md5 abil
var msg = {
  amount: '10.00',
  description: 'Payment',
  from_account: '123abc',
  secret: 'neljap2evonkalap2ev',
  timestamp: '2018-11-29 10:30:33',
  to_account: '000DDD'
};

string = '10.00Payment123abcneljap2evonkalap2ev2018-11-29 10:30:33000DDD';

// npm install md5
var md5 = require('md5');
console.log(md5(string));
