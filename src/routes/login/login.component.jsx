import "./login.style.scss";
import Logo from "../../components/logo/logo.component";
import LoginForm from "../../components/login-form/login-form.component";

const Login = () => {
  return (
    <div className="login-group">
      <Logo />
      <LoginForm />
    </div>
  );
};

export default Login;
