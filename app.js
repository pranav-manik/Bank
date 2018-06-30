var User = require('./users');

var myUser = User;
myUser.createUser("Mr.", "Pranav");
myUser.UserTransaction("deposit","saving", 5);
myUser.UserTransaction("deposit","checking", 10);
myUser.UserTransaction("deposit", "spending", 14);
myUser.UserTransaction("withdraw", "spending", 2);


myUser.printUserReceipt();
