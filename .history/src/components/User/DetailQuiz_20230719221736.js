import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDataQuiz } from '../../services/apiServices';
const DetailQuiz = (props) => {
    const params = useParams()
    const quizId = params.id;

    useEffect(()=> {
        fetchQuestions()
    },[quizId])
    const fetchQuestions = async()=> {
        let res = await getDataQuiz(quizId)
        console.log("Check question: ",res);
        if(res && res.EC === 0) {
            let raw = res.DT;
            _.chain(raw)
            // Group the elements of Array based on `color` property
            .groupBy("color")
            // `key` is group's name (color), `value` is the array of objects
            .map((value, key) => ({ color: key, users: value }))
            .value()
        }
    }

    return(
        <div className="detail-quiz-container">
            Detail quiz
        </div>
    )
}

export default DetailQuiz;