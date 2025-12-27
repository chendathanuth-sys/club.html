document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Get references to the key elements ---
    
    // Screens
    const welcomeScreen = document.getElementById('welcome-screen');
    const quizScreen = document.getElementById('quiz-screen'); 

    // Popup Elements
    const popup = document.getElementById('popup-info');
    
    // Buttons
    // Using the ID 'start-btn' for clean selection
    const startQuizBtn = document.getElementById('start-btn'); 
    const exitBtn = document.getElementById('exit-btn');
    const levelButtons = document.querySelectorAll('.level-btn');
    
    // Quiz Title (to be updated after level selection)
    const quizTitle = document.getElementById('quiz-title');


    // --- 2. Event Listener for Start Quiz Button ---
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', () => {
            // a. Hide the Welcome Screen
            if (welcomeScreen) {
                 welcomeScreen.classList.add('hidden');
            }
            
            // b. Show the Level Selection Popup
            if (popup) {
                popup.classList.remove('hidden'); 
            }
        });
    }


    // --- 3. Event Listener for Exit Button (in the Popup) ---
    if (exitBtn) {
        exitBtn.addEventListener('click', () => {
            // a. Hide the Level Selection Popup
            if (popup) {
                popup.classList.add('hidden');
            }

            // b. Return to the Welcome Screen
            if (welcomeScreen) {
                 welcomeScreen.classList.remove('hidden');
            }
        });
    }


    // --- 4. Event Listeners for Level Selection Buttons ---
    levelButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Get the selected level number (1, 2, 3, or 4)
            const selectedLevelNumber = event.target.dataset.level;
            // Get the full descriptive text (e.g., "Level 7-8 (Easy)")
            const selectedLevelText = event.target.textContent;
            

            // --- Start Quiz Setup ---
            
            // a. Hide the Level Selection Popup
            if (popup) {
                popup.classList.add('hidden');
            }
            
            // b. Show the Main Quiz Screen
            if (quizScreen) {
                quizScreen.classList.remove('hidden'); 
            }
            
            // c. Update the quiz title
            if (quizTitle) {
                quizTitle.textContent = selectedLevelText;
            }
            
            // d. * PLACEHOLDER: Call your question generation function here *
            // e.g., generateQuestions(selectedLevelNumber);
        });
    });
});