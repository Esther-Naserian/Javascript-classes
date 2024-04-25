class Question {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    addQuestion(questionObj) {
      this.questions.push(questionObj);
    }
  
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        console.log("End of quiz");
      }
    }
  
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
        console.log("Correct answer!");
      } else {
        console.log("Wrong answer!");
      }
    }
  }
  
  class QuestionObject {
    constructor(question, answer) {
      this.question = question;
      this.answer = answer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer.toLowerCase() === this.answer.toLowerCase();
    }
  }
  
  // Example usage:
  const quiz = new Question();

  const question1 = new QuestionObject("What do you prefer ?", "coffee");
  const question2 = new QuestionObject("Do you love javascript?", "Yes");
  
  quiz.addQuestion(question1);
  quiz.addQuestion(question2);
  
  quiz.submitAnswer("Paris"); // Correct answer!
  quiz.nextQuestion();
  quiz.submitAnswer("Mars"); //
  
  //Questuion2

  
  