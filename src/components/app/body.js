import TextQuestion from '../elements/textQuestion';
import BtnQuestion from '../elements/btnQuestion';
import { useState } from 'react';
import CadreReponse from './cadreReponse';

export default function Body() {

  const [question, setQuestion] = useState('');
  const [showSolution, setShowSolution] = useState(false);

    return (
      <div className="container">
        <TextQuestion texte="Générateur de question pour le titre D2WW"/>
        <TextQuestion type="question" texte={question.question}/>
        {question && <CadreReponse showSolution={showSolution} setShowSolution={setShowSolution}  question={question} />}
        <BtnQuestion question={question} texte="Génerer une question" setShowSolution={setShowSolution}  setQuestion={setQuestion}/>
      </div>
    );
  }