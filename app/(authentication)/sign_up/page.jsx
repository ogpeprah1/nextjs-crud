"use client";

import Header from "@/app/components/header";
import React, { useState } from "react";
import SignUpForm from "@/app/components/sign_up_form";
import { useRouter } from "next/navigation";

function SignUpPage() {
  const [error, setError] = useState();
  const router = useRouter();

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const firstname = e.target[0].value;
    const lastname = e.target[1].value;
    const Othernames = e.target[2].value;
    const DateOfBirth = e.target[3].value;
    const Email = e.target[4].value;
    const Password = e.target[5].value;
    const Gender = e.target[6].value;
    const Address = e.target[7].value;
    const Department = e.target[8].value;
    const Role = e.target[9].value;

    if (!isEmailValid(Email)) {
      setError("Email is invalid!");
      return;
    }

    if (!Password || Password.length < 8) {
      setError("Password is invalid!");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          Othernames,
          DateOfBirth,
          Email,
          Password,
          Gender,
          Address,
          Department,
          Role,
        }),
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
    <div className="w-screen h-screen justify-center items-center flex flex-col">
      <Header
        heading="Register as Admin OR Add Employee"
        paragraph="Have an account? "
        linkName="Signin"
        linkUrl="/sign_in"
      />
      <SignUpForm submitHandler={submitHandler} error={error} />
    </div>
  );
}

export default SignUpPage;
