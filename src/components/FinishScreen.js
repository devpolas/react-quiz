export default function FinishScreen({
  points,
  totalPoints,
  highScore,
  dispatch,
}) {
  const percentage = (points / totalPoints) * 100;
  return (
    <>
      <p className='result'>
        Your Scored <strong>{points}</strong> out of {totalPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>High score {highScore} points</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}
