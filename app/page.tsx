import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/SLN_7011-scaled.webp"
        alt="Namiryango students"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-12 h-[100px]">

          {/* LOGO BLOCK */}
          <div className="flex items-center gap-5 h-full">

            <Image
              src="/images/NSS.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
            />

            <div className="h-10 w-[1px] bg-white/50" />

            <div className="text-white uppercase leading-tight">
              <p className="font-bold text-[13px] tracking-[2px]">
                Namiryango Senior
              </p>
              <p className="font-bold text-[13px] tracking-[2px]">
                Secondary School
              </p>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-12 text-white text-[12px] font-semibold tracking-[2px] uppercase">
            <a className="hover:opacity-70 transition">Our School</a>
            <a className="hover:opacity-70 transition">Facilities</a>
            <a className="hover:opacity-70 transition">News & Events</a>
            <a className="hover:opacity-70 transition">Admissions</a>
          </div>

          {/* CTA */}
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wide hover:bg-gray-200 transition">
            Enquire Now
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-[1400px] mx-auto px-12 w-full">

          <div className="max-w-xl text-white">

            <p className="text-xs uppercase tracking-[4px] mb-6 opacity-80">
              Excellence in Education
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-[1.05] mb-8">
              Namiryango <br />
              Senior <br />
              Secondary School
            </h1>

            <p className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed">
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

    </main>
  );
}