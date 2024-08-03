import { SignIn } from "@clerk/clerk-react";
import React from "react";

const SignInPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <SignIn path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
};

export default SignInPage;
