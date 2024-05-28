import Header from "@/app/components/header";
import Input from "@/app/components/input";
import React from "react";

function SignInPage() {
  return (
    <div className="h-screen w-screen  flex flex-col justify-center items-center gap-5">
      <Header
        heading="Login to your account"
        paragraph="Register as an Admin or add employee"
        linkName=" Signup"
        linkUrl="/sign_up"
      />
      <form className="space-y-3 p-4">
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
    </div>
  );
}
export default SignInPage;
