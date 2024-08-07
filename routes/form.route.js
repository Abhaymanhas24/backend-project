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
    question: "What is the capital of Japan?",
    correct_option: "Tokyo",
  },
  {
    question_number: 2,
    question: "Which of the following are programming languages?",
    correct_option: ["Python", "Java"],
  },
  {
    question_number: 3,
    question: "What is the largest planet in our solar system?",
    correct_option: "Jupiter",
  },
  {
    question_number: 4,
    question: "Select the primary colors:",
    correct_option: ["Red", "Blue", "Yellow"],
  },
  {
    question_number: 5,
    question: "Which element has the chemical symbol 'O'?",
    correct_options: ["Oxygen", "Gold", "Silver", "Hydrogen"],
  },
  {
    question_number: 6,
    question: "Which of the following are continents?",
    correct_option: ["Africa", "Europe", "Antarctica"],
  },
];

let useranswer = [];

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
// router.get("/per", function (request,response){  //percentage of correct answer
// const countCorrectAnswer=()=>{
//   let coreectCount=0;
// answer.forEach(coreectAnswer=>{
//   const userAnswer=useranswer.find(item=>item.question_number===countCorrectAnswer.question_number)
//   if(userAnswer){
//     const correct
//   }
// })
// }

//   }
// }
// });

export default router;
