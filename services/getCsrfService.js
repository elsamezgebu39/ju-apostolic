export const getCsrfToken = async () => {
  const response = await fetch(
    "https://test-mard.artseb.studio/api/csrf-token"
  );
  const { csrfToken } = await response.json();
  return csrfToken;
};
