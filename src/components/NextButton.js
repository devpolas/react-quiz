export default function NextButton({
  dispatch,
  answer,
  index,
  numOfQuestions,
}) {
  if (answer === null) return;

  if (index < numOfQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numOfQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
  }
}
