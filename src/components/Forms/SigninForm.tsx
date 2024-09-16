"use client";

import Link from "next/link";
import { useFormState } from "react-dom";

import { loginUserAction } from "@/data/actions/auth-actions";
import ZodErrors from "./components/ZodErrors";
import { SubmitButton } from "./components/SubmitButton";
import { StrapiErrors } from "./components/StrapiErrors";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

const SigninForm = () => {
  const [formState, formAction] = useFormState(loginUserAction, INITIAL_STATE);

  return (
    <div className="w-full max-w-md">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action={formAction}
      >
        <div className="mb-4">
          <header className="space-y-1">
            <title className="text-3xl font-bold">Sign In</title>
            <label>Enter your details to sign in to your account</label>
          </header>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="username or email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ZodErrors error={formState?.zodErrors?.identifier} />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ZodErrors error={formState?.zodErrors?.password} />
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <SubmitButton
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              text="Sign In"
              loadingText="Loading"
            />
            <StrapiErrors error={formState?.strapiErrors} />
          </div>
        </div>
        <div className="mt-4 text-center text-gray-700 text-sm">
          Don't have an account?
          <Link className="underline ml-2" href="signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
