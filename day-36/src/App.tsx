import { useEffect, useState } from "react";
import loader from "./assets/spiner.gif";
import "./App.css";

function App() {

  const [email, setEmail] = useState('');
  const [pageLoader, setPageLoader] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: "", password: "" });

  const validateForm = () => {
    let emailError = "";
    let passwordError = "";

    if (email == '') {
      emailError = "Please Enter email";
    }
    else if (!email.includes("@")) {
      emailError = "Please include @ in the email";
    }
    if (password.length < 3) {
      passwordError = "Password must be at least 6 characters long";
    }
    setError({ email: emailError, password: passwordError });

    return !emailError && !passwordError;
  }

  const getUserProfile = async (token: string) => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch user profile");

      const profile = await response.json();
      // console.log("User Profile:", profile);
      setUserInfo(profile)
      setLoggedIn(true);
      setPageLoader(false);
      return profile;
    } catch (error) {
      console.error("Error fetching user profile:", error.message);
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem('token')
    console.log('localToken', localToken)
    localToken ? getUserProfile(localToken) : setPageLoader(false)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) throw new Error("Login failed");

        const data = await response.json();
        console.log(data);
        getUserProfile(data.access_token)
        setEmail("");
        setPassword("");
        setError({ email: "", password: "" });
        localStorage.setItem("token", data.access_token)
      } catch (error: { message: string }) {
        alert(error.message);
      }
    }
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUserInfo({});
  }
  async function createUser(name, avtar, role) {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
        method: 'POST',
        headers: {
          'Content-type': 'appication/json',
        },
        body: JSON.stringify({
          name,
          avtar,
          role,
        }),
      });
      if (!response.ok) {
        throw new Error('Faild to create')
      }
      const data = await response.json();
      console.log('user created successfullu', data);
      return data;
    }
    catch (error) {
      console.error("Error", error)
    }
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        {pageLoader ? <div className="flex justify-center align-middle"><img src={loader} alt="" /></div> : <>
          {!loggedIn &&
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img
                  className="w-13 mr-2"
                  src="https://img.icons8.com/?size=200&id=7819&format=png&color=EBEBEB"
                  alt="logo"
                />
                Jois Us
              </a>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form
                    className="space-y-4 md:space-y-6"
                    action=""
                    onSubmit={handleSubmit}
                  >
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Your email
                      </label>
                      <input
                        type="text"
                        value={email}
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {error.email && (
                        <p style={{ color: "red", fontSize: "14px" }}>
                          {error.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {error.password && (
                        <p style={{ color: "red", fontSize: "14px" }}>
                          {error.password}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label className="text-gray-500 dark:text-gray-300">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Sign in
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet?{" "}
                      <a
                        href="#"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Sign up
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>}
          {
            loggedIn && userInfo && <div
              className="w-full flex justify-center">
              <div className="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                <div className="flex flex-col items-center pb-10">
                  <img
                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                    src={userInfo.avatar}
                    alt="avatar"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {userInfo.name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {userInfo.role}
                  </span>
                  <div className="flex mt-4 md:mt-6">
                    <button
                      onClick={handleLogout}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
        </>}
      </section>
    </>
  );
}

export default App;
