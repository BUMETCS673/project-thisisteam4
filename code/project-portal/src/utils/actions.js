import axios from "axios";

export const registerUser = (values, actions, navigate) => {
  return () => {
    axios
      .post("", values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === false) {
          const { message } = data;
          if (message.includes("first name")) {
            actions.setFieldError("firstName", message);
          } else if (message.includes("last name")) {
            actions.setFieldError("lastName", message);
          } else if (message.includes("email")) {
            actions.setFieldError("email", message);
          } else if (message.includes("password")) {
            actions.setFieldError("password", message);
          }
          actions.setSubmitting(false);
        } else if (data.status === true) {
          navigate();
        }
      })
      .catch((error) => {
        console.log(error);
        actions.setSubmitting(false);
      });
  };
};

export const loginUser = (values, actions, navigate) => {
  return () => {
    axios
      .post("", values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === false) {
          const { message } = data;
          if (message.includes("creditinals")) {
            actions.setFieldError("email", message);
            actions.setFieldError("password", message);
          } else if (message.includes("password")) {
            actions.setFieldError("password", message);
          } else if (message.includes("email")) {
            actions.setFieldError("email", message);
          }
          actions.setSubmitting(false);
        } else if (data.status === true) {
          const user = data.data[0];
          const token = user.id;
        }
      })
      .catch((error) => {
        console.log(error);
        actions.setSubmitting(false);
      });
  };
};
