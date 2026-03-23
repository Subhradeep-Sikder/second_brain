import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BrainIcon } from "../icons/BrainIcon";

const BACKEND_URL = "http://localhost:3000/api/v1";

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");

    try {
      if (isLogin) {
        //SIGN IN
        const response = await axios.post(`${BACKEND_URL}/signin`, {
          username,
          password,
        });

        const token = response.data.token;

        //Safety check
        if (!token) {
          throw new Error("Token not received from backend");
        }

        //save token
        localStorage.setItem("token", token);

        console.log("Saved Token:", token);

        alert("Logged in successfully!");

        // Redirect only if token exists
        navigate("/dashboard");
      } else {
        // SIGN UP
        await axios.post(`${BACKEND_URL}/signup`, {
          username,
          password,
        });

        alert("Account created! You can now sign in.");
        setIsLogin(true);
      }
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-200">
        
        <div className="flex flex-col items-center mb-8">
          <BrainIcon className="w-12 h-12 text-indigo-600 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Start capturing your ideas and building your Second Brain
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
            {error}
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Button
            variant="primary"
            text={isLogin ? "Sign In" : "Sign Up"}
            onClick={handleSubmit}
          />

          <p className="text-center text-sm text-gray-600">
            {isLogin
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-600 font-semibold hover:underline"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}