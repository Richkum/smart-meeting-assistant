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
  login: async (email: string, password: string) => {
    const response = await fetch(`${BASEURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }

    return response.json();
  },
  logout: async () => {
    const response = await fetch(`${BASEURL}/auth/logout`, {
      method: "POST",
    });

    if (!response.ok) {
      throw new Error("Failed to logout");
    }

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

  resetPassword: async (email: string) => {
    if (!email) {
      throw new Error("Email is required");
    }

    try {
      const response = await fetch(`${BASEURL}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Failed to reset password");
      }

      return await response.json();
    } catch (error) {
      console.error("Error in resetPassword:", error);
      throw error;
    }
  },
};
