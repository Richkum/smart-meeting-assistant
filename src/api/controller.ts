import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const startMeeting = async (req: Request, res: Response) => {
  const { title, description, startDate, endDate, startTime, endTime } =
    req.body;

  if (
    !title ||
    !description ||
    !startDate ||
    !endDate ||
    !startTime ||
    !endTime
  ) {
    return res
      .status(400)
      .json({ error: "Bad request. Please provide all required fields" });
  }

  const existingMeeting = await prisma.meeting.findFirst({
    where: {
      OR: [
        {
          title,
        },
        {
          description,
        },
        {
          startDate,
          endDate,
        },
        {
          startTime,
          endTime,
        },
      ],
    },
  });

  if (existingMeeting) {
    return res.status(409).json({ error: "Meeting already exists" });
  }

  try {
    const meeting = await prisma.meeting.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(meeting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const joinMeeting = async (req: Request, res: Response) => {
  try {
    const existingMeeting = await prisma.meeting.findFirst({
      where: {
        OR: [
          { title: req.body.title },
          { description: req.body.description },
          { startDate: req.body.startDate, endDate: req.body.endDate },
          { startTime: req.body.startTime, endTime: req.body.endTime },
        ],
      },
    });

    if (existingMeeting) {
      return res.status(409).json({ error: "Meeting already exists" });
    }

    const meeting = await prisma.meeting.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(meeting);
  } catch (error) {
    if (error instanceof prisma.PrismaClientKnownRequestError) {
      // Handle known client errors
      console.error("Prisma error:", error);
      res.status(400).json({ error: "Bad request" });
    } else if (error.message === "Network Error") {
      // Handle network errors
      console.error("Network error:", error);
      res.status(503).json({
        error: "Service unavailable. Please check your network connection.",
      });
    } else {
      // Handle other errors
      console.error("Unexpected error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

export const closeMeeting = async (req: Request, res: Response) => {
  try {
    const meeting = await prisma.meeting.update({
      where: {
        id: req.params.id,
      },
      data: {
        ended: true,
      },
    });
    res.status(200).json(meeting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const pauseMeeting = async (req: Request, res: Response) => {
  try {
    const meeting = await prisma.meeting.update({
      where: {
        id: req.params.id,
      },
      data: {
        paused: true,
      },
    });
    res.status(200).json(meeting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
