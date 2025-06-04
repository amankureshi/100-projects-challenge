import { useEffect, useState } from "react";
import loader from "./assets/spiner.gif";
import "./App.css";

function App() {
  const [username, setUsername] = useState('');
  const [pageLoader, setPageLoader] = useState(true);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ username: "", password: "" });

  const validateForm = () => {
    let usernameError = "";
    let passwordError = "";

    if (username.trim() === '') {
      usernameError = "Please enter your username";
    }
    if (password.trim().length < 6) {
      passwordError = "Password must be at least 6 characters long";
    }

    setError({ username: usernameError, password: passwordError });

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
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
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
        setPageLoader(false);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error: any) {
      alert("Login Error: " + error.message);
      setPageLoader(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setUserInfo(JSON.parse(user));
      setLoggedIn(true);
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
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex justify-center items-center px-4">
      {pageLoader ? (
        <div className="flex justify-center items-center">
          <img src={loader} alt="Loading..." />
        </div>
      ) : !loggedIn ? (
        <div className="flex flex-col items-center w-full max-w-md">
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded text-sm w-full">
            <p><strong>Demo Instructions:</strong></p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>This is a <strong>demo login</strong> using mock data from JSONPlaceholder.</li>
              <li>Enter a valid username and their email as the password.</li>
              <li><strong>Example:</strong></li>
              <ul className="pl-4 mt-1">
                <li>Username: <code className="bg-gray-200 px-1 rounded">Bret</code></li>
                <li>Password: <code className="bg-gray-200 px-1 rounded">Sincere@april.biz</code></li>
              </ul>
              <li>Full list: <a href="https://jsonplaceholder.typicode.com/users" target="_blank" rel="noreferrer" className="text-blue-600 underline">Click here</a></li>
            </ul>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Login</h1>

          <form className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-gray-700 dark:text-white">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
                placeholder="Enter your username"
              />
              {error.username && <p className="text-red-500 text-sm">{error.username}</p>}
            </div>

            <div>
              <label className="block mb-1 text-gray-700 dark:text-white">Password (Email)</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
                placeholder="e.g., Sincere@april.biz"
              />
              {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-8 rounded shadow-lg max-w-sm w-full">
          <img
            className="w-24 h-24 mb-4 rounded-full shadow"
            src={userInfo.image}
            alt="User"
          />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{userInfo.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">@{userInfo.username}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{userInfo.profession}</p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Log Out
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
