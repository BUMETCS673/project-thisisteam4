/* eslint-disable no-undef */
const API_URL=""
import { redirect, json } from "react-router-dom";
import { setAuthToken } from "./helpers";

/**
 * A user registration Http request function 
 * @param {object} values - user data which come from the form submission using Formik
 * @param {object} actions - set of actions provided by Formik library 
 */
export const registerUser = async (values, actions) => {
  try {
    const response = await fetch(`${API_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    //checking if the request is Bad Request with wrong user input data
    if (response.status == 400 || response.status == 401 || response.status == 422) {
      const data = response.json();
      const message = data.message;
      if (message.toLowerCase().includes("first name")) {
        actions.setFieldError("firstName", message);
      } else if (message.toLowerCase().includes("last name")) {
        actions.setFieldError("lastName", message);
      } else if (message.toLowerCase().includes("email")) {
        actions.setFieldError("email", message);
      } else if (message.toLowerCase().includes("password")) {
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

    return redirect("/")
  } catch (error) {
    console.log("Register user error: ", error);
  }
};

/**
 * User Login Http request function
 * @param {object} values - user data which come from the form submission using Formik
 * @param {object} actions - set of actions provided by Formik library 
 */
export const loginUser = async (values, actions) => {
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

        if (message.toLowerCase().includes("email")) {
          actions.setFieldError("email", message);
        } else if (message.toLowerCase().includes("password")) {
          actions.setFieldError("password", message);
        } else if (message.toLowerCase().includes("creditinals")) {
          actions.setFieldError("email", message);
          actions.setFieldError("password", message);
        }
        actions.setSubmitting(false);
        return response;
      }

      //checking if the request has a failed response
      if (!response.ok) {
        throw json(
          { message: response.message || "Failed to register user" },
          { status: 500 }
        );
      }

      const data = response.json()
      const token = data.token

      //setting the auth token
      setAuthToken(token)

      return redirect("/")
    }catch(error){
        console.log("Login User error: ", error)
    }
}

/**
 * A logout function to remove the authentication token from the browser abd redirect to the home page
 */
export const logout = () => {
    localStorage.removeItem("token")
    redirect("/")
}