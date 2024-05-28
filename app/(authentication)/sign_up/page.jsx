"use client";

import Header from "@/app/components/header";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/app/components/input";

function SignUpPage() {
  const [error, setError] = useState();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    othernames: "",
    dateOfBirth: "",
    email: "",
    password: "",
    gender: "",
    department: "",
    address: "",
    role: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(form);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json(); // Parse response body as JSON

      console.log(data);

      if (res.status === 400) {
        setError("Email is already registered");
      } else if (res.status === 201) {
        setError("");
        router.push("/sign_in");
      } else {
        setError("Error, try again");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className=" h-screen w-screen justify-center items-center flex flex-col gap-2">
      <Header
        heading="Register as Admin OR Add Employee"
        paragraph="Have an account? "
        linkName="Signin"
        linkUrl="/sign_in"
      />
      <form
        className="space-y-3 w-full p-4  sm:h-fit sm:p-0 sm:w-1/4 "
        onSubmit={submitHandler}
      >
        <div className="flex flex-col sm:flex-row gap-3 justify-between">
          <Input
            labelFor="Firstname"
            placeholder="Firstname"
            labelText="firstname"
            type="text"
            name="firstname"
            handleChange={handleChange}
          />
          <Input
            labelFor="Lastname"
            placeholder="Lastname"
            labelText="lastname"
            type="text"
            name="lastname"
            handleChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row justify-between">
          <Input
            labelFor="Othernames"
            placeholder="Othernames (optional)"
            labelText="othernames"
            type="text"
            name="othernames"
            handleChange={handleChange}
          />
          <Input
            labelFor="Date of Birth"
            placeholder="Date of Birth"
            labelText="date of birth"
            type="date"
            name="dateOfBirth"
            handleChange={handleChange}
          />
        </div>

        <Input
          labelFor="Email"
          placeholder="Email"
          labelText="email"
          type="email"
          customWidth="full"
          name="email"
          handleChange={handleChange}
        />
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <Input
            labelFor="Password"
            placeholder="Password"
            labelText="password"
            type="password"
            name="password"
            handleChange={handleChange}
          />
          <select
            id="Gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="rounded-lg  relative block w-[100%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          >
            <option value="" selected disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <select
          id="Department"
          name="department"
          value={form.department}
          onChange={handleChange}
          className="rounded-lg  relative block w-[100%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        >
          <option value="" selected disabled>
            Select Department
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <textarea
          id="Address"
          name="address"
          onChange={handleChange}
          placeholder="Enter address"
          className="w-full h-[30%] rounded-lg  relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        ></textarea>

        <div className="flex gap-4">
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            className="rounded-lg  relative block w-[70%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          >
            <option value="" selected disabled>
              Role
            </option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
          <button
            type="submit"
            className="bg-green-500 w-[30%] text-white rounded-lg hover:bg-green-600 transition-all duration-1000"
          >
            Submit
          </button>
        </div>
        <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
      </form>
    </div>
  );
}

export default SignUpPage;
