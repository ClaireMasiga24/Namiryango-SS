"use client";

import { useState } from "react";
import Image from "next/image";

type Role = "student" | "parent" | "teacher" | null;

export default function LoginPage() {
  const [role, setRole] = useState<Role>(null);

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6">

      {/* 🔥 BACKGROUND IMAGE */}
      <Image
        src="/images/Amin-block2-scaled.webp"
        alt="School Background"
        fill
        priority
        className="object-cover"
      />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10">

        {/* ================= ROLE SELECTION ================= */}
        {!role && (
          <>
            <h1 className="text-2xl font-semibold text-center mb-2 text-[#1F6F78]">
              Login Portal
            </h1>

            <p className="text-center text-sm text-gray-600 mb-8">
              Select your role to continue
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

              <button
                onClick={() => setRole("student")}
                className="flex flex-col items-center justify-center h-32 rounded-xl bg-[#1F6F78] text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition-all"
              >
                <span className="text-2xl">🎓</span>
                <span className="mt-3 text-sm tracking-wide">Student</span>
              </button>

              <button
                onClick={() => setRole("parent")}
                className="flex flex-col items-center justify-center h-32 rounded-xl border border-gray-300 bg-white text-gray-800 font-semibold shadow-sm hover:shadow-md hover:scale-[1.03] transition-all"
              >
                <span className="text-2xl">👨‍👩‍👧</span>
                <span className="mt-3 text-sm tracking-wide">Parent</span>
              </button>

              <button
                onClick={() => setRole("teacher")}
                className="flex flex-col items-center justify-center h-32 rounded-xl border border-gray-300 bg-white text-gray-800 font-semibold shadow-sm hover:shadow-md hover:scale-[1.03] transition-all"
              >
                <span className="text-2xl">👩‍🏫</span>
                <span className="mt-3 text-sm tracking-wide">Teacher</span>
              </button>

            </div>
          </>
        )}

        {/* ================= STUDENT LOGIN ================= */}
        {role === "student" && (
          <>
            <h2 className="text-xl font-semibold mb-6 text-[#1F6F78] text-center">
              Student Login
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Payment Number"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F78]"
                required
              />

              <input
                type="text"
                placeholder="Student Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F78]"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#1F6F78] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Login
              </button>
            </form>

            <button
              onClick={() => setRole(null)}
              className="mt-5 text-sm text-gray-500 block mx-auto"
            >
              ← Back
            </button>
          </>
        )}

        {/* ================= PARENT LOGIN ================= */}
        {role === "parent" && (
          <>
            <h2 className="text-xl font-semibold mb-6 text-[#1F6F78] text-center">
              Parent Login
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Student ID / Payment Number"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F78]"
                required
              />

              <input
                type="password"
                placeholder="Parent Password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F78]"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#1F6F78] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Login
              </button>
            </form>

            <button
              onClick={() => setRole(null)}
              className="mt-5 text-sm text-gray-500 block mx-auto"
            >
              ← Back
            </button>
          </>
        )}

        {/* ================= TEACHER LOGIN ================= */}
        {role === "teacher" && (
          <>
            <h2 className="text-xl font-semibold mb-6 text-[#1F6F78] text-center">
              Teacher Login
            </h2>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Teacher Email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F78]"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F6F78]"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#1F6F78] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Login
              </button>
            </form>

            <button
              onClick={() => setRole(null)}
              className="mt-5 text-sm text-gray-400 block mx-auto"
            >
              ← Back
            </button>
          </>
        )}

      </div>
    </main>
  );
}