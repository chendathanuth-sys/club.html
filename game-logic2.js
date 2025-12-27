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
        question: 'Convert to standard form: 4.5 × 10³',
        imageSrc: "",
        answers: [
            { text: '450', correct: false },
            { text: '4500', correct: true },
            { text: '45000', correct: false },
            { text: '0.0045', correct: false }
        ]
    },
    {
        question: 'Simplify: x³ · x²',
        imageSrc: "",
        answers: [
            { text: 'x⁶', correct: false },
            { text: 'x⁵', correct: true },
            { text: 'x', correct: false },
            { text: '2x⁵', correct: false }
        ]
    },
    {
        question: 'Simplify: (x²)³',
        imageSrc: "",
        answers: [
            { text: 'x⁵', correct: false },
            { text: 'x⁶', correct: true },
            { text: 'x⁸', correct: false },
            { text: '3x²', correct: false }
        ]
    },
    {
        question: 'Calculate: 3⁻²',
        imageSrc: "",
        answers: [
            { text: '-9', correct: false },
            { text: '-6', correct: false },
            { text: '1/9', correct: true },
            { text: '6', correct: false }
        ]
    },
    {
        question: 'Any number to the power of 0 is:',
        imageSrc: "",
        answers: [
            { text: '0', correct: false },
            { text: '1', correct: true },
            { text: 'The number itself', correct: false },
            { text: 'Undefined', correct: false }
        ]
    },

    // --- Polynomial Operations ---
    {
        question: 'Simplify: 3x + 2y - x + 5y',
        imageSrc: "",
        answers: [
            { text: '2x + 7y', correct: true },
            { text: '4x + 7y', correct: false },
            { text: '9xy', correct: false },
            { text: '2x + 3y', correct: false }
        ]
    },
    {
        question: 'Expand: 3(2x - 4)',
        imageSrc: "",
        answers: [
            { text: '6x - 4', correct: false },
            { text: '5x - 7', correct: false },
            { text: '6x - 12', correct: true },
            { text: '6x + 12', correct: false }
        ]
    },
    {
        question: 'Simplify: (2x + 3) + (x - 5)',
        imageSrc: "",
        answers: [
            { text: '3x + 8', correct: false },
            { text: '3x - 2', correct: true },
            { text: '2x - 2', correct: false },
            { text: '3x + 2', correct: false }
        ]
    },
    {
        question: 'Simplify: (4x² - 2x) - (2x² + x)',
        imageSrc: "",
        answers: [
            { text: '2x² - 3x', correct: true },
            { text: '2x² - x', correct: false },
            { text: '6x² - 3x', correct: false },
            { text: '2x² + 3x', correct: false }
        ]
    },
    {
        question: 'Which are "Like Terms"?',
        imageSrc: "",
        answers: [
            { text: '3x and 3y', correct: false },
            { text: '2x² and 2x', correct: false },
            { text: '5x and -2x', correct: true },
            { text: '4xy and 4x', correct: false }
        ]
    },

    // --- Complex Equations ---
    {
        question: 'Solve for x: 2(x + 3) = 14',
        imageSrc: "",
        answers: [
            { text: '7', correct: false },
            { text: '4', correct: true },
            { text: '11', correct: false },
            { text: '5', correct: false }
        ]
    },
    {
        question: 'Solve: 5x - 3 = 2x + 9',
        imageSrc: "",
        answers: [
            { text: 'x = 4', correct: true },
            { text: 'x = 2', correct: false },
            { text: 'x = 12', correct: false },
            { text: 'x = 6', correct: false }
        ]
    },
    {
        question: 'Solve: -2(x - 5) = 12',
        imageSrc: "",
        answers: [
            { text: '-1', correct: true },
            { text: '11', correct: false },
            { text: '-11', correct: false },
            { text: '1', correct: false }
        ]
    },
    {
        question: 'Solve: x/2 - 5 = -3',
        imageSrc: "",
        answers: [
            { text: '2', correct: false },
            { text: '16', correct: false },
            { text: '4', correct: true },
            { text: '-4', correct: false }
        ]
    },
    {
        question: 'Solve: 4(x - 1) = 2x + 8',
        imageSrc: "",
        answers: [
            { text: '6', correct: true },
            { text: '2', correct: false },
            { text: '4', correct: false },
            { text: '-6', correct: false }
        ]
    },

    // --- Harder Arithmetic ---
    {
        question: 'Calculate: -4² (Assume no parenthesis)',
        imageSrc: "",
        answers: [
            { text: '16', correct: false },
            { text: '-16', correct: true },
            { text: '8', correct: false },
            { text: '-8', correct: false }
        ]
    },
    {
        question: 'Simplify: 2x(x + 5)',
        imageSrc: "",
        answers: [
            { text: '2x² + 5', correct: false },
            { text: '2x + 10x', correct: false },
            { text: '2x² + 10x', correct: true },
            { text: '3x + 7', correct: false }
        ]
    },
    {
        question: 'Solve: 3 - 2x = 11',
        imageSrc: "",
        answers: [
            { text: '-4', correct: true },
            { text: '4', correct: false },
            { text: '-7', correct: false },
            { text: '7', correct: false }
        ]
    },
    {
        question: 'Simplify: (x⁵)/(x²)',
        imageSrc: "",
        answers: [
            { text: 'x²⁵', correct: false },
            { text: 'x³.5', correct: false },
            { text: 'x³', correct: true },
            { text: 'x⁷', correct: false }
        ]
    },
    {
        question: 'Expand: (x + 3)(x + 2)',
        imageSrc: "",
        answers: [
            { text: 'x² + 6x + 5', correct: false },
            { text: 'x² + 5x + 6', correct: true },
            { text: 'x² + 5x + 5', correct: false },
            { text: '2x + 5', correct: false }
        ]
    }
];
    // Add more questions here following the same structure...


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