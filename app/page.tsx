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

        <Image
          src="/images/SLN_7011-scaled.webp"
          alt="Students"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* NAVBAR */}
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          <div className="max-w-[1500px] mx-auto flex items-center justify-between px-16 h-[100px]">

            <div className="flex items-center gap-6">
              <Image src="/images/NSS.png" alt="Logo" width={90} height={90} />

              <div className={`h-10 w-[1px] ${
                scrolled ? "bg-[#1F6F78]/30" : "bg-white/40"
              }`} />

              <div className={`uppercase leading-tight ${
                scrolled ? "text-[#1F6F78]" : "text-white"
              }`}>
                <p className="font-bold text-[13px] tracking-[2.5px]">
                  NAMIRYANGO SENIOR
                </p>
                <p className="font-bold text-[13px] tracking-[2.5px]">
                  SECONDARY SCHOOL
                </p>
              </div>
            </div>

            <div className={`hidden md:flex items-center gap-12 text-[12px] font-semibold tracking-[2.5px] uppercase ${
              scrolled ? "text-[#1F6F78]" : "text-white"
            }`}>
              <a>OUR SCHOOL</a>
              <a>FACILITIES</a>
              <a>NEWS & EVENTS</a>
              <a>ADMISSIONS</a>
              <a>LOGIN</a>

              <button className={`ml-2 px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-[2.5px] ${
                scrolled ? "bg-[#1F6F78] text-white" : "bg-white text-black"
              }`}>
                ENQUIRE NOW
              </button>
            </div>

          </div>
        </nav>

        {/* HERO TEXT */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="max-w-[1500px] mx-auto px-16 w-full">
            <div className="max-w-2xl text-white mt-32">

              <p className="text-[11px] uppercase tracking-[6px] mb-6 text-white/60">
                FOUNDED ON DISCIPLINE. DRIVEN BY EXCELLENCE.
              </p>

              <h1 className="text-[46px] md:text-[64px] font-medium leading-[1.2] tracking-[-0.4px] mb-8 text-white/90">
                Namiryango Senior Secondary School
              </h1>

              <p className="text-[17px] italic text-white/70 mb-12 tracking-wide">
                In God We Shall Achieve
              </p>

              <div className="flex gap-6">
                <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-gray-200 transition">
                  APPLY NOW
                </button>

                <button className="border border-white/60 px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition">
                  BOOK A VISIT
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-white py-32">
        <div className="max-w-[1400px] mx-auto px-16 grid md:grid-cols-2 gap-20 items-start">

          <div className="relative w-full h-[520px]">
            <Image src="/images/SLN_7081-scaled.webp" alt="Students" fill className="object-cover" />
          </div>

          <div>
            <h2 className="text-[44px] font-light text-[#1F6F78] leading-tight mb-4">
              Welcome to Namiryango Senior Secondary School
            </h2>

            <div className="w-full h-[1px] bg-[#c5a46d] mb-8" />

            {/* 🔥 ONLY THING IMPROVED */}
            <p className="text-[17px] leading-[1.9] text-gray-700 mb-6">
              At Namiryango SSS, we are committed to providing quality education that nurtures well-rounded, morally upright citizens.
            </p>

            <p className="text-[17px] leading-[1.9] text-gray-700 mb-6">
              Founded in 1998, our school has grown into a center of academic excellence, offering a wide range of academic programs, extracurricular activities, and state-of-the-art facilities.
            </p>

            <p className="text-[17px] leading-[1.9] text-gray-700">
              Our students thrive in a structured environment designed to foster intellectual growth, leadership, and character — preparing them to excel both locally and globally.
            </p>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0f172a] text-white py-16">
        <div className="max-w-[1400px] mx-auto px-16 grid md:grid-cols-3 gap-12">

          <div>
            <div className="flex items-center gap-4 mb-4">
              <Image src="/images/NSS.png" alt="Logo" width={60} height={60} />
              <h3 className="text-lg font-semibold">NAMIRYANGO S.S.S</h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              In God We Shall Achieve. A center of excellence committed to shaping disciplined and impactful future leaders.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Admissions</li>
              <li>Academics</li>
              <li>School Life</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <p className="text-gray-400 text-sm">
              Kampala, Uganda <br />
              +256 700 000000 <br />
              info@namiryango.ac.ug
            </p>
          </div>

        </div>

        <div className="text-center text-gray-500 text-sm mt-12">
          © {new Date().getFullYear()} Namiryango Senior Secondary School. All rights reserved.
        </div>
      </footer>

    </main>
  );
}