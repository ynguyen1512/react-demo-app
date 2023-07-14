import "./Login.scss"
const Login  = (props) => {
    return (
        <div className="login-container">
            <div className="header">
                Don't have an account yet?
            </div>
            <div className="title">
                Jason
            </div>
            <div className="welcome">
                Hello, Who's this?
            </div>
            <div className="content-form">
                <div className="form-group">
                    <label>Email</label>
                    <input type={"email"}/>
                </div>
            </div>
        </div>
    )
}

export default Login