/**
 * Helper function to sanitize user input from attack (like html tags)
 * @param {string} input - user input 
 * @returns {string} - sanitized string of the user input
 */
export const sanitizeInput = (input) => {
  const sanitized = input.replace(/<[^>]*>?/gm, "");
  return sanitized;
};


/**
 * Helper function to store the authorization token in the browser
 * @param {string} token - authorization token fetched from backend 
 */
export const setAuthToken = (token) => {
  localStorage.setItem("token", token)
}

/**
 * Helper function to get authorization token stored in the browser
 * @returns {string} - authorization token
 */
export const getAuthToken = () => {
  const token = localStorage.getItem("token")
  return token
}