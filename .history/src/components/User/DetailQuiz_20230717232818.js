import { useParams } from 'react-router-dom';
const DetailQuiz = (props) => {
    const params = useParams()
    console.log("check", params);
    return(
        <div className="detail-quiz-container">
            Detail quiz
        </div>
    )
}

export default DetailQuiz;