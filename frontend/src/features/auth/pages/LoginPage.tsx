import { useState } from "react";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { LoginHero } from "../components/LoginHero";
import { useAuth } from "../context/AuthContext";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleLogin(event?: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    setError("");
    setIsLoading(true);

    const success = signIn(trimmedEmail);

    if (!success) {
      setIsLoading(false);
      setError("User not found");
      return;
    }

    navigate("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-2 py-6 sm:px-4 lg:px-6">
      <div className="w-full max-w-[1500px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-slate-950/40 lg:grid lg:grid-cols-[1.55fr_0.95fr]">
        <LoginHero />

        <div className="flex items-center justify-center bg-slate-900 p-6 sm:p-8 lg:p-10">
          <div className="w-full max-w-md animate-[fadeIn_0.6s_ease-out]">
            <form onSubmit={handleLogin} className="w-full" noValidate>
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                  DC CLOUD ACADEMY
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Welcome back
                </h1>
                <p className="mt-3 text-sm text-slate-400 sm:text-base">
                  Sign in to continue your learning journey.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    Email address
                  </label>

                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                      <Mail className="h-4 w-4" />
                    </span>

                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (error) {
                          setError("");
                        }
                      }}
                      placeholder="name@example.com"
                      type="email"
                      autoComplete="email"
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? "email-error" : undefined}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-11 pr-4 text-base text-white placeholder:text-slate-500 transition-all duration-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>

                  <p className="mt-2 text-xs text-slate-400">Use your registered DC Cloud Academy account</p>

                  {error && (
                    <p id="email-error" className="mt-2 text-sm text-red-400">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-orange-500 px-5 py-3.5 text-base font-semibold text-slate-950 transition-all duration-200 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 disabled:cursor-not-allowed disabled:bg-orange-400/70"
                >
                  {isLoading ? "Signing in..." : "Continue"}
                </button>
              </div>
            </form>

            <div className="mt-8 border-t border-slate-800 pt-5 text-center text-sm text-slate-400">
              Learn • Build • Deploy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}