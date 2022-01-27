import TextQuestion from '../elements/textQuestion';
import BtnQuestion from '../elements/btnQuestion';

export default function CadreReponse({setShowSolution,showSolution,  texte, question }) {  
console.log("CadreReponse ~ showSolution", showSolution)

  return (
    <>
      {showSolution && <TextQuestion type="question" texte={question.reponse}/>}
      {!showSolution && <BtnQuestion  texte="Voir la solution" setShowSolution={setShowSolution}/>}
    </>
  );
}
