import { useParams } from 'react-router-dom';
const DetailQuiz = (props) => {
    const params = useParams()
    return(
        <div className="detail-quiz-container">
            Detail quiz
        </div>
    )
}

export default DetailQuiz;