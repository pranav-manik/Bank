var myAccount = require('./accounts');

//var newAccount = myAccount();

var users = [];

function User(surname, name){
	this.name = name;
	this.surname = surname;
	this.accounts =  {
			spending: 0,
			checking: 0,
			saving: 0
		};
	this.deposit =  function( account, money) {
		if (account == "spending")
		{
			this.accounts.spending += money;
		}
		else if (account == "checking")
		{
			this.accounts.checking += money;
		}
		else if (account == "saving")
		{
			this.accounts.saving += money;
		}
		else{
			return "error";
		}
	},

	this.withdraw = function(account, money) {
		
		if ((this.accounts.spending - money) >= 0 && account == "spending")
		{
			this.accounts.spending -= money;
		}
		else if ((this.accounts.checking - money) >= 0 && account == "checking")
		{
			this.accounts.checking -= money;
		}
		else if ((accounts.saving - money) >= 0 && account == "saving")
		{
			this.accounts.saving -= money;
		}
		else{
			return "error";
		}
	},
	this.printReceipt = function() {
		console.log( this.surname + " " + this.name);
		console.log("Spending: $" + accounts.spending);
		console.log("Checking: $" + accounts.checking);
		console.log("Saving: $" + accounts.saving);
		console.log("____________________");
	}

}

module.exports = {
	//User functions
	createUser: function(surname, name) {
		var myUser = new User(surname, name);
		users.push(myUser);
	},

	UserTransaction: function(choice, account, money) {
		if (choice == "deposit")
		{
			myAccount.deposit(account,money);
		}
		else if (choice == "withdraw")
		{
			myAccount.withdraw(account,money);
		}
	},

	printUserReceipt: function() {
		//console.log(name);
		myAccount.printReceipt();
	}
}