import { ReactComponent as Eye } from "../../assets/img/eye.svg";
import "./login-form.style.scss";

const LoginForm = () => {
  return (
    <form className="login-form">
      <p className="info">Log in to your account</p>
      <p className="noAccountInfo">
        Don't have an account? <span>Get Started</span>
      </p>
      <div className="container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="E.g: victor.onazi@getbani.co"
          required
        />
        <div className="password">
          <label>Password</label>
          <a href="#">Forgot password?</a>
        </div>
        <div className="passwordInput">
          <input type="password" placeholder="Password" required />
          <Eye className="eye" />
        </div>
        <button className="loginButton">Log in</button>
      </div>
    </form>
  );
};

export default LoginForm;
