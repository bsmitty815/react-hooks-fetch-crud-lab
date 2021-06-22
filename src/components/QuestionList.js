import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"

// using json-server so in the terminal run - npm run server
// then in a second server run - npm start


function QuestionList() {
  const [questions, setQuestions] = useState([])


  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(response => response.json())
    .then(data => {
      setQuestions(data)
    })
  }, [])

  function deleteTheQuestion(id) {
    //delete question
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE', //use delete method when deleting from server
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ //pass in all the added data usig formData useState
          id: `${id}`,
      })
    })
    fetch('http://localhost:4000/questions')
    .then(response => response.json()) // you need to fetch again to get the questions
    .then(data => {
      setQuestions(data)
    })
  }


  function updateQuestionAnswer(id, correctIndex) {
    //update question answer
    console.log(id, correctIndex)
    console.log(id)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH', //use patch method when updating server
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ //pass in all the added data usig formData useState
          id: `${id}`,
          correctIndex: parseInt(correctIndex),
      })
    })
    fetch('http://localhost:4000/questions')
    .then(response => response.json()) // you need to fetch again to get the questions
    .then(data => {
      setQuestions(data)
    })
  }



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
          { questions.map((question) => {
            return <QuestionItem
            key={question.id}
            question={question}
            deleteTheQuestion={deleteTheQuestion}
            updateQuestionAnswer={updateQuestionAnswer}
            />
          })
        }
      </ul>
    </section>
  );
}

export default QuestionList;
