"use client";

import { useState } from "react";
import Input from "./input";
import { useRouter } from "next/navigation";

export default function SignUpForm({ submitHandler, error }) {
  return (
    <form className="space-y-4 " onSubmit={submitHandler}>
      <div className="flex gap-5 justify-between">
        <Input
          labelFor="Firstname"
          placeholder="Firstname"
          labelText="firstname"
          type="text"
          customWidth="[50%]"
        />
        <Input
          labelFor="Lastname"
          placeholder="Lastname"
          labelText="lastname"
          type="text"
          customWidth="[50%]"
        />
      </div>
      <div className="flex justify-between">
        <Input
          labelFor="Othernames"
          placeholder="Othernames (optional)"
          labelText="othernames"
          type="text"
        />
        <Input
          labelFor="Date of Birth"
          placeholder="Date of Birth"
          labelText="date of birth"
          type="date"
        />
      </div>

      <Input
        labelFor="Email"
        placeholder="Email"
        labelText="email"
        type="email"
        customWidth="full"
      />
      <div className="flex justify-between gap-3">
        <Input
          labelFor="Password"
          placeholder="Password"
          labelText="password"
          type="password"
        />
        <select
          id="Gender"
          className="rounded-lg  relative block w-[70%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
        className="rounded-lg  relative block w-[70%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
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
        className="w-full h-[30%] rounded-lg  relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
      ></textarea>

      <div className="flex gap-4">
        <select
          id="role"
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
  );
}
