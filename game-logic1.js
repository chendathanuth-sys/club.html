// Get references to HTML elements
const questionText = document.getElementById('question-text');
const questionImg = document.getElementById('question-img');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreText = document.getElementById('score-text');
const progressText = document.getElementById('progress-text');

let currentQuestionIndex = 0;
let score = 0;

// =========================================
// THIS IS WHERE YOU ADD YOUR QUESTIONS
// =========================================
const questions = [
    {
        // Question 1: Simple text question
        question: 'What is 5 + 7?',
        // Path to image, or leave empty string "" if no image
        imageSrc: "", 
        answers: [
            { text: '10', correct: false },
            { text: '12', correct: true },
            { text: '15', correct: false },
            { text: '8', correct: false }
        ]
    },
    // --- Integers ---
    {
        question: 'Calculate: 5 + (-8)',
        imageSrc: "",
        answers: [
            { text: '3', correct: false },
            { text: '-3', correct: true },
            { text: '13', correct: false },
            { text: '-13', correct: false }
        ]
    },
    {
        question: 'Calculate: (-6) × (-4)',
        imageSrc: "",
        answers: [
            { text: '-24', correct: false },
            { text: '10', correct: false },
            { text: '24', correct: true },
            { text: '-10', correct: false }
        ]
    },
    {
        question: 'Calculate: (-20) ÷ 5',
        imageSrc: "",
        answers: [
            { text: '-4', correct: true },
            { text: '4', correct: false },
            { text: '-5', correct: false },
            { text: '100', correct: false }
        ]
    },
    {
        question: 'Calculate: 12 - (-5)',
        imageSrc: "",
        answers: [
            { text: '7', correct: false },
            { text: '17', correct: true },
            { text: '-7', correct: false },
            { text: '-17', correct: false }
        ]
    },
    {
        question: 'Calculate: -9 + (-6)',
        imageSrc: "",
        answers: [
            { text: '-3', correct: false },
            { text: '-15', correct: true },
            { text: '15', correct: false },
            { text: '3', correct: false }
        ]
    },
    
    // --- One-Step Equations ---
    {
        question: 'Solve for x: x - 7 = 10',
        imageSrc: "",
        answers: [
            { text: '3', correct: false },
            { text: '-3', correct: false },
            { text: '17', correct: true },
            { text: '70', correct: false }
        ]
    },
    {
        question: 'Solve for m: 3m = 15',
        imageSrc: "",
        answers: [
            { text: '5', correct: true },
            { text: '45', correct: false },
            { text: '12', correct: false },
            { text: '3', correct: false }
        ]
    },
    {
        question: 'Solve for y: y + 8 = 2',
        imageSrc: "",
        answers: [
            { text: '10', correct: false },
            { text: '6', correct: false },
            { text: '-6', correct: true },
            { text: '-10', correct: false }
        ]
    },
    {
        question: 'Solve for k: k / 2 = 10',
        imageSrc: "",
        answers: [
            { text: '5', correct: false },
            { text: '12', correct: false },
            { text: '20', correct: true },
            { text: '8', correct: false }
        ]
    },
    {
        question: 'Solve for x: 5 + x = 20',
        imageSrc: "",
        answers: [
            { text: '25', correct: false },
            { text: '15', correct: true },
            { text: '4', correct: false },
            { text: '100', correct: false }
        ]
    },

    // --- Two-Step Equations ---
    {
        question: 'Solve for x: 2x + 1 = 9',
        imageSrc: "",
        answers: [
            { text: '5', correct: false },
            { text: '4', correct: true },
            { text: '8', correct: false },
            { text: '3', correct: false }
        ]
    },
    {
        question: 'Solve for n: 3n - 5 = 16',
        imageSrc: "",
        answers: [
            { text: '7', correct: true },
            { text: '5', correct: false },
            { text: '21', correct: false },
            { text: '11', correct: false }
        ]
    },
    {
        question: 'Solve for a: -4a = 20',
        imageSrc: "",
        answers: [
            { text: '5', correct: false },
            { text: '-5', correct: true },
            { text: '24', correct: false },
            { text: '-16', correct: false }
        ]
    },
    {
        question: 'Solve: 10 - x = 4',
        imageSrc: "",
        answers: [
            { text: '14', correct: false },
            { text: '6', correct: true },
            { text: '-6', correct: false },
            { text: '-14', correct: false }
        ]
    },
    {
        question: 'Solve for x: x/3 + 2 = 5',
        imageSrc: "",
        answers: [
            { text: '1', correct: false },
            { text: '9', correct: true },
            { text: '7', correct: false },
            { text: '21', correct: false }
        ]
    },
    
    // --- Mixed Review ---
    {
        question: 'What is the opposite of -15?',
        imageSrc: "",
        answers: [
            { text: '-15', correct: false },
            { text: '15', correct: true },
            { text: '0', correct: false },
            { text: '1.5', correct: false }
        ]
    },
    {
        question: 'Simplify: 4x + 3x',
        imageSrc: "",
        answers: [
            { text: '7x', correct: true },
            { text: '12x', correct: false },
            { text: 'x', correct: false },
            { text: '7x²', correct: false }
        ]
    },
    {
        question: 'Solve: -2x = -10',
        imageSrc: "",
        answers: [
            { text: '-5', correct: false },
            { text: '5', correct: true },
            { text: '8', correct: false },
            { text: '-12', correct: false }
        ]
    },
    {
        question: 'Evaluate 3x when x = 4',
        imageSrc: "",
        answers: [
            { text: '7', correct: false },
            { text: '12', correct: true },
            { text: '34', correct: false },
            { text: '1', correct: false }
        ]
    },
    {
        question: 'Solve for x: 6 = x - 2',
        imageSrc: "",
        answers: [
            { text: '4', correct: false },
            { text: '8', correct: true },
            { text: '-4', correct: false },
            { text: '-8', correct: false }
        ]
    }
    // Add more questions here following the same structure...
];


// ================= Game Functions =================

// Start the game immediately when page loads
startGame();

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(questionData) {
    // 1. Update progress and score text
    
    // 2. Set the question text
    questionText.innerText = questionData.question;

    // 3. Handle the optional image
    if(questionData.imageSrc !== "") {
        questionImg.src = questionData.imageSrc;
        questionImg.classList.remove('hidden');
    } else {
        // Hide image tag if no image for this question
        questionImg.classList.add('hidden');
    }

    // 4. Clear old answer buttons
    answerButtonsElement.innerHTML = '';

    // 5. Create new answer buttons
    questionData.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        
        // We store if it's correct directly on the button element
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // Give visual feedback immediately
    if(isCorrect) {
        selectedButton.classList.add('correct');
        score += 10; // Add points
        
    } else {
        selectedButton.classList.add('wrong');
        // Optional: highlight the correct one so they learn
        Array.from(answerButtonsElement.children).forEach(button => {
             if(button.dataset.correct === "true") {
                 button.classList.add('correct');
             }
        });
    }

    // Disable all buttons so they can't click again
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
    
    // Wait 2 seconds, then go to next question
    setTimeout(() => {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length) {
          showQuestion(questions[currentQuestionIndex]);
        } else {
            // Game Over - For now, just alert. You'd usually show a results screen.
            alert("Quiz Finished! Your score: " + score);
            // Redirect back to main menu
            window.location.href = "MathGame.html";
        }
    }, 2000);
}