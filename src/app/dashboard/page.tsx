import Link from "next/link";
import { signOut } from "@/app/actions/auth";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="flex w-full max-w-lg flex-col gap-4 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          You are signed in as <span className="font-medium text-neutral-900 dark:text-neutral-100">{user?.email}</span>.
        </p>
        <p className="text-xs text-neutral-500">User ID: {user?.id}</p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            Home
          </Link>
          <form action={signOut}>
            <button
              type="submit"
              className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
