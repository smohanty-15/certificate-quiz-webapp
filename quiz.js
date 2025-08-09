const quizData = [
  {
    question: "When is Independence Day celebrated in India?",
    options: ["15th August", "26th January", "2nd October", "1st May"],
    answer: 0
  },
  {
    question: "Who was the first Prime Minister of independent India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"],
    answer: 1
  },
  {
    question: "Which country ruled India before independence in 1947?",
    options: ["France", "Portugal", "Britain", "Netherlands"],
    answer: 2
  },
  {
    question: "Who is known as the 'Father of the Nation' in India?",
    options: ["Jawaharlal Nehru", "Bhagat Singh", "Mahatma Gandhi", "Bal Gangadhar Tilak"],
    answer: 2
  },
  {
    question: "In which year did India gain independence?",
    options: ["1945", "1946", "1947", "1950"],
    answer: 2
  },
  {
    question: "What was the name of the movement started by Mahatma Gandhi to stop British rule?",
    options: ["Quit India Movement", "Salt Satyagraha", "Non-Cooperation Movement", "All of these"],
    answer: 3
  },
  {
    question: "Where was the Indian National Flag first hoisted on Independence Day?",
    options: ["Red Fort", "India Gate", "Raj Ghat", "Parliament House"],
    answer: 0
  },
  {
    question: "Who gave the famous speech 'Tryst with Destiny' on India's independence?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Dr. Rajendra Prasad", "Sardar Patel"],
    answer: 0
  },
  {
    question: "What is the color order of the Indian National Flag from top to bottom?",
    options: ["Saffron, White, Green", "Green, White, Saffron", "White, Saffron, Green", "Saffron, Green, White"],
    answer: 0
  },
  {
    question: "What is the Ashoka Chakra on the Indian flag?",
    options: ["A star", "A wheel", "A flower", "A bird"],
    answer: 1
  },
  {
    question: "Which movement did Mahatma Gandhi start in 1930 to protest the salt tax?",
    options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
    answer: 1
  },
  {
    question: "Who was the first President of independent India?",
    options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Patel", "Mahatma Gandhi"],
    answer: 1
  },
  {
    question: "Which Indian freedom fighter gave the slogan 'Jai Hind'?",
    options: ["Subhas Chandra Bose", "Bhagat Singh", "Bal Gangadhar Tilak", "Mahatma Gandhi"],
    answer: 0
  },
  {
    question: "Which is the national anthem of India?",
    options: ["Vande Mataram", "Jana Gana Mana", "Saare Jahan Se Achha", "Sare Jahan"],
    answer: 1
  },
  {
    question: "Who wrote the national anthem 'Jana Gana Mana'?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Allama Iqbal", "Sarojini Naidu"],
    answer: 0
  },
  {
    question: "Which movement was launched by Gandhi in 1942 asking the British to leave India?",
    options: ["Quit India Movement", "Civil Disobedience Movement", "Non-Cooperation Movement", "Swadeshi Movement"],
    answer: 0
  },
  {
    question: "What does the Saffron color in the Indian flag represent?",
    options: ["Peace and truth", "Courage and sacrifice", "Fertility and growth", "None of these"],
    answer: 1
  },
  {
    question: "What does the green color in the Indian flag signify?",
    options: ["Courage", "Growth and fertility", "Peace", "Faith and chivalry"],
    answer: 1
  },
  {
    question: "Who was called 'Netaji' during India's freedom struggle?",
    options: ["Bhagat Singh", "Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru"],
    answer: 1
  },
  {
    question: "Which leader is famous for the Dandi March?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Bal Gangadhar Tilak", "Sardar Patel"],
    answer: 1
  },
  {
    question: "Which year did the Quit India Movement start?",
    options: ["1940", "1942", "1930", "1919"],
    answer: 1
  },
  {
    question: "Who was the British Viceroy when India got independence?",
    options: ["Lord Curzon", "Lord Mountbatten", "Lord Wavell", "Lord Dalhousie"],
    answer: 1
  },
  {
    question: "Which Indian leader gave the slogan 'Do or Die'?",
    options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
    answer: 1
  },
  {
    question: "Who was known as 'Iron Man of India'?",
    options: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose"],
    answer: 0
  },
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Kolkata", "Chennai", "New Delhi"],
    answer: 3
  },
  {
    question: "Who was the first Deputy Prime Minister of India?",
    options: ["Sardar Patel", "Jawaharlal Nehru", "Vallabhbhai Patel", "Rajendra Prasad"],
    answer: 0
  },
  {
    question: "Which Indian leader called the British 'Britishers' and led the Salt March?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Bal Gangadhar Tilak", "Lala Lajpat Rai"],
    answer: 0
  },
  {
    question: "Who was the leader of the Indian National Army (INA)?",
    options: ["Bhagat Singh", "Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru"],
    answer: 1
  },
  {
    question: "What is celebrated on 2nd October in India?",
    options: ["Independence Day", "Republic Day", "Gandhi Jayanti", "Children's Day"],
    answer: 2
  }
];

// Shuffle and pick 10 random questions
function getRandomQuestions(arr, num) {
    let shuffled = arr.slice().sort(() => Math.random() - 0.10);
    return shuffled.slice(0, num);
}

const selectedQuestions = getRandomQuestions(quizData, 10);
let currentQuestion = 0;
let score = 0;
let userAnswers = []; // Store user's answers

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
    userAnswers.push(selected); // Save user's answer
    if (selected === selectedQuestions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    let percentage = Math.round((score / selectedQuestions.length) * 100);
    if (percentage >= 80) {
        localStorage.setItem('quizPercentage', percentage);
        window.location.href = "certificate.html";
    } else {
        showReview(percentage);
    }
}

function showReview(percentage) {
    let reviewHtml = `<h2>Quiz Review</h2>
        <p>Your score: ${score}/${selectedQuestions.length} (${percentage}%)</p>`;
    selectedQuestions.forEach((q, i) => {
        const userAnswer = userAnswers[i] !== undefined ? q.options[userAnswers[i]] : "No answer";
        const correctAnswer = q.options[q.answer];
        reviewHtml += `
            <div>
                <strong>Q${i + 1}: ${q.question}</strong><br>
                Your answer: <span style="color:${userAnswer === correctAnswer ? 'green' : 'red'}">${userAnswer}</span><br>
                Correct answer: <span style="color:green">${correctAnswer}</span>
            </div>
            <hr>
        `;
    });
    document.body.innerHTML = reviewHtml;
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Try Again";
    restartBtn.onclick = () => window.location.href = "index.html";
    document.body.appendChild(restartBtn);
}

loadQuestion();


