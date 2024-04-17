// WORD GUESSING GAME
// const words=["apple","pear","cherry","melon","grape"]
// function randomWord(wordList){
//     return wordList[Math.floor(Math.random()*wordList.length)]
// }
// function guessWord(){
//     const word=randomWord(words);
//     const letterCount=word.length
//     alert("The word has " + letterCount + " letters")

//     const guess=prompt("Guess the fruit!")

//     if(guess.toLowerCase()===word){
//         alert("You won!")
//     }else{
//         alert("Sorry the word was "+ word)
//     }
// }
// guessWord()

// CALCULATES USER AGE INPUT
// function ageCalc() {
//     let birthYear = prompt("Enter your birth year (e.g., 1990):");
//     let birthMonth = prompt("Enter your birth month (1-12):");
//     let birthDay = prompt("Enter your birth day (1-31):");

//     const today = new Date();
//     const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDifference = today.getMonth() - birthDate.getMonth();

//     if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }

//     alert("Your age is: " + age);
// }

// ageCalc();

// ROCK PAPER SCISSORS

// function game() {
//     const choices = ["rock", "paper", "scissors"];

//     while (true) {
//         let userChoice = prompt("Let's play rock, paper, scissors. Input your choice (rock, paper, scissors), or type 'exit' to quit:");
//         if (userChoice.toLowerCase() === 'exit') break;
        
//         userChoice = userChoice.toLowerCase();
//         if (!choices.includes(userChoice)) {
//             alert("Invalid choice. Please enter rock, paper, or scissors.");
//             continue;
//         }

//         const computerChoice = choices[Math.floor(Math.random() * choices.length)];

//         if (userChoice === computerChoice) {
//             alert("It's a tie! Computer's choice was also " + computerChoice + ".");
//         } else if ((userChoice === "scissors" && computerChoice === "paper") ||
//                    (userChoice === "rock" && computerChoice === "scissors") ||
//                    (userChoice === "paper" && computerChoice === "rock")) {
//             alert("You win! Computer's choice was " + computerChoice + ".");
//         } else {
//             alert("You lose. Computer's choice was " + computerChoice + ".");
//         }
//     }
// }

// game();

function simpleMathQuiz() {
    const operations = ['+', '-', '*', '/'];
    const maxQuestions = 5;
    let questionCount = 0;

    while (questionCount < maxQuestions) {
        let num1 = Math.floor(Math.random() * 11); 
        let num2 = Math.floor(Math.random() * 11);
        const operation = operations[Math.floor(Math.random() * operations.length)];

        let correctAnswer;
        switch (operation) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case '-':
                correctAnswer = num1 - num2;
                break;
            case '*':
                correctAnswer = num1 * num2;
                break;
            case '/':
                num2 = num2 === 0 ? 1 : num2; 
                num1 = num2 * Math.floor(Math.random() * 11);
                correctAnswer = num1 / num2;
                break;
        }

        const userAnswer = parseInt(prompt(`Question ${questionCount + 1}: What is ${num1} ${operation} ${num2}?`), 10);

        if (userAnswer === correctAnswer) {
            alert("Correct!");
        } else {
            alert(`Incorrect. The correct answer was ${correctAnswer}.`);
        }

        questionCount++;
    }

    alert("Quiz completed!");
}

simpleMathQuiz();
