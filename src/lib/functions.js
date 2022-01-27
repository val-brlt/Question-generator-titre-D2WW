import { dicoQuestions } from "./dicoQuestions";

/**
 *  Fonction qui retourne une question aléatoire
 * @param {String}  PreviousTextQuestion texte du prècédent question
 * @returns 
 */
export function pickRandomQuestion(PreviousTextQuestion) {
    let randNumber = Math.floor(Math.random() * dicoQuestions.length);
    // Verifie si la question est la même que la précédente
    while(dicoQuestions[randNumber].question === PreviousTextQuestion) {
        randNumber = Math.floor(Math.random() * dicoQuestions.length);
    }
    return dicoQuestions[randNumber];
}

