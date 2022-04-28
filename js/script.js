const quizData = [
    {
        question: "De onde é a invenção do chuveiro elétrico?",
        a: "Brasil",
        b: "França",
        c: "Austrália",
        d: "Inglaterra",
        correct: "a",
    },
    {
        question: "De quem é a famosa frase “Penso, logo existo?",
        a: "Platão",
        b: "Galileu Galilei",
        c: "Sócrates",
        d: "Descartes",
        correct: "d",
    },
    {
        question: "Quais o menor e o maior país do mundo?",
        a: "São Marino e Índia",
        b: "Nauru e China",
        c: "Vaticano e Rússia",
        d: "Mônaco e Canadá",
        correct: "c",
    },
    {
        question: "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
        a: "Austrália e Afeganistão",
        b: "Japão e Serra Leoa",
        c: "Brasil e Congo",
        d: "Estados Unidos e Angola",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})