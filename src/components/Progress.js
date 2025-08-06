export default function Progress({
  index,
  numOfQuestions,
  points,
  totalPoints,
  answer,
}) {
  return (
    <header className='progress'>
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}
