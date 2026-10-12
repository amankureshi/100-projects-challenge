import { useEffect, useState } from "react";
import loader from "./assets/spiner.gif";

function App() {
  const [username, setUsername] = useState("");
  const [pageLoader, setPageLoader] = useState(true);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const validateForm = () => {
    let usernameError = "";
    let passwordError = "";

    if (username.trim() === "") {
      usernameError = "Please enter your username";
    }

    if (password.trim().length < 6) {
      passwordError = "Password must be at least 6 characters long";
    }

    setError({
      username: usernameError,
      password: passwordError,
    });

    return !usernameError && !passwordError;
  };

  const getProfession = (id: number) => {
    const professions = [
      "Software Engineer",
      "Graphic Designer",
      "Data Analyst",
      "Product Manager",
      "UX/UI Designer",
      "DevOps Engineer",
      "Marketing Specialist",
      "Content Writer",
      "Mobile Developer",
      "Cybersecurity Expert",
    ];

    return professions[(id - 1) % professions.length];
  };

  const handleLogin = async () => {
    setPageLoader(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Unable to fetch users. Please try again.");
      }

      const users = await response.json();

      const enhancedUsers = users.map((user: any) => ({
        ...user,
        image: `https://i.pravatar.cc/150?u=${user.id}`,
        profession: getProfession(user.id),
      }));

      const foundUser = enhancedUsers.find(
        (user: any) =>
          user.username === username && user.email === password
      );

      if (foundUser) {
        const fakeToken = "mockToken123";

        localStorage.setItem("token", fakeToken);
        localStorage.setItem("user", JSON.stringify(foundUser));

        setUserInfo(foundUser);
        setLoggedIn(true);
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (error: any) {
      alert("Login Error: " + error.message);
    } finally {
      setPageLoader(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      try {
        setUserInfo(JSON.parse(user));
        setLoggedIn(true);
      } catch {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }

    setPageLoader(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      handleLogin();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setLoggedIn(false);
    setUserInfo(null);
    setUsername("");
    setPassword("");
    setShowPassword(false);
    setError({ username: "", password: "" });
  };

  const fillDemoCredentials = () => {
    setUsername("Bret");
    setPassword("Sincere@april.biz");
    setError({ username: "", password: "" });
  };

  if (pageLoader) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50">
        <img
          src={loader}
          alt="Loading..."
          className="h-12 w-12 object-contain"
        />
        <p className="text-sm font-medium text-slate-500">
          Please wait...
        </p>
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-10 sm:px-6">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />

      {!loggedIn ? (
        <section className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-200/60 md:grid-cols-2">
          {/* Left branding panel */}
          <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-10 text-white md:flex lg:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-8 top-20 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-white/5" />

            <div className="relative z-10 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold text-blue-700 shadow-lg">
                S
              </div>
              <div>
                <p className="text-lg font-bold tracking-wide">
                  SecureSpace
                </p>
                <p className="text-xs text-blue-200">
                  Personal account portal
                </p>
              </div>
            </div>

            <div className="relative z-10 my-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-blue-100">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                YOUR SPACE. YOUR PROFILE.
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
                Everything starts with a
                <span className="mt-2 block text-blue-300">
                  simple sign in.
                </span>
              </h1>

              <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/80">
                Access your personal profile and professional details
                through one simple, intuitive dashboard.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm">
                    ✓
                  </span>
                  <span className="text-sm text-blue-50">
                    Simple and intuitive experience
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm">
                    ✓
                  </span>
                  <span className="text-sm text-blue-50">
                    Your profile details in one place
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm">
                    ✓
                  </span>
                  <span className="text-sm text-blue-50">
                    Easy access to your account
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 border-t border-white/15 pt-5">
              <p className="text-xs text-blue-200">
                © 2026 SecureSpace. Demo application.
              </p>
            </div>
          </div>

          {/* Login form */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mb-8 flex items-center gap-3 md:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-lg font-bold text-white">
                S
              </div>
              <div>
                <p className="font-bold text-slate-900">SecureSpace</p>
                <p className="text-xs text-slate-500">
                  Personal account portal
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-2xl text-blue-700">
                <span aria-hidden="true">↗</span>
              </div>

              <p className="mb-2 text-sm font-semibold text-blue-700">
                WELCOME BACK
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Sign in
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your account details to continue to your dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Username
                </label>

                <div
                  className={`flex items-center rounded-xl border bg-white transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 ${error.username ? "border-red-400" : "border-slate-200"
                    }`}
                >
                  <span className="pl-4 text-lg text-slate-400">@</span>
                  <input
                    id="username"
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (error.username) {
                        setError((prev) => ({ ...prev, username: "" }));
                      }
                    }}
                    placeholder="Enter your username"
                    className="w-full rounded-xl bg-transparent px-3 py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>

                {error.username && (
                  <p className="mt-2 text-xs font-medium text-red-600">
                    {error.username}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                  <span className="ml-1 font-normal text-slate-400">
                    (Email for demo)
                  </span>
                </label>

                <div
                  className={`flex items-center rounded-xl border bg-white pr-3 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 ${error.password ? "border-red-400" : "border-slate-200"
                    }`}
                >
                  <span className="pl-4 text-lg text-slate-400">⌑</span>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error.password) {
                        setError((prev) => ({ ...prev, password: "" }));
                      }
                    }}
                    placeholder="Enter your password"
                    className="w-full min-w-0 rounded-xl bg-transparent px-3 py-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="shrink-0 rounded-md px-1 py-2 text-xs font-semibold text-blue-700 hover:text-blue-900"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {error.password && (
                  <p className="mt-2 text-xs font-medium text-red-600">
                    {error.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99]"
              >
                Sign In
                <span aria-hidden="true">→</span>
              </button>
            </form>

            {/* Demo credentials */}
            <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-800">
                    Demo account
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Try the app using the sample credentials.
                  </p>
                </div>

                <span className="shrink-0 rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-700">
                  Demo
                </span>
              </div>

              <div className="mt-4 space-y-3 rounded-xl border border-slate-200 bg-white p-3">
                <div>
                  <p className="text-xs text-slate-500">Username</p>
                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    Bret
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <p className="text-xs text-slate-500">Password</p>
                  <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                    Sincere@april.biz
                  </p>
                </div>

                <button
                  type="button"
                  onClick={fillDemoCredentials}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-3 py-2.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
                >
                  Fill Demo Credentials
                </button>
              </div>

              <a
                href="https://jsonplaceholder.typicode.com/users"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-blue-700 hover:text-blue-900 hover:underline"
              >
                View all demo users <span>↗</span>
              </a>
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-400">
              <span aria-hidden="true">●</span>
              Demo authentication · Sample user data
            </div>
          </div>
        </section>
      ) : (
        /* Professional profile dashboard */
        <section className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          <div className="bg-blue-800 px-6 py-6 text-white sm:px-9">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold text-blue-800">
                  S
                </div>
                <div>
                  <h1 className="font-bold">SecureSpace</h1>
                  <p className="mt-0.5 text-xs text-blue-200">
                    Personal dashboard
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium">
                Account
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-9">
            <div className="flex flex-col gap-5 border-b border-slate-100 pb-7 sm:flex-row sm:items-center">
              <img
                src={userInfo.image}
                alt={userInfo.name}
                className="h-24 w-24 rounded-2xl border border-slate-200 bg-slate-50 object-cover"
              />

              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <span>✓</span> Successfully signed in
                </span>

                <h2 className="mt-3 break-words text-2xl font-bold text-slate-900">
                  {userInfo.name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  @{userInfo.username}
                </p>

                <p className="mt-2 text-sm font-medium text-blue-700">
                  {userInfo.profession}
                </p>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-base font-bold text-slate-900">
                Profile information
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Your account details at a glance.
              </p>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Full name
                  </p>
                  <p className="mt-2 break-words text-sm font-semibold text-slate-800">
                    {userInfo.name}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Email address
                  </p>
                  <p className="mt-2 break-all text-sm font-semibold text-slate-800">
                    {userInfo.email}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Phone number
                  </p>
                  <p className="mt-2 break-words text-sm font-semibold text-slate-800">
                    {userInfo.phone}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-medium text-slate-500">
                    Website
                  </p>
                  <p className="mt-2 break-words text-sm font-semibold text-slate-800">
                    {userInfo.website}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-400">
                SecureSpace · Demo profile
              </p>

              <button
                onClick={handleLogout}
                className="rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-4 focus:ring-red-100"
              >
                Log Out
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;