import { Request, Response } from "express";

const createMeeting = async (req: Request, res: Response) => {
  try {
    // Get the request body
    const { title, description, date, startTime, endTime, location } = req.body;

    // Create the meeting in the database
    const meeting = await prisma.meeting.create({
      data: {
        title,
        description,
        date,
        startTime,
        endTime,
        location,
      },
    });

    // Return the meeting as a JSON object
    res.json(meeting);
  } catch (error) {
    // Log the error to the console
    console.error("Error creating the meeting:", error);

    // Return an error response
    res.status(500).json({ error: "Failed to create the meeting" });
  }
};
//    * Gets the user's profile by sending a GET request to the /auth/me endpoint.
