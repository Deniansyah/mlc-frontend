"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", { username, password });
      localStorage.setItem("token", response.data.token);
      router.push("/labels");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mx-5">
        <h1 className="text-warning text-5xl font-bold mb-5">Selamat Datang!</h1>
        <p className="mb-5 text-xl">Masukan username yang telah didaftarkan</p>
        <input type="text" placeholder="Username" className="input input-bordered w-full mb-2" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className="input input-bordered w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="btn btn-warning text-white w-full my-5">
          Login
        </button>
        <p>Ada kendala silahkan hubungi admin.</p>
      </div>
    </div>
  );
}
