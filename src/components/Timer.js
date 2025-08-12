import { useEffect } from "react";

export default function Timer({ dispatch, seconds_remaining }) {
  const minutes = Math.floor(seconds_remaining / 60);
  const seconds = seconds_remaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return function () {
        clearInterval(id);
      };
    },
    [dispatch]
  );
  return (
    <div className='timer'>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
