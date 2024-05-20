import Header from "@/app/components/header";
import React from "react";
import SignInForm from "@/app/components/sign_in_form";

function SignInPage() {
  return (
    <div className="w-screen h-screen justify-center items-center flex flex-col">
      <Header
        heading="Login to your account"
        paragraph="Register as an Admin or add employee"
        linkName="Signup"
        linkUrl="/sign_up"
      />
      <SignInForm />
    </div>
  );
}
export default SignInPage;
