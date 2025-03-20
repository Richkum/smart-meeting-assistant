const BASEURL = "http://localhost:3000";

export const register = async (email: string, password: string) => {
  if (!email) {
    throw new Error("Email is required");
  }

  if (!password) {
    throw new Error("Password is required");
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }

  const response = await fetch(`${BASEURL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.status === 400) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
};
