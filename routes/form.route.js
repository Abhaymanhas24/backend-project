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
    correct_option: ["0", "2"],
  },
  {
    question_number: 3,
    correct_option: ["2"],
  },
  {
    question_number: 4,
    correct_option: ["0", "1", "2"],
  },
  {
    question_number: 5,
    correct_option: ["0"],
  },
  {
    question_number: 6,
    correct_option: ["0", "2", "3"],
  },
];

let useranswer = [];

router.get("/", function (request, response) {
  //for  questions
  response.send(Question);
});
router.post("/add", function (request, response) {
  const data = request.body;
  console.log(data);

  if (data) {
    useranswer.push(...data);
    // for checking percentage using userdata
    const countCorrectAnswers = () => {
      let correctCount = 0;
      answer.forEach((correctAnswer) => {
        const userAnswer = data.find(
          (item) => item.question_number === correctAnswer.question_number
        );
        if (userAnswer) {
          if (
            JSON.stringify(correctAnswer.correct_option.sort()) ===
            JSON.stringify(userAnswer.idx.sort())
          ) {
            correctCount++;
          }
        }
      });

      return correctCount;
    };
    // for question and answer
    const combined = Question.map((question) => {
      let answerObj = answer.find(
        (ans) => ans.question_number === question.question_number
      );
      let userAnswer = data.find(
        (item) => item.question_number === question.question_number
      );

      return {
        ...question,
        correct_option: answerObj ? answerObj.correct_option : null,
        user_answer: userAnswer ? userAnswer.idx : null,
      };
    });

    const correctAnswerCount = countCorrectAnswers();
    const percentage = +((correctAnswerCount / answer.length) * 100).toFixed(2);

    response.status(200).send({ percentage, combined });
  } else {
    response.status(400).send({ error: "Invalid data" });
  }
});
router.get("/user", function (request, response) {
  response.send(useranswer);
});
// router.get("/per", function (request, response) {
//   //   //percentage of correct answer
//   //   const countCorrectAnswers = () => {
//   //     let correctCount = 0;
//   //     answer.forEach((correctAnswer) => {
//   //       const userAnswer = useranswer.find(
//   //         (item) => item.question_number === correctAnswer.question_number
//   //       );
//   //       if (userAnswer) {
//   //         if (
//   //           JSON.stringify(correctAnswer.correct_option.sort()) ===
//   //           JSON.stringify(userAnswer.idx.sort())
//   //         ) {
//   //           correctCount++;
//   //         }
//   //       }
//   //     });
//   //     return correctCount;
//   //   };

//   //   const correctAnswerCount = countCorrectAnswers();
//   //   const percentage = (correctAnswerCount / answer.length) * 100;
//   response.send(percentage.toString());
// });
// router.get("/result", function (request, response) {
//   //correct question and answer
//   let combined = Question.map((question) => {
//     let answerObj = answer.find(
//       (ans) => ans.question_number === question.question_number
//     );
//     return {
//       ...question,
//       ...answerObj,
//     };
//   });
//   response.send(combined);
// });

export default router;
