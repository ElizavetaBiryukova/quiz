const questions = [{
		question: "Какой язык работает в браузере?",
		answers: ["Java", "C", "Python", "JavaScript"],
		correct: 4,
	},
	{
		question: "Что означает CSS?",
		answers: [
			"Central Style Sheets",
			"Cascading Style Sheets",
			"Cascading Simple Sheets",
			"Cars SUVs Sailboats",
		],
		correct: 2,
	},
	{
		question: "Что означает HTML?",
		answers: [
			"Hypertext Markup Language",
			"Hypertext Markdown Language",
			"Hyperloop Machine Language",
			"Helicopters Terminals Motorboats Lamborginis",
		],
		correct: 1,
	},
	{
		question: "В каком году был создан JavaScript?",
		answers: ["1996", "1995", "1994", "все ответы неверные"],
		correct: 2,
	},
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0; //кол-во правильных ответов
let questiensIndex = 0; //текущий вопрос


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
	const questionItem = questions[questiensIndex].question;

	const headerTemplate = `<h2 class="title">${questionItem}</h2>`;
	headerContainer.innerHTML = headerTemplate;

	const answersArr = questions[questiensIndex].answers;

	const answerItem = answersArr.forEach((answersText) => {
			const answersTemplate = `<li>
	<label>
	<input type="radio" class="answer" name="answer" />
			<span>${answersText}</span>
	</label>
	</li>`;
			listContainer.innerHTML += answersTemplate;
		}

	);
}

function checkAnswer(){
	console.log('checkAnswer started');
}