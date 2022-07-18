const questions = [{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 3,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 1,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 0,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 1,
	},
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0; //кол-во правильных ответов
let questionsIndex = 0; //текущий вопрос


clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

//отчистка html разметки
function clearPage() {
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}

//текущий вопрос
function showQuestion() {
	const questionItem = questions[questionsIndex].question;

	const headerTemplate = `<h2 class="title">${questionItem}</h2>`;
	headerContainer.innerHTML = headerTemplate;

	let answersArr = questions[questionsIndex].answers;

	answersArr.forEach((answersText, i) => {
			const answersTemplate = `<li>
	<label>
	<input value="${i}" type="radio" class="answer" name="answer" />
			<span>${answersText}</span>
	</label>
	</li>`;
			listContainer.innerHTML += answersTemplate;
		}

	);
}

function checkAnswer() {
	//находим выбранную радио кнопку
	const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

	//если ответ не выбран, выходим из функции
	if (!checkedRadio) {
		submitBtn.blur();
		return;
	}

	//номер ответа пользователя
	const userAnswer = parseInt(checkedRadio.value);

	//если ответ выбран, уыеличиваем счет
	if (userAnswer == questions[questionsIndex].correct) {
		score++;
	}

	//был ли вопрос последним
	if (questionsIndex !== questions.length - 1) {
		questionsIndex++;
		clearPage();
		showQuestion();

	} else {
		clearPage();
		showResults();
	}
}

function showResults() {
	let title, message;

	//Варианты заголовков и текста
	if (score === questions.length) {
		title = "Поздравляем!";
		message = "Вы ответили верно на все вопросы!";
	} else if ((score * 100) / questions.length - 1 >= 50) {
		title = "Неплохой результат!";
		message = "Вы дали более половины правильных ответов";
	} else {
		title = "Стоит постараться(";
		message = "У вас меньше половины правильных ответов";

	}

	let result = `${score} Из ${questions.length}`;

	const resultsTemplate = `
	    <h2 class="title">${title}</h2>
	    <h3 class="summary">${message}</h3>
	    <p class="result">${result}</p>
	`;

	headerContainer.innerHTML = resultsTemplate;

	//Меняем кнопку на "Играть снова"
	submitBtn.blur();
	submitBtn.innerText = 'Начать снова';
	submitBtn.onclick = () => (
		history.go()
		);
}