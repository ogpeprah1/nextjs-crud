import bcrypt from "bcryptjs";
import UserModel from "@/models/User";

export default async (req, res) => {
  // Ensure only POST requests are allowed

  // Ensure request body exists and parse it as JSON

  if (req.method === "POST") {
    try {
      const {
        firstname,
        lastname,
        othernames,
        dateOfBirth,
        email,
        password,
        gender,
        department,
        address,
        role,
      } = req.body;

      console.log(req.body);

      if (
        !firstname ||
        !lastname ||
        !email ||
        !password ||
        !gender ||
        !address ||
        !role
      ) {
        return res
          .status(400)
          .json({ message: "Please fill in all required fields" });
      }
      // Check if the user already exists
      const existingUser = await UserModel.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 5);

      // Create a new user
      const newUser = new UserModel({
        firstname,
        lastname,
        othernames,
        dateOfBirth,
        email,
        password: hashedPassword,
        gender,
        department,
        address,
        role,
      });

      // Save the user to the database
      await newUser.save();

      return res
        .status(201)
        .json({ message: `User ${role} successfully added` });
    } catch (error) {
      console.error("Error while saving user:", error);
      return res.status(500).json({
        message:
          "An error occurred while creating the user. Please try again later.",
      });
    }
  }
};
