/**
 * Helper function to sanitize user input from attack (like html tags)
 * @param {string} input - user input 
 * @returns {string} - sanitized string of the user input
 */
export const sanitizeInput = (input) => {
  const sanitized = input.replace(/<[^>]*>?/gm, "");
  return sanitized;
};


// /**
//  * Helper function to store the authorization token in the browser
//  * @param {string} token - authorization token fetched from backend 
//  */
// export const setAuthToken = (token) => {
//   localStorage.setItem("token", token)
// }

// /**
//  * Helper function to get authorization token stored in the browser
//  * @returns {string} - authorization token
//  */
// export const getAuthToken = () => {
//   const token = localStorage.getItem("token")
//   return token
// }

// /**
//  * A loader function to check for authentication token to load routes that need protection
//  */
// export const checkAuth = () => {
//   const token = getAuthToken()

//   if(!token){
//     return redirect("/login")
//   }
// }

// /**
//  * Helper function to store the user detail in the browser
//  * @param {object} - user details fetched from backend 
//  */
// export const setUserData = (userData) => {
//   localStorage.setItem("user", userData)
// }

// /**
//  * Helper function to get user details stored in the browser
//  * @returns {object} - user detail
//  */
// export const getUserData = () => {
//   const user = localStorage.getItem("user")
//   return user
// }
