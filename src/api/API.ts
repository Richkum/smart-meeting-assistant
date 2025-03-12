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
  getUser: async (instance = "default") => {
    const response = await fetch(`${BASEURL}/${instance}/auth/user`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to get user for instance ${instance}`);
    }

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
