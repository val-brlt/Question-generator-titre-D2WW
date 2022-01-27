

export default function TextQuestion ({type, texte}) {
    return (
        <span className={type === "question" ? "textRep" : "textTitre"}> {texte} </span>
        //<img src={type === "question" ? "./img/question.png" : "./img/titre.png"} alt="question" className="imgQuestion"/>
        );
}