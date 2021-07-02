import './login.css';

const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input className="loginInput" type="text" placeholder="Email goes here..." />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password..." />
                <button className="loginButton">Login</button>

            </form>
            <button className="loRegisterButton">Register</button>
        </div>
    );
}

export default Login;
