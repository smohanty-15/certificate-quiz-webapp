const quizData = [
  {
    question: "When is Indian Independence Day celebrated?",
    options: ["January 26th", "October 2nd", "August 15th", "December 31st"],
    answer: 2
  },
  {
    question: "From which country did India gain independence?",
    options: ["France", "Germany", "Great Britain", "Portugal"],
    answer: 2
  },
  {
    question: "Who was the first Prime Minister of independent India?",
    options: ["Mahatma Gandhi", "Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Dr. B.R. Ambedkar"],
    answer: 2
  },
  {
    question: "What are the colors of the Indian National Flag?",
    options: ["Red, White, and Blue", "Green, Yellow, and Red", "Saffron, White, and Green", "Blue, White, and Red"],
    answer: 2
  },
  {
    question: "What is the national anthem of India?",
    options: ["Vande Mataram", "Sare Jahan Se Acha", "Ae Mere Watan Ke Logo", "Jana Gana Mana"],
    answer: 3
  },
  {
    question: "Who is credited with designing the Indian National Flag?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Pingali Venkayya", "Rabindranath Tagore"],
    answer: 2
  },
  {
    question: "What is the name of the symbol at the center of the Indian National Flag?",
    options: ["Charkha (Spinning Wheel)", "Lotus", "Ashoka Chakra", "Sun"],
    answer: 2
  },
  {
    question: "What does the Ashoka Chakra on the Indian flag symbolize?",
    options: ["Wealth and prosperity", "Unity and strength", "The wheel of the law of Dharma", "Peace and harmony"],
    answer: 2
  },
  {
    question: "What major movement initiated by Mahatma Gandhi in 1942 was a significant step towards India's independence?",
    options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
    answer: 2
  },
  {
    question: "Which British Parliament act formally granted India its independence?",
    options: ["Government of India Act 1935", "Rowlatt Act", "Indian Independence Act 1947", "Charter Act of 1833"],
    answer: 2
  }
];

// Shuffle and pick 5 random questions
function getRandomQuestions(arr, num) {
    let shuffled = arr.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, num);
}

const selectedQuestions = getRandomQuestions(quizData, 5);
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    let q = selectedQuestions[currentQuestion];
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
    if (selected === selectedQuestions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
        loadQuestion();
    } else {
        let percentage = (score / selectedQuestions.length) * 100;
        if (percentage >= 80) {
            window.location.href = "certificate.html";
        } else {
            alert("You failed. Your score: " + percentage + "%. Try again!");
            window.location.href = "index.html";
        }
    }
}

loadQuestion();


