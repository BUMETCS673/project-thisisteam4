const API_URL = "http://localhost:3000";
import { redirect, json } from "react-router-dom";
import { setAuthToken } from "./helpers";
import { loginSuccess, logoutSuccess } from "../store/userSlice";

/**
 * A user registration Http request function 
 * @param {object} values - user data which come from the form submission using Formik
 * @param {object} actions - set of actions provided by Formik library 
 */
export const registerUser = async (values, actions, navigate) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    //checking if the request is Bad Request with wrong user input data
    if (response.status == 400 || response.status == 401 || response.status == 422) {
      const data = await response.json();
      const message = data.message;
      console.log(message)
      if (message.includes("first name")) {
        actions.setFieldError("firstName", message);
      } else if (message.includes("last name")) {
        actions.setFieldError("lastName", message);
      } else if (message.includes("username")){
        actions.setFieldError("username", message)
      }  else if (message.includes("email")) {
        actions.setFieldError("email", message);
      } else if (message.includes("password")) {
        actions.setFieldError("password", message);
      }
      actions.setSubmitting(false);
    }

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || "Failed to register user" },
        { status: 500 }
      );
    }

    return navigate("/login")
  } catch (error) {
    console.log("Register user error: ", error);
  }
};

/**
 * User Login Http request function
 * @param {object} values - user data which come from the form submission using Formik
 * @param {object} actions - set of actions provided by Formik library 
 * @param {function} dispatch - a dispact function to call the reducer function
 */
export const loginUser = async (values, actions,navigate, dispatch) => {
    try {
      const response = await fetch(`${API_URL}/`, {
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
        const data = response.json();
        const message = data.message;

        if (message.includes("email")) {
          actions.setFieldError("email", message);
        } else if (message.includes("password")) {
          actions.setFieldError("password", message);
        } else if (message.includes("creditinals")) {
          actions.setFieldError("email", message);
          actions.setFieldError("password", message);
        }
        actions.setSubmitting(false);
        return response;
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

      const data = response.json();
      const stateData = {
        user: data.user,
        token: data.token,
        isAuthenticated: true
      }
      //const userData = data.user
      const token = data.token;

      //setting the auth token
      setAuthToken(token);
      //setting the user detail
      //setUserData(userData)

      dispatch(loginSuccess(stateData))
      return navigate("/dashboard");
    }catch(error){
        console.log("Login User error: ", error)
    }
}

/**
 * A logout function to remove the authentication token from the browser abd redirect to the home page
 */
export const logout = (dispacth) => {
    localStorage.removeItem("token")
    //localStorage.removeItem("user")
    dispacth(logoutSuccess())
    redirect("/")
}