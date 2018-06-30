

var accounts =  {
			spending: 0,
			checking: 0,
			saving: 0
		}


module.exports = {



	deposit: function( account, money) {
		if (account == "spending")
		{
			accounts.spending += money;
		}
		else if (account == "checking")
		{
			accounts.checking += money;
		}
		else if (account == "saving")
		{
			accounts.saving += money;
		}
		else{
			return "error";
		}
	},

	withdraw: function(account, money) {
		
		if ((accounts.spending - money) >= 0 && account == "spending")
		{
			accounts.spending -= money;
		}
		else if ((accounts.checking - money) >= 0 && account == "checking")
		{
			accounts.checking -= money;
		}
		else if ((accounts.saving - money) >= 0 && account == "saving")
		{
			accounts.saving -= money;
		}
		else{
			return "error";
		}
	},

	printReceipt: function() {
		console.log("____________________");
		console.log("Spending: $" + accounts.spending);
		console.log("Checking: $" + accounts.checking);
		console.log("Saving: $" + accounts.saving);
		console.log("____________________");
	}

}