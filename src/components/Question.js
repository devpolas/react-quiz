import Options from "./Options";

export default function Question({ questions }) {
  const { question, options } = questions;
  return (
    <div>
      <h4>{question}</h4>
      <Options options={options} />
    </div>
  );
}
