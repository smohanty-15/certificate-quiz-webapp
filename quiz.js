const quizData = [
    { question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Multi Language"], answer: 1 },
    { question: "Which CSS property controls the text size?", options: ["font-style", "text-size", "font-size", "text-style"], answer: 2 },
    { question: "Inside which HTML element do we put the JavaScript?", options: ["<js>", "<javascript>", "<script>", "<scripting>"], answer: 2 },
    { question: "Which company developed JavaScript?", options: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"], answer: 0 },
    { question: "What does CSS stand for?", options: ["Creative Style System", "Computer Style Sheet", "Cascading Style Sheets", "Colorful Style Sheets"], answer: 2 },
    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], answer: 0 },
    { question: "How do you write 'Hello World' in an alert box?", options: ["msg('Hello World')", "alertBox('Hello World')", "msgBox('Hello World')", "alert('Hello World')"], answer: 3 },
    { question: "Which is the correct CSS syntax?", options: ["body:color=black;", "{body;color:black;}", "body {color: black;}", "{body:color=black;}"], answer: 2 },
    { question: "Which HTML attribute is used to define inline styles?", options: ["styles", "style", "class", "font"], answer: 1 },
    { question: "Which property is used to change background color?", options: ["color", "bgcolor", "background-color", "backgroundColor"], answer: 2 }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    let q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        let percentage = (score / quizData.length) * 100;
        if (percentage >= 80) {
            window.location.href = "certificate.html";
        } else {
            alert("You failed. Your score: " + percentage + "%. Try again!");
            window.location.href = "index.html";
        }
    }
}

loadQuestion();
