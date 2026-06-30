import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">Multiply</h1>
      <p className="max-w-md text-center text-neutral-600 dark:text-neutral-400">
        Next.js + TypeScript + Tailwind + Supabase Auth.
      </p>

      {user ? (
        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Signed in as <span className="font-medium text-neutral-900 dark:text-neutral-100">{user.email}</span>
          </p>
          <Link
            href="/dashboard"
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
          >
            Go to dashboard
          </Link>
        </div>
      ) : (
        <div className="flex gap-3">
          <Link
            href="/login"
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            Sign up
          </Link>
        </div>
      )}
    </main>
  );
}
