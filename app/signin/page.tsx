"use client";

import Link from "next/link";
import { SignInForm } from "@/components/sign-in-form";
import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Sign In",
//   description: "Login to your account",
// };

export default function SignInPage() {
  const router = useRouter();
  const { user } = useUser();
  if (user) {
    router.push("/");
  }
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <SignInForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/signup"
            className="hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
