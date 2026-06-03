"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        className="border p-2 mt-4 block"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 mt-2 block"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4"
        onClick={() =>
          signIn("credentials", {
            email,
            password,
            callbackUrl: "/",
          })
        }
      >
        Login
      </button>

      <p className="mt-4 text-sm">
        Admin: admin@demo.com / admin <br />
        User: user@demo.com / user
      </p>
    </div>
  );
}