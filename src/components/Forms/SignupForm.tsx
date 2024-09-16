"use client";

import { registerUserAction } from "@/data/actions/auth-actions";

import Link from "next/link";
import { useFormState } from "react-dom";

import { StrapiErrors } from "./components/StrapiErrors";
import ZodErrors from "./components/ZodErrors";
import { SubmitButton } from "./components/SubmitButton";

const INITIAL_STATE = null;

const SignupForm = () => {
  const [formState, formAction] = useFormState(
    registerUserAction,
    INITIAL_STATE
  );

  return (
    <div className="w-full max-w-md">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action={formAction}
      >
        <div>
          <header className="space-y-1">
            <title className="text-3xl font-bold">Sign Up</title>
            <label>Enter your details to create a new account</label>
          </header>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ZodErrors error={formState?.zodErrors?.username} />
            </div>
            <div className="space-y-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ZodErrors error={formState?.zodErrors?.email} />
            </div>
            <div className="space-y-2">
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ZodErrors error={formState?.zodErrors?.password} />
            </div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <SubmitButton
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              text="Sign Up"
              loadingText="Loading"
            />
            <StrapiErrors error={formState?.strapiErrors} />
          </div>
        </div>
        <div className="mt-4 text-center text-gray-700 text-sm">
          Have an account?
          <Link className="underline ml-2" href="signin">
            Sing In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
