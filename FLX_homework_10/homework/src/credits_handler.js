function userCard(index) {
	let key = index;
	let balance = 100;
	let transactionLimit = 100;
	let historyLogs = [];
	let max_key_value = 3;

	let historyRecorder = (type, summ, time) => {
		let record = {
			operationType: type,
			credits: summ,
			operationTime: time
		};
		historyLogs.push(record);

		return historyLogs;
	};

	let getCardOptions = function () {
		return {
			key,
			balance,
			transactionLimit,
			historyLogs
		}
	};

	let putCredits = (summ) => {
		balance += summ;
		historyRecorder('Credits,you have received', summ, new Date());
	};

	let takeCredits = (summ) => {
		if (summ <= balance && summ <= transactionLimit) {
			balance = balance - summ;
			historyRecorder('Credits withdrawal', summ, new Date());

			return true;
		} else {
			console.error(`Transaction limit: ${transactionLimit}, remaining balance: ${balance}`);

			return false;
		}
	};

	let setTransactionLimit = (summ) => {
		transactionLimit = summ;
		historyRecorder('Change of transaction limit', summ, new Date());
	};

	let transferCredits = (summ, who_gets) => {
		let percent = 100;
		let dis = 0.5;
		let include_tax = summ + summ * dis / percent;
		if (who_gets) {
			if (takeCredits(include_tax)) {
				who_gets.putCredits(summ);
			}
		}
	};

	if (index <= max_key_value && index >= 1) {
		return {
			getCardOptions,
			putCredits,
			takeCredits,
			setTransactionLimit,
			transferCredits
		}
	} else {
		console.error('Index you`ve entered is out of range'); //[1;3]
	}
}

class UserAccount {
	constructor(name) {
		this.cards = [];
		this.name = name;
		this.num = 3;
	}

	addCard() {
		if (this.cards.length < this.num) {
			this.cards.push(userCard(this.cards.length + 1))
		} else {
			console.error(`You have exceeded card limit ${this.num}`);
		}
	}

	getCardByKey(key) {
		if (key > this.num) {
			return `Card not found`
		} else {
			return this.cards[key - 1];
		}
	}
}
