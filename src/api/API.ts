const BASEURL = "http://localhost:3000";

export const API = {
  register: async (email: string, password: string) => {
    const response = await fetch(`${BASEURL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }

    return response.json();
  },
  /**
   * Logs in the user by sending a POST request to the /auth/login endpoint.
   *
   * @param email - The email address to log in with.
   * @param password - The password to log in with.
   * @returns The response of the request as a JSON object, which contains the user session.
   * @throws An error if the request fails.
   */
  login: async (email: string, password: string) => {
    const response = await fetch(`${BASEURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }

    return response.json();
  },
  /**
   * Logs out the user by sending a POST request to the /auth/logout endpoint.
   *
   * @returns The response of the request as a JSON object.
   * @throws An error if the request fails.
   */
  logout: async () => {
    const response = await fetch(`${BASEURL}/auth/logout`, {
      method: "POST",
    });

    // Check if the response is not OK, and throw an error if so
    if (!response.ok) {
      throw new Error("Failed to logout");
    }

    // Return the response as a JSON object
    return response.json();
  },
  /**
   * Fetches the user information for a specified instance.
   *
   * @param instance - The instance name to fetch the user from. Defaults to "default".
   * @returns The user information as a JSON object.
   * @throws An error if the request fails.
   */
  getUser: async (instance = "default") => {
    // Construct the URL to fetch the user information from
    const response = await fetch(`${BASEURL}/${instance}/auth/user`, {
      method: "GET",
    });

    // Check if the response is not OK, and throw an error if so
    if (!response.ok) {
      throw new Error(`Failed to get user for instance ${instance}`);
    }

    // Return the user information as JSON
    return response.json();
  },

  /**
   * Sends a password reset request for the given email address.
   *
   * @param email - The email address to send the reset password link to.
   * @returns The response of the request as a JSON object.
   * @throws An error if the email is not provided or the request fails.
   */
  resetPassword: async (email: string) => {
    // Ensure the email parameter is provided
    if (!email) {
      throw new Error("Email is required");
    }

    try {
      // Send a POST request to the reset-password endpoint
      const response = await fetch(`${BASEURL}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // Check if the response is not OK, and throw an error if so
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Failed to reset password");
      }

      // Return the response as a JSON object
      return await response.json();
    } catch (error) {
      // Log and rethrow the error
      console.error("Error in resetPassword:", error);
      throw error;
    }
  },

  /**
   * Updates the user's password with the provided token and new password.
   *
   * @param token - The token received from the reset password email.
   * @param password - The new password to update the user's password with.
   * @returns The response of the request as a JSON object.
   * @throws An error if the token or password is not provided, or the request fails.
   */
};
