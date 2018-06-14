var myUser = require('./users');


var pranav = myUser;
pranav.createUser("Mr.", "Pranav");
pranav.UserTransaction("deposit","saving", 5);
pranav.printUserReceipt();
