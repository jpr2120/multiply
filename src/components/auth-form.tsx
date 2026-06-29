type AuthFormProps = {
  action: (formData: FormData) => Promise<void>;
  submitLabel: string;
  error?: string;
  message?: string;
  passwordAutoComplete?: "current-password" | "new-password";
  redirectTo?: string;
};

export function AuthForm({
  action,
  submitLabel,
  error,
  message,
  passwordAutoComplete = "current-password",
  redirectTo,
}: AuthFormProps) {
  return (
    <form action={action} className="flex w-full max-w-sm flex-col gap-4">
      {redirectTo ? <input type="hidden" name="next" value={redirectTo} /> : null}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-neutral-400 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          minLength={6}
          autoComplete={passwordAutoComplete}
          className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none ring-neutral-400 focus:ring-2 dark:border-neutral-700 dark:bg-neutral-900"
        />
      </div>

      {error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
          {error}
        </p>
      ) : null}

      {message ? (
        <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700 dark:bg-green-950 dark:text-green-300">
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
      >
        {submitLabel}
      </button>
    </form>
  );
}
