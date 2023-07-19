import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const DetailQuiz = (props) => {
    const params = useParams()
    const quizId = params.id;

    useEffect(()=> {

    },[quizId])
    const fetchQuestions =()=> {
        
    }
    console.log("check", params);
    return(
        <div className="detail-quiz-container">
            Detail quiz
        </div>
    )
}

export default DetailQuiz;