export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">My App</h1>
      <p className="max-w-md text-center text-neutral-600 dark:text-neutral-400">
        Next.js + TypeScript + Tailwind + Supabase. Copy{" "}
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
          .env.local.example
        </code>{" "}
        to{" "}
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
          .env.local
        </code>{" "}
        and add your Supabase credentials.
      </p>
    </main>
  );
}
