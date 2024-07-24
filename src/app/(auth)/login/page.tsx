import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { LoginForm } from "./login-form";
import loginImage from "@/assets/login-image.jpg";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex size-full max-h-[40rem] max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-center font-serif text-3xl font-bold">
            Login to Bugbook
          </h1>
          <div className="space-y-5">
            <LoginForm />
            <div className="flex w-full items-center justify-center">
              <Link
                href="/signup"
                className="block text-center hover:underline"
              >
                Don&apos;t have an account? Sign Up
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={loginImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
