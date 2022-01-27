import { pickRandomQuestion } from "../../lib/functions";

export default function BtnQuestion({setShowSolution, question, setQuestion, texte }) {
  
  const handleClick = () => {
    setQuestion(pickRandomQuestion(question.question));
    setShowSolution(false);
  }

  return (
    <>
      <button id="btnRandomQuestion" onClick={() => setQuestion !== undefined ? handleClick(): setShowSolution(true)}>
        {texte}
      </button>
    </>
  );
}
