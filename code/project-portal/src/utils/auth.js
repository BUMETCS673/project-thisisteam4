// const API_URL = "https://api-usermanagement-service.onrender.com";
const API_URL = "https://guarded-temple-98301-e767ce7eb6d7.herokuapp.com";
import { redirect, json } from "react-router-dom";
import { loginSuccess, logoutSuccess } from "../store/userSlice";

/**
 * A user registration Http request function
 * @param {object} values - user data which come from the form submission using Formik
 * @param {function} setFieldError - action from formik to set a field error message
 * @param {function} setSubmitting - action from formik to set the form submission status
 * @param {function} navigate - a react hook to navigate through the plaform
 */
export const registerUser = async (
  values,
  setFieldError,
  setSubmitting,
  navigate
) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    //checking if the request is Bad Request with wrong user input data
    if (
      response.status == 400 ||
      response.status == 401 ||
      response.status == 422
    ) {
      const data = await response.json();
      const message = data.message;
      //console.log(message)
      if (message.includes("first name")) {
        setFieldError("firstName", "Invalid first name.");
      } else if (message.includes("last name")) {
        setFieldError("lastName", "Invalid last name.");
      } else if (message.includes("username")) {
        setFieldError("username", message);
      } else if (message.includes("password")) {
        setFieldError("password", message);
      }
      setSubmitting(false);
      return;
    }

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || "Failed to register user" },
        { status: 500 }
      );
    }

    return navigate("/login");
  } catch (error) {
    //console.log("Register user error: ", error);
    return error;
  }
};

/**
 * User Login Http request function
 * @param {object} values - user data which come from the form submission using Formik
 * @param {function} setFieldError - action from formik to set a field error message
 * @param {function} setSubmitting - action from formik to set the form submission status
 * @param {function} dispatch - a dispact function to call the reducer function
 * @param {function} navigate - a react hook to navigate through the plaform
 */
export const loginUser = async (
  values,
  setFieldError,
  setSubmitting,
  navigate,
  dispatch
) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    //checking if the request is Bad Request with wrong user input data
    if (
      response.status == 400 ||
      response.status == 401 ||
      response.status == 422
    ) {
      const data = await response.json();
      const message = data.message;

      if (
        message.includes("username") ||
        message.includes("password") ||
        message.includes("creditinals")
      ) {
        setFieldError("username", "Invalid Creditinals.");
        setFieldError("password", "Invalid Creditinals.");
      }
      setSubmitting(false);
      return;
    }

    //Backend api not found
    if (response.status == 404) {
      throw json(
        { message: response.message || "API endpoint not found" },
        { status: 404 }
      );
    }

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || "Failed to register user" },
        { status: 500 }
      );
    }

    const data = await response.json();
    //console.log(data)
    const stateData = {
      user: data.user,
      token: data.token,
      isAuthenticated: true,
    };
    //const userData = data.user
    //const token = data.token;

    //setting the auth token
    //setAuthToken(token);
    //setting the user detail
    //setUserData(userData)

    dispatch(loginSuccess(stateData));
    return navigate("/dashboard");
  } catch (error) {
    console.log("Login User error: ", error);
  }
};

/**
 * A logout function to remove the authentication token from the browser abd redirect to the home page
 */
export const logout = (dispacth) => {
  //localStorage.removeItem("token")
  //localStorage.removeItem("user")
  dispacth(logoutSuccess());
  redirect("/");
};
