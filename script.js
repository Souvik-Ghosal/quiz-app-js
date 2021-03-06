const quizData = [{
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },

    {
        question: 'What is most used programming language in 2021?',
        a: 'java',
        b: 'c',
        c: 'python',
        d: 'js',
        correct: 'd'
    },

    {
        question: 'Who is the President of USA?',
        a: 'Donald Trump',
        b: 'Joe Biden',
        c: 'Ivan Saldano',
        d: 'Mithai Andrei',
        correct: 'b'
    },

    {
        question: 'What does html stamd for?',
        a: 'Hyper Text Markup Language',
        b: 'css',
        c: 'JSON',
        d: 'Hmmm Tmmm Mmmm Lmmmm',
        correct: 'a'
    },

    {
        question: 'Launch date of js?',
        a: '2020',
        b: '1995',
        c: '2015',
        d: '1994',
        correct: 'd'
    }

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}

function deselectAnswers() {

    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener('click', () => {

    //check to see the answer

    const answer = getSelected();

    console.log(answer);


    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML =
                `<h2>You answered correctly at ${score}/${quizData.length}   questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }

    }

});