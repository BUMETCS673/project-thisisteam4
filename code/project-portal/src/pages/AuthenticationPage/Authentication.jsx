import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import { useState } from "react";
import "./Authentication.css";

function Authentication() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="auth-page-container">
      <div className="pp-heading">
        <p>PROJECT</p>
        <p>PORTAL</p>
      </div>
      <div className="auth-page-form-area">
        <div className="signin-signup">
          <p
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            SIGN IN
          </p>
          <p
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SIGN UP
          </p>
        </div>
        {!isLogin && <Registration />}
        {isLogin && <Login />}
      </div>
    </div>
  );
}

export default Authentication;
