import CustomButton from "./CustomButton";

import "./Sidebar.scss";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="luiz eng dev" />
      </div>

      <div className="sign-out">
        <CustomButton>Sair</CustomButton>
      </div>
    </div>
  );
};

export default Sidebar;
