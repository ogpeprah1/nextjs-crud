"use client";

import Input from "./input";

const customClass = "w-full";

export default function SignInForm() {
  return (
    <form className="space-y-6 w-1/4">
      <Input
        labelFor="Username"
        handleChange={null}
        placeholder="Username"
        labelText="username"
        type="text"
        customWidth="full"
      />
      <Input
        labelFor="Password"
        handleChange={null}
        placeholder="Password"
        labelText="password"
        type="password"
        customWidth="full"
      />
      <div className="flex gap-4">
        <select
          id="role"
          className="rounded-lg w-[70%] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        >
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
    </form>
  );
}
