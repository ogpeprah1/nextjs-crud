"use client";

import Header from "@/app/components/header";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/app/components/input";

function SignUpPage() {
  const [error, setError] = useState();
  const [form, setForm] = useState({
    Firstname: "",
    Lastname: "",
    Othernames: "",
    DateOfBirth: "",
    Email: "",
    Password: "",
    Gender: "",
    Address: "",
    Department: "",
    Role: "",
  });

  const router = useRouter();

  // const isEmailValid = (email) => {
  //   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //   return emailRegex.test(email);
  // };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // if (!isEmailValid(form.Email)) {
    //   setError("Email is invalid!");
    //   return;
    // }

    // if (!form.Password || form.Password.length < 8) {
    //   setError("Password is invalid!");
    //   return;
    // }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.status === 400) {
        setError("Email is already registed");
      }
      if (res.status === 200) {
        setError("");
        router.push("/sign_in");
      }
      const data = await res.json();
      return Response.json(data);
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-800  justify-center items-center flex flex-col gap-2 sm:">
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
            name="Firstname"
            onChange={handleChange}
          />
          <Input
            labelFor="Lastname"
            placeholder="Lastname"
            labelText="lastname"
            type="text"
            name="Lastname"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-3 sm:flex-row justify-between">
          <Input
            labelFor="Othernames"
            placeholder="Othernames (optional)"
            labelText="othernames"
            type="text"
            name="Othernames"
            onChange={handleChange}
          />
          <Input
            labelFor="Date of Birth"
            placeholder="Date of Birth"
            labelText="date of birth"
            type="date"
            name="Date"
            onChange={handleChange}
          />
        </div>

        <Input
          labelFor="Email"
          placeholder="Email"
          labelText="email"
          type="email"
          customWidth="full"
          name="Email"
          onChange={handleChange}
        />
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <Input
            labelFor="Password"
            placeholder="Password"
            labelText="password"
            type="password"
            name="Password"
            onChange={handleChange}
          />
          <select
            id="Gender"
            name="Gender"
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
          id="Departments"
          name="Gender"
          onChange={handleChange}
          className="rounded-lg  relative block w-[100%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        >
          <option value="" selected disabled>
            Select Department
          </option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>

        <textarea
          id="Address"
          name="Address"
          onChange={handleChange}
          placeholder="Enter address"
          className="w-full h-[30%] rounded-lg  relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        ></textarea>

        <div className="flex gap-4">
          <select
            id="role"
            name="Role"
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
