import { useState } from "react"
import "./Login.scss"
import { useNavigate } from "react-router-dom"
import { postLogin } from "../../services/apiServices"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Login  = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const handleLogin = async()=> {
        //validate
        const isValidEmail = validateEmail(email);

        if(!isValidEmail) {
          toast.error("Invalid email")
          return;
        }
    
        if(!password) {
          toast.error("Invalid password")
          return;
        }

        //submit api
        let data = await postLogin(email,password)
        if(data && data.EC === 0)
        {
            dispatch({
                type: "FETCH_USER_LOGIN_SUCCESS",
                payload: data
            })
            toast.success(data.EM)
            navigate("/")
        }
        if(data && +data.EC !== 0 ) {
            toast.error(data.EM)
          }
    }
    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button onClick={()=> navigate("/signup")}>Sign up</button>
            </div>
            <div className="title col-4 mx-auto">
                Jason
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, Who's this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input 
                    type={"email"} 
                    className="form-control"
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type={"password"} 
                    className="form-control"
                    value={password}
                    onChange={(event)=> setPassword(event.target.value)}
                    />
                </div>
                <span className="forgot-password">Forgot password?</span>
                <div>
                    <button 
                    className="btn-submit"
                    onClick={()=> handleLogin()}
                    >Login</button>
                </div>
                <div className="text-center">
                    <span className="back" onClick={()=> {navigate("/")}}>
                        &#60;&#60; Go to homepage
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Login