import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDataQuiz } from '../../services/apiServices';
import _ from 'lodash';
const DetailQuiz = (props) => {
    const params = useParams()
    const quizId = params.id;

    useEffect(()=> {
        fetchQuestions()
    },[quizId])
    const fetchQuestions = async()=> {
        let res = await getDataQuiz(quizId)
        // console.log("Check question: ",res);
        if(res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
            // Group the elements of Array based on `color` property
            .groupBy("id")
            // `key` is group's name (color), `value` is the array of objects
            .map((value, key) => {
                console.log(`value ${value} and key ${key}`);
                let detail = {};
                detail.questionId = key
                return { questionId: key, data: value }
                
            })
            .value()
            console.log(data);
        }
    }

    return(
        <div className="detail-quiz-container">
            Detail quiz
        </div>
    )
}

export default DetailQuiz;