export const sanitizeInput = (input) => {
  const sanitized = input.replace(/<[^>]*>?/gm, "");
  return sanitized;
};
