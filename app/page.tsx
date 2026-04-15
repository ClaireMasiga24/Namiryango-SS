"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background */}
        <Image
          src="/images/SLN_7011-scaled.webp"
          alt="Students"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* ================= NAVBAR ================= */}
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          <div className="max-w-[1500px] mx-auto flex items-center justify-between px-16 h-[100px]">

            {/* LOGO */}
            <div className="flex items-center gap-6">
              <Image
                src="/images/NSS.png"
                alt="Logo"
                width={90}
                height={90}
                className="object-contain"
              />

              <div
                className={`h-10 w-[1px] ${
                  scrolled ? "bg-[#1F6F78]/30" : "bg-white/40"
                }`}
              />

              <div
                className={`uppercase leading-tight ${
                  scrolled ? "text-[#1F6F78]" : "text-white"
                }`}
              >
                <p className="font-bold text-[13px] tracking-[2.5px]">
                  NAMIRYANGO SENIOR
                </p>
                <p className="font-bold text-[13px] tracking-[2.5px]">
                  SECONDARY SCHOOL
                </p>
              </div>
            </div>

            {/* NAV LINKS */}
            <div
              className={`hidden md:flex items-center gap-16 text-[12px] font-semibold tracking-[2.5px] uppercase ${
                scrolled ? "text-[#1F6F78]" : "text-white"
              }`}
            >
              <a className="hover:opacity-70">Our School</a>
              <a className="hover:opacity-70">Facilities</a>
              <a className="hover:opacity-70">News & Events</a>
              <a className="hover:opacity-70">Admissions</a>
            </div>

            {/* CTA */}
            <button
              className={`px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wide transition ${
                scrolled
                  ? "bg-[#1F6F78] text-white hover:bg-[#185a61]"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              Enquire Now
            </button>
          </div>
        </nav>

        {/* HERO TEXT */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-[1500px] mx-auto px-16 w-full">
            <div className="max-w-2xl text-white mt-32">

              <p className="text-[11px] uppercase tracking-[5px] mb-6 text-gray-300">
                Excellence in Education
              </p>

              <h1 className="text-[72px] md:text-[88px] font-bold leading-[1.05] mb-8">
                Namiryango <br />
                Senior Secondary <br />
                School
              </h1>

              <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
                In God We Shall Achieve — shaping disciplined, confident future leaders.
              </p>

              <div className="flex gap-6">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                  Apply Now
                </button>

                <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                  Book a Visit
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-white py-32">

        <div className="max-w-[1400px] mx-auto px-16 grid md:grid-cols-2 gap-20 items-start">

          {/* IMAGE */}
          <div className="relative w-full h-[520px]">
            <Image
              src="/images/SLN_7081-scaled.webp"
              alt="Students"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div>

            {/* HEADING */}
            <h2 className="text-[44px] font-light text-[#1F6F78] leading-tight mb-4">
              Welcome to Namiryango Senior Secondary School
            </h2>

            {/* FULL UNDERLINE */}
            <div className="w-full h-[1px] bg-[#c5a46d] mb-8" />

            <p className="text-[17px] leading-[1.9] text-gray-700 mb-6">
              At Namiryango SSS, we are committed to providing quality education that nurtures well-rounded, morally upright citizens. Founded in 1998, our school has grown into a center of academic excellence, offering a wide range of academic programs, extracurricular activities, and state-of-the-art facilities.
            </p>

            <p className="text-[17px] leading-[1.9] text-gray-700">
              Our students benefit from a structured and disciplined environment designed to foster intellectual growth, leadership, and character. At Namiryango, every learner is supported to become confident, responsible, and impactful in society.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}