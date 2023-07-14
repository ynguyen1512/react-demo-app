import "./Login.scss"
const Login  = (props) => {
    return (
        <div className="login-container df justify-content-center">
            <div className="header">
                Don't have an account yet?
            </div>
            <div className="title col-4">
                Jason
            </div>
            <div className="welcome col-4">
                Hello, Who's this?
            </div>
            <div className="content-form col-4">
                <div className="form-group">
                    <label>Email</label>
                    <input type={"email"} className="form-control"/>
                </div>
            </div>
        </div>
    )
}

export default Login