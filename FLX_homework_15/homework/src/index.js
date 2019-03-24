	let one = 1;
	let startTime = null,
		endTime;
	let thousand = 1000;
	let end = new Date();

	function Company(Company_Obj) {
		if (typeof Company_Obj.name !== 'string' ||
			typeof Company_Obj.owner !== 'string' || typeof Company_Obj.maxCompanySize !== 'number') {
			return `Invalid data input in Company`;
		}
		this.name = Company_Obj.name;
		this.owner = Company_Obj.owner;
		this.maxCompanySize = Company_Obj.maxCompanySize;
		let historyLog = [];
		let _ListOfEmployees = [];
		let total_sal = 0;
		let average_sal = 0;
		let total_age = 0;
		let average_age = 0;
		let final = new Date();
		let start = new Date();
		let date = new Date();
		let _history_log = [];
		this.addNewEmployee = function (worker) {
			_ListOfEmployees.push(worker);
			_history_log.push(`${worker.name} is hired to ${this.name} in ${date};`);
			worker.hire();
			startTime=new Date();
		}
		this.getHistory = function () {
			return _history_log;
		}
		this.removeEmployee = function (num) {
			_history_log.push(`${_ListOfEmployees[num].name} was fired from ${this.name} in ${date}`);
			endTime = new Date();
			_ListOfEmployees[num].fire();
			return _ListOfEmployees.splice(num, one);
		}
		this.getEmployees = function () {
			return _ListOfEmployees;
		}
		this.getAverageSalary = function () {
			for (let i = 0; i < _ListOfEmployees.length; i++) {
				total_sal += _ListOfEmployees[i].getSalary();
			}
			average_sal = total_sal / _ListOfEmployees.length;
			return average_sal;
		}
		this.getAverageAge = function () {
			for (let i = 0; i < _ListOfEmployees.length; i++) {
				total_age += _ListOfEmployees[i].age;
			}
			average_age = total_age / _ListOfEmployees.length;
			return average_age;
		}
		this.getFormattedListOfEmployees = function () {

			for (let i = 0; i < _ListOfEmployees.length; i++) {
     console.log(`${_ListOfEmployees[i].name} works in ${this.name} ${Math.round((startTime-final)/thousand)} seconds`);
			}
		}
	}

	function Employee(Employee_Obj) {
		if (typeof Employee_Obj.name !== 'string' ||
			typeof Employee_Obj.primarySkill !== 'string' || typeof Employee_Obj.age !== 'number' ||
			typeof Employee_Obj.salary !== 'number') {
			return `Invalid data input in Employee`;
		}
		this.name = Employee_Obj.name;
		this.hireTime = null;
		this.fireTime = null;
		this.now = new Date();
		let _history = [];
		this.currentCompany = null;
		this.primarySkill = Employee_Obj.primarySkill;
		this.age = Employee_Obj.age;
		this.salary = Employee_Obj.salary;
		let _companyName = Company.name;
		this.setSalary = function (amount) {
			_history.push(`Attempt to change salary from ${this.salary} to ${amount}`);
			if (amount > this.salary) {
				this.salary = amount;
			} else {
				return `Actual salary is higher than the one you want to set`;
			}
		}
		this.getHistory = function () {
			return _history;
		}
		this.getSalary = function () {
			return this.salary;
		}
		this.getWorkTimeInSeconds = function () {
			return `${this.name} worked in Epam for ${Math.round((startTime-end)/thousand)} seconds;`;
		}
		this.hire = function (company_title) {
			if (this.currentCompany === null) {
				this.currentCompany = Company.name;
				this.hireTime = new Date();
				_history.push(`${this.name} is hired to ${this.currentCompany} in ${this.hireTime}.`);
			} else {
				console.log('Worker should be fired before hiring');
			}
		};

		this.fire = function () {
			this.fireTime = new Date();
			_history.push(`${this.name} is fired from ${this.currentCompany} in ${this.now}.`);
			this.currentCompany = null;
		};
	}

	let epam = new Company({
		name: 'Epam',
		owner: 'Arkadii',
		maxCompanySize: 5
	});

	const artem = new Employee({
		name: 'Artem',
		age: 15,
		salary: 1000,
		primarySkill: 'UX'
	});
	const vova = new Employee({
		name: 'Vova',
		age: 16,
		salary: 400,
		primarySkill: 'BE'
	});
	const vasyl = new Employee({
		name: 'Vasyl',
		age: 25,
		salary: 300,
		primarySkill: 'FE'
	});
	const ivan = new Employee({
		name: 'Ivan',
		age: 35,
		salary: 5000,
		primarySkill: 'FE'
	});
	//Enter commands in console one after another to test a program;

	/*epam.addNewEmployee(artem);
	epam.addNewEmployee(vova);
	epam.addNewEmployee(ivan);
	artem.setSalary(1500);
	console.log(artem.getHistory());
	console.log(artem.getSalary());
	console.log(epam.getEmployees());
	console.log(epam.getAverageSalary());
	console.log(epam.getAverageAge());
	console.log(epam.getHistory());
	epam.addNewEmployee(vasyl);
	console.log(vasyl.getWorkTimeInSeconds());
	console.log(vasyl.getHistory());
	epam.removeEmployee(3);
	vasyl.getWorkTimeInSeconds();
	epam.getFormattedListOfEmployees();*/
