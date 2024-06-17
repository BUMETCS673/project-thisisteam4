import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./store/userSlice";

const CallbackPage = () => {
  const { isAuthenticated, error } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const authenticateUser = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          const stateData = {
            user: user,
            token: token,
            isAuthenticated: isAuthenticated,
          };
          dispatch(loginSuccess(stateData));
          navigate("/me");
        } catch (tokenError) {
          console.error("Error getting token:", tokenError);
          navigate("/auth");
        }
      }
    };

    if (error) {
      console.error("Authentication error:", error);
      navigate("/auth");
    }

    authenticateUser();
  }, [
    isAuthenticated,
    error,
    navigate,
    dispatch,
    getAccessTokenSilently,
    isLoading,
    user,
  ]);

  return (
    <div className="callback">
      <ThreeDots color="#231350" height={40} width={100} />
    </div>
  );
};

export default CallbackPage;
