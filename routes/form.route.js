import express from "express";
// import { v4 } from "uuid";
const router = express.Router();
let Question = [
  {
    question_number: 1,
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Seoul", "Beijing", "Bangkok"],
    type: "radio",
  },
  {
    question_number: 2,
    question: "Which of the following are programming languages?",
    options: ["Python", "HTML", "Java", "CSS"],
    type: "checkbox",
  },
  {
    question_number: 3,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    type: "radio",
  },
  {
    question_number: 4,
    question: "Select the primary colors:",
    options: ["Red", "Green", "Blue", "Yellow"],
    type: "checkbox",
  },
  {
    question_number: 5,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Hydrogen"],
    type: "radio",
  },
  {
    question_number: 6,
    question: "Which of the following are continents?",
    options: ["Africa", "Atlantis", "Europe", "Antarctica"],
    type: "checkbox",
  },
];

let answer = [
  {
    question_number: 1,
    correct_option: ["0"],
  },
  {
    question_number: 2,
    correct_option: ["1", "2"],
  },
  {
    question_number: 3,
    correct_option: ["2"],
  },
  {
    question_number: 4,
    correct_option: ["0", "2", "3"],
  },
  {
    question_number: 5,
    correct_options: ["0", "1", "2", "3"],
  },
  {
    question_number: 6,
    correct_option: ["0", "2", "3"],
  },
];

let useranswer = [
  {
    question_number: 1,
    correct_options: ["0"],
  },
  {
    question_number: 2,
    correct_options: ["1", "2"],
  },
  {
    question_number: 3,
    correct_options: ["2"],
  },
];

router.get("/", function (request, response) {
  //for  questions
  response.send(Question);
});
router.post("/", function (request, response) {
  //submit the answer
  const data = request.body;
  console.log(data);
  useranswer.push(data);
  response.send(data);
});
router.get("/per", function (request, response) {
  //percentage of correct answer
  const countCorrectAnswers = () => {
    let correctCount = 0;
    answer.forEach((correctAnswer) => {
      const userAnswer = useranswer.find(
        (item) => item.question_number === correctAnswer.question_number
      );
      if (userAnswer) {
        if (
          JSON.stringify(correctAnswer.correct_option.sort()) ===
          JSON.stringify(userAnswer.correct_options.sort())
        ) {
          correctCount++;
        }
      }
    });
    return correctCount;
  };

  const correctAnswerCount = countCorrectAnswers();
  const percentage = (correctAnswerCount / answer.length) * 100;
  response.send(percentage.toString());
});
// router.get("/result",function(request,response){   //correct question and answer

// })

export default router;
