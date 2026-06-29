import Link from "next/link";
import { signup } from "@/app/actions/auth";
import { AuthForm } from "@/components/auth-form";

type SignupPageProps = {
  searchParams: Promise<{ error?: string; message?: string }>;
};

export default async function SignupPage({ searchParams }: SignupPageProps) {
  const { error, message } = await searchParams;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="flex w-full max-w-sm flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Create account</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Sign up with email. You may need to confirm your email before signing in.
        </p>
      </div>

      <AuthForm action={signup} submitLabel="Sign up" error={error} message={message} passwordAutoComplete="new-password" />

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-neutral-900 underline dark:text-neutral-100">
          Sign in
        </Link>
      </p>
    </main>
  );
}
