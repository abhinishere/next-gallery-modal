"use client";

import Link from "next/link";
import { SignUpForm } from "@/components/sign-up-form";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";

export default function SignUpPage() {
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
          <h1 className="text-2xl font-semibold tracking-tight">Hello there</h1>
          <p className="text-sm text-muted-foreground">
            Enter email and password to create an account
          </p>
        </div>
        <SignUpForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/signin"
            className="hover:text-brand underline underline-offset-4"
          >
            Already have an account? Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
