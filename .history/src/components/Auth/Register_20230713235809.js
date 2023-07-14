import { useState } from "react"
import "./Register.scss"
import { useNavigate } from "react-router-dom"
import { postSignup } from "../../services/apiServices"
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const Register = () => {
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [username, setUsername] = useState("")
        const navigate = useNavigate()

        const [isShowPassword, setIsShowPassword] = useState(false)
        const validateEmail = (email) => {
            return String(email)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
          };

        const handleRegister = async()=> {
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
            let data = await postSignup(email,username, password)
            if(data && data.EC === 0)
            {
                toast.success(data.EM)
                navigate("/login")
            }
            if(data && +data.EC !== 0 ) {
                toast.error(data.EM)
            }
        }
        
    return (
        <div className="login-container">
            <div className="header">
                <span>Don't have an account yet?</span>
                <button>Sign up</button>
            </div>
            <div className="title col-4 mx-auto">
                Jason
            </div>
            <div className="welcome col-4 mx-auto">
                Hello, Who's this?
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email (*)</label>
                    <input 
                    type={"email"} 
                    className="form-control"
                    value={email}
                    onChange={(event)=> setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                    type={"text"} 
                    className="form-control"
                    value={username}
                    onChange={(event)=> setUsername(event.target.value)}
                    />
                </div>
                <div className="form-group pass-group">
                    <label>Password (*)</label>
                    <input 
                    type={isShowPassword ? "text" : "password"} 
                    className="form-control"
                    value={password}
                    onChange={(event)=> setPassword(event.target.value)}
                    />
                    {isShowPassword ? 
                    <span className="icons-eye"
                        onClick={()=> setIsShowPassword(false)}>
                        <AiFillEye/>
                    </span>
                    :
                    <span className="icons-eye"
                        onClick={()=> setIsShowPassword(true)}>
                        <AiFillEyeInvisible/>
                    </span>    
                }
                </div>
                <div>
                    <button 
                    className="btn-submit"
                    onClick={()=> handleRegister()}
                    >Signup</button>
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

export default Register