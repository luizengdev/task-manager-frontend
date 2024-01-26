import CustomButton from "../components/CustomButton";

import logo from "../assets/logo.svg";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <img className="logo" src={logo} alt="luiz eng dev" />
      <div className="button-container">
        <h1>Task Manager</h1>
        <CustomButton>Entrar</CustomButton>
      </div>
    </div>
  );
};

export default Login;
