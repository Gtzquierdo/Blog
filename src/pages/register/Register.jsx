import './register.css';

const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Username goes here..." />
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Email goes here..." />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..." />
                <button className="registerButton">Register</button>

            </form>
            <button className="reLoginButton">Login</button>
        </div>
    );
}

export default Register;
