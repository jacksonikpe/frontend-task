import "./login-form.style.scss";

const LoginForm = () => {
  return (
    <form className="login-form">
      <p>Log in to your account</p>
      <p>Don't have an account? Get Started</p>
      <div className="container">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="E.g: victor.onazi@getbani.co" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <button>Log in</button>
      </div>
    </form>
  );
};

export default LoginForm;
