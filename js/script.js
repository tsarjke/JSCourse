'use strict';



// 2) Создание переменных, спрашивающих бюджет и время
const money = +prompt("Ваш бюджет на месяц?", ""),
	time = +prompt("Введите дату в формате YYYY-MM-DD", "");

// 3) Объект c необходимыми данным
const appData = {
	budget: money,
	timeData: time,
	expenes: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

// 4) Вопросы пользовтелю по 2 раза и запись ответов в объект
for (let i = 0; i < 2; i++) {
	let firstQs = prompt("Введите обязательную статью расходов в этом месяце", ""),
		secondtQs = +prompt("Во сколько обойдется?", "");
	if (firstQs != "" && typeof (firstQs) == 'string' && firstQs != null &&
		firstQs.length < 50 && secondtQs != null && !isNaN(secondtQs)) {
		appData.expenes[firstQs] = secondtQs;
	} else {
		i--;
	}
}

// 5) Вывод бюджета на день
appData.moneyPerDay = (appData.budget / 30).toFixed();
alert(`Бюджет на месяц - ${appData.moneyPerDay}`);

// 6) Вывод полученного объекта в консоль для проверки
console.log(appData);