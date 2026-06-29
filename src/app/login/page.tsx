import Link from "next/link";
import { login } from "@/app/actions/auth";
import { AuthForm } from "@/components/auth-form";

type LoginPageProps = {
  searchParams: Promise<{ error?: string; next?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { error, next } = await searchParams;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="flex w-full max-w-sm flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Use the email and password for your Supabase account.
        </p>
      </div>

      <AuthForm action={login} submitLabel="Sign in" error={error} redirectTo={next ?? "/dashboard"} />

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        No account yet?{" "}
        <Link href="/signup" className="font-medium text-neutral-900 underline dark:text-neutral-100">
          Sign up
        </Link>
      </p>
    </main>
  );
}
