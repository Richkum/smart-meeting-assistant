const BASEURL = "http://localhost:3000";

/**
 * Registers a new user with the provided email and password.
 *
 * @param email - The email address of the user to register.
 * @param password - The password of the user to register.
 *
 * @throws {Error} - If the email or password is not provided.
 * @throws {Error} - If the password is less than 8 characters.
 *
 * @returns {Promise<object>} - The response from the API, which includes the
 * newly registered user's id and email.
 */
export const register = async (
  email: string,
  password: string
): Promise<object> => {
  // Check if the email is empty
  if (!email) {
    throw new Error("Email is required");
  }

  // Check if the password is empty
  if (!password) {
    throw new Error("Password is required");
  }

  // Check if the password is at least 8 characters
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }

  // Send a POST request to the API to register the user
  const response = await fetch(`${BASEURL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  // If the response is a 400, throw an error
  if (response.status === 400) {
    const error = await response.json();
    throw new Error(error.message);
  }

  // Return the response from the API
  return response.json();
};

export const login = async (email: string, password: string) => {
  // Check if the email is empty
  if (!email) {
    throw new Error("Email is required");
  }

  // Check if the password is empty
  if (!password) {
    throw new Error("Password is required");
  }

  // Send a POST request to the API to login the user
  const response = await fetch(`${BASEURL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  // If the response is a 400, throw an error
  if (response.status === 400) {
    const error = await response.json();
    throw new Error(error.message);
  }

  // Return the response from the API
  return response.json();
};

export const logout = async () => {
  try {
    // Set a 10 second timeout for the request
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    // Send a POST request to the API to logout the user
    const response = await fetch(`${BASEURL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Set the signal of the request to the controller
      signal: controller.signal,
    });

    // Clear the timeout
    clearTimeout(timeoutId);

    // If the response is not OK, throw an error
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to logout");
    }

    // Return the response from the API
    return response.json();
  } catch (error) {
    // If the error is an AbortError (timeout), throw an error with a message
    if (error.name === "AbortError") {
      throw new Error(
        "Request timed out. Please check your internet connection."
      );
    }
    // If the error is a network error, throw an error with a message
    else if (error.message === "Failed to fetch") {
      throw new Error("Network error. Please check your internet connection.");
    }
    // If the error is any other type, throw the error
    else {
      throw error;
    }
  }
};

export const forgotPassword = async (email: string) => {
  // Check if the email is empty
  if (!email) {
    throw new Error("Email is required");
  }

  // Check if the email is in the correct format
  else if (!email.includes("@")) {
    throw new Error("Invalid email format");
  }

  // Send a POST request to the API to send a password reset email
  const response = await fetch(`${BASEURL}/auth/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  // If the response is a 400, throw an error
  if (response.status === 400) {
    const error = await response.json();
    throw new Error(error.message);
  }

  // Return the response from the API
  return response.json();
};

export const resetPassword = async (token: string, newPassword: string) => {
  // Check if the token is empty
  if (!token) {
    throw new Error("Token is required");
  }

  // Check if the new password is empty
  if (!newPassword) {
    throw new Error("New password is required");
  }
  // Check if the new password is at least 8 characters
  else if (newPassword.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }

  // Send a POST request to the API to reset the user's password
  const response = await fetch(`${BASEURL}/auth/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, newPassword }),
  });

  // If the response is a 400, throw an error
  if (response.status === 400) {
    const error = await response.json();
    throw new Error(error.message);
  }

  // Return the response from the API
  return response.json();
};

export const changePassword = async (
  oldPassword: string,
  newPassword: string
) => {
  // Check if the old password is empty
  if (!oldPassword) {
    throw new Error("Old password is required");
  }

  // Check if the new password is empty
  if (!newPassword) {
    throw new Error("New password is required");
  }
  // Check if the new password is at least 8 characters
  else if (newPassword.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }

  // Send a POST request to the API to change the user's password
  const response = await fetch(`${BASEURL}/auth/change-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ oldPassword, newPassword }),
  });

  // If the response is a 400, throw an error
  if (response.status === 400) {
    const error = await response.json();
    throw new Error(error.message);
  }

  // Return the response from the API
  return response.json();
};
