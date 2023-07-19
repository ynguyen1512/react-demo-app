import { useParams } from 'react-router-dom';
const DetailQuiz = (props) => {
    const params = useParams()
    const quizId = params.id;
    console.log("check", params);
    return(
        <div className="detail-quiz-container">
            Detail quiz
        </div>
    )
}

export default DetailQuiz;