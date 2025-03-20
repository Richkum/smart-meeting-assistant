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
