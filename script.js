const quizData = [
    {
        question: "Which of the following terms may be defined as “a measure of possible inability to achieve a goal, objective, or target within a defined security, cost plan and technical limitations that adversely affects the organization’s operation and revenues?",
        choices: 
	{
            A: "Risk",
            B: "Vulnerability",
            C: "Threat",
            D: "Incident Response"
        },
        answer: "A"
    },
    {
        question: "A distributed Denial of Service (DDoS) attack is a more common type of DoS Attack, where a single system is targeted by a large number of infected machines over the Internet. In a DDoS attack, attackers first infect multiple systems which are known as:",
        choices: 
	{
            A: "Trojans",
            B: "Zombies",
            C: "Spyware",
            D: "Worms"
        },
        answer: "B"
    },
    {
        question: "The goal of incident response is to handle the incident in a way that minimizes damage and reduces recovery time and cost. Which of the following does NOT constitute a goal of incident response?",
        choices: 
	{
            A: "Dealing with human resources department and various employee conflict behaviors",
            B: "Using information gathered during incident handling to prepare for handling future incidents in a better way and to provide stronger protection for systems and data.s",
            C: "Helping personal to recover quickly and efficiently from security incidents, minimizing loss or theft and disruption of services.",
            D: "Dealing properly with legal issues that may arise during incidents."
        },
        answer: "A"
    },
    {
        question: "Business continuity is defined as the ability of an organization to continue to function even after a disastrous event, accomplished through the deployment of redundant hardware and software, the use of fault tolerant systems, as well as a solid backup and recovery strategy. Identify the plan which is mandatory part of a business continuity plan?",
        choices: 
	{
            A: "Forensics Procedure Plan",
            B: "Business Recovery Plan",
            C: "Sales and Marketing plan",
            D: "New business strategy plan"
        },
        answer: "B"
    },
    {
        question: "An organization faced an information security incident where a disgruntled employee passed sensitive access control information to a competitor. The organization’s incident response manager, upon investigation, found that the incident must be handled within a few hours on the same day to maintain business continuity and market competitiveness. How would you categorize such information security incident?",
        choices: 
	{
            A: "High level incident",
            B: "Middle level incident",
            C: "Ultra-High level incident",
            D: "Low level incident"
        },
        answer: "A"
    },
    {
        question: "Which of the following is an appropriate flow of the incident recovery steps?",
        choices: 
	{
            A: "System Operation-System Restoration-System Validation-System Monitoring",
            B: "System Validation-System Operation-System Restoration-System Monitoring",
            C: "System Restoration-System Monitoring-System Validation-System Operations",
            D: "System Restoration-System Validation-System Operations-System Monitoring"
        },
        answer: "D"
    },
    {
        question: "A computer Risk Policy is a set of ideas to be implemented to overcome the risk associated with computer security incidents. Identify the procedure that is NOT part of the computer risk policy?",
        choices: 
	{
            A: "Procedure to identify security funds to hedge risk",
            B: "Procedure to monitor the efficiency of security controls",
            C: "Procedure for the ongoing training of employees authorized to access the system",
            D: "Provisions for continuing support if there is an interruption in the system or if the system crashes"
        },
        answer: "C"
    },
    {
        question: "Identify the network security incident where intended authorized users are prevented from using system, network, or applications by flooding the network with high volume of traffic that consumes all existing network resources.",
        choices: 
	{
            A: "URL Manipulation",
            B: "XSS Attack",
            C: "SQL Injection",
            D: "Denial of Service Attack"
        },
        answer: "D"
    },
    {
        question: "Incident handling and response steps help you to detect, identify, respond and manage an incident. Which of the following steps focus on limiting the scope and extent of an incident?",
        choices: 
	{
            A: "Eradication",
            B: "Containment",
            C: "Identification",
            D: "Data collection"
        },
        answer: "B"
    },
    {
        question: "Identify the malicious program that is masked as a genuine harmless program and gives the attacker unrestricted access to the user’s information and system. These programs may unleash dangerous programs that may erase the unsuspecting user’s disk and send the victim’s credit card numbers and passwords to a stranger.",
        choices: 
	{
            A: "Cookie tracker",
            B: "Worm",
            C: "Trojan",
            D: "Virus"
        },
        answer: "C"
    },
    ];

let currentQuestionIndex = 0;
let userAnswers = [];
let reviewing = false;

const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');
const quizElement = document.getElementById('quiz');
const resultsContainer = document.getElementById('results-container');
const resultGif = document.getElementById('result-gif');
const resultsText = document.getElementById('results');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const startButton = document.getElementById('start-button');
const retryButton = document.getElementById('retry-button');
const reviewButton = document.getElementById('review-button');
const endReviewButton = document.getElementById('end-review-button');
const optionButtons = {
    A: document.getElementById('option-a'),
    B: document.getElementById('option-b'),
    C: document.getElementById('option-c'),
    D: document.getElementById('option-d')
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function buildQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const choices = [];

    for (let letter in currentQuestion.choices) {
        choices.push(
            `<label>
                <span>${letter}: ${currentQuestion.choices[letter]}</span>
            </label>`
        );
    }

    quizElement.innerHTML = `
        <div class="question-number">Question ${currentQuestionIndex + 1}</div>
        <div class="question">${currentQuestion.question}</div>
        <div class="choices">${choices.join('')}</div>
    `;

    if (currentQuestionIndex === quizData.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    } else {
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
    }

    // Reset button states
    Object.keys(optionButtons).forEach(letter => {
        optionButtons[letter].classList.remove('selected');
    });

    // Mark the selected button if any
    if (userAnswers[currentQuestionIndex]) {
        optionButtons[userAnswers[currentQuestionIndex]].classList.add('selected');
    }
}

function showResults() {
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        if (userAnswers[questionNumber] === currentQuestion.answer) {
            numCorrect++;
        }
    });

    const score = (numCorrect / quizData.length) * 900;
    resultsText.innerHTML = `You scored ${score} out of 900 (${numCorrect} correct out of ${quizData.length})`;

    if (score < 750) {
        resultsText.innerHTML += '<br>Sorry, you failed the test.';
        resultGif.src = 'images/fail.gif';
    } else {
        resultsText.innerHTML += '<br>Congratulations, you passed the test!';
        resultGif.src = 'images/pass.gif';
    }

    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'flex';
    endReviewButton.style.display = 'none';
}

startButton.addEventListener('click', () => {
    shuffle(quizData);  // Randomize questions
    startContainer.style.display = 'none';
    quizContainer.style.display = 'flex';
    resultsContainer.style.display = 'none';
    buildQuestion();
});

Object.keys(optionButtons).forEach(letter => {
    optionButtons[letter].addEventListener('click', () => {
        userAnswers[currentQuestionIndex] = letter;
        // Gray out the selected button
        optionButtons[letter].classList.add('selected');
        // Enable other buttons
        Object.keys(optionButtons).forEach(btn => {
            if (btn !== letter) {
                optionButtons[btn].classList.remove('selected');
            }
        });
    });
});

nextButton.addEventListener('click', () => {
    if (reviewing) {
        if (currentQuestionIndex < quizData.length - 1) {
            currentQuestionIndex++;
            buildReviewQuestion();
        } else {
            reviewing = false;
            alert('Review completed.');
            quizContainer.style.display = 'none';
            resultsContainer.style.display = 'flex';
            endReviewButton.style.display = 'none';
        }
    } else {
        if (userAnswers[currentQuestionIndex]) {
            currentQuestionIndex++;
            buildQuestion();
        } else {
            alert('Please select an answer before proceeding.');
        }
    }
});

submitButton.addEventListener('click', () => {
    if (userAnswers[currentQuestionIndex]) {
        quizElement.innerHTML = '';
        nextButton.style.display = 'none';
        submitButton.style.display = 'none';
        showResults();
    } else {
        alert('Please select an answer before submitting.');
    }
});

retryButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    userAnswers = [];
    resultsContainer.style.display = 'none';
    retryButton.style.display = 'none';
    startContainer.style.display = 'flex';
});

reviewButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    reviewing = true;
    buildReviewQuestion();
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'flex';
    endReviewButton.style.display = 'block';
});

endReviewButton.addEventListener('click', () => {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'flex';
    endReviewButton.style.display = 'none';
});

function buildReviewQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const choices = [];

    for (let letter in currentQuestion.choices) {
        let className = '';
        if (letter === currentQuestion.answer) {
            className = 'correct';
        } else if (userAnswers[currentQuestionIndex] === letter) {
            className = 'incorrect';
        }

        choices.push(
            `<label class="${className}">
                <span>${letter}: ${currentQuestion.choices[letter]}</span>
            </label>`
        );
    }

    quizElement.innerHTML = `
        <div class="question-number">Review Question ${currentQuestionIndex + 1}</div>
        <div class="question">${currentQuestion.question}</div>
        <div class="choices">${choices.join('')}</div>
    `;

    if (currentQuestionIndex === quizData.length - 1) {
        nextButton.style.display = 'none';
        retryButton.style.display = 'block';
    } else {
        nextButton.style.display = 'block';
    }

    submitButton.style.display = 'none';
}
