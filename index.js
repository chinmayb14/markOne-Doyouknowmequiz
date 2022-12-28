var readLineSync = require("readline-sync");

score = 0;


function answerChecker(userAnswer, actualAnswer) {
  if (userAnswer.toUpperCase() === actualAnswer.toUpperCase()) {
    console.log(" Correct answer!");
    score = score + 1;
  }
  else {
    console.log(" Wrong answer!");
    score = score - 1;
  }
  console.log(" Current score = ", score);
  console.log(" ------------------");
}




var questionList = [{ question: " What is Chinmay's age ? ", answer: "22" },
{ question: " What's my favourite sabji ? ", answer: "bhindi ki sabji" }, { question: " In which college did Chinmay finished is graduation ? ", answer: "SRM" }, { question: " Which GP is Chinmay's favourite ? ", answer: "F1" }, { question: " Where is Chinmay from ? ", answer: "nainital" }];



var name = readLineSync.question(" Enter your Name here : ");
console.log(" Welcome " + name + " to HOW WELL DO YOU KNOW Chinmay!");
console.log("-------------------------------------------------");
console.log(" Let's get started ! ");
console.log("-------------------------------------------------");



for (var i = 0; i < questionList.length; i = i + 1) {
  var answer = readLineSync.question(questionList[i].question);
  answerChecker(answer, questionList[i].answer);
}


console.log(" Total score is : ", score);
console.log(" Thanks for playing!");
console.log(" -------------------");