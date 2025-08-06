import Options from "./Options";

export default function Question({ questions, dispatch, answer }) {
  const { question, options, correctOption } = questions;
  return (
    <div>
      <h4>{question}</h4>
      <Options
        options={options}
        dispatch={dispatch}
        correctOption={correctOption}
        answer={answer}
      />
    </div>
  );
}
