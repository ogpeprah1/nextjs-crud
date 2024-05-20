import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
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
  } = await request.json();

  await connect();

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
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
