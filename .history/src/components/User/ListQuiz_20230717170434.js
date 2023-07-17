import { useState, useEffect } from "react"
import { getQuizByUser } from "../../services/apiServices"

const ListQuiz = (props) => {
    const [arrQuiz,setArrQuiz] = useState([])

    useEffect(()=> {
        getQuizData()
    },[])
    const getQuizData = async() => {
       const res = await getQuizByUser()
       if(res && res.EC === 0) {
        setArrQuiz(res.DT)
       }
    }
    return(
        <div className="list-quiz-container">
            {arrQuiz && arrQuiz.length > 0 &&
            arrQuiz.map((quiz,index)=> {
                return(
                    <div key={`${index}-quiz`} className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Quiz {index + 1}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default ListQuiz 