import { SignUp } from "@clerk/clerk-react";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="w-full min-h-[100svh] flex justify-center">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
