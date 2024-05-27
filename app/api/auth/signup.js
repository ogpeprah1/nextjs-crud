import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export default async (request, response) => {
  await connectDB();

  const {
    firstname,
    lastname,
    othernames,
    email,
    password,
    DateOfBirth,
    Gender,
    Address,
    Department,
    Role,
  } = await request.body;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !Gender ||
    !Address ||
    !Role
  ) {
    return response.status(400).json({ message: "All * fields are required" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("User already exists", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    firstname,
    lastname,
    othernames,
    email,
    password: hashedPassword,
    DateOfBirth,
    Gender,
    Address,
    Department,
    Role,
  });

  try {
    await newUser.save();
    return new NextResponse(`User ${Role} Successfully added`, {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
