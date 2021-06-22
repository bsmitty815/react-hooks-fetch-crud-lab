import React from "react";

function QuestionItem({ question, deleteTheQuestion, updateQuestionAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function updateQuestionAnswerChanged() {
    //update patch
    updateQuestionAnswer(id, correctIndex)
  }

  function deleteTheQuestionClicked() {
    //delete fetch callback function
    deleteTheQuestion(id)
    //you can get the specified question using its unique id

  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={updateQuestionAnswerChanged} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteTheQuestionClicked}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
