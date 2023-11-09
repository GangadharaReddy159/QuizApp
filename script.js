const quizData = [
  {
    question: "What is the national bird of India?",
    a: "Pegion",
    b: "Peacock",
    c: "Crow",
    d: "Parrot",
    correct: "b",
  },
  {
    question: "Who is the current Prime Minister of India?",
    a: "Manmohan Singh",
    b: "Rahul Gandhi",
    c: "Narendra Modi",
    d: "none of the above",
    correct: "c",
  },
  {
    question: "What is the most played game in India?",
    a: "Badminton",
    b: "Tennis",
    c: "Cricket",
    d: "Basket Ball",
    correct: "c",
  },
  {
    question: "Who is the Missile Man of India?",
    a: "Sardar Vallabhai Patel",
    b: "Gandhi",
    c: "Nehru",
    d: "Abdul Kalam",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
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
      //TODO: Show results
      quiz.innerHTML = `<h2>You answered correctly to ${score}/${quizData.length} questions.</h2><button onClick="location.reload()">Reload</button><style>h2 {
      padding:1rem;text-align:center;}</style>`;
      // alert(`You have finished the quiz and secured ${score} points`);
      // currentQuiz = 0;
      // loadQuiz();
    }
  }
});
