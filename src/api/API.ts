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

export const login = async (email: string, password: string) => {
  if (!email) {
    throw new Error("Email is required");
  } else if (!password) {
    throw new Error("Password is required");
  }

  const response = await fetch(`${BASEURL}/auth/login`, {
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

export const logout = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

    const response = await fetch(`${BASEURL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to logout");
    }

    return response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error(
        "Request timed out. Please check your internet connection."
      );
    } else if (error.message === "Failed to fetch") {
      throw new Error("Network error. Please check your internet connection.");
    } else {
      throw error;
    }
  }
};

export const forgotPassword = async (email: string) => {
  if (!email) {
    throw new Error("Email is required");
  } else if (!email.includes("@")) {
    throw new Error("Invalid email format");
  }

  const response = await fetch(`${BASEURL}/auth/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (response.status === 400) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
};
