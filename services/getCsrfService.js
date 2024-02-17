export const getCsrfToken = async () => {
  const response = await fetch("http://localhost:8000/api/csrf-token");
  const { csrfToken } = await response.json();
  return csrfToken;
};
