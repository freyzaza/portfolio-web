// app/page.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const TYPING_PHRASES = [
    "COMPUTER SCIENCE UNDERGRADUATE",
    "AI ENTHUSIAST",
  ];

  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = TYPING_PHRASES[phraseIndex];
    const isEnd = charIndex === current.length;
    const isBeginning = charIndex === 0;

    let delay = isDeleting ? 50 : 120;

    if (isEnd && !isDeleting) {
      delay = 1500;
    } else if (isBeginning && isDeleting) {
      delay = 700;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (!isEnd) {
          const next = charIndex + 1;
          setCharIndex(next);
          setTypedText(current.slice(0, next));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (!isBeginning) {
          const next = charIndex - 1;
          setCharIndex(next);
          setTypedText(current.slice(0, next));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <main
      className="
        min-h-screen
        bg-hero
        bg-repeat
        bg-[length:260px_260px]
        text-slate-50
        relative
      "
    >
      {/* NAVBAR */}
      <header
        className="
          fixed top-0 left-0 w-full
          bg-black/40 backdrop-blur-sm
          h-14 flex items-center justify-between
          px-6 md:px-12
          z-50
          border-b-2 border-[#ff2d55]
          shadow-[0_0_18px_rgba(255,45,85,0.9)]
        "
      >
        {/* LEFT — LOGO (Home) */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center"
        >
          <Image
            src="/logohome.png"
            alt="Nicholas W. Angkasa"
            width={125}
            height={50}
            className="object-contain"
          />
        </button>

        {/* RIGHT — NAV */}
        <nav
          className="
            flex items-center gap-6
            text-[10px] sm:text-[11px] md:text-xs
            tracking-[0.35em] uppercase leading-none
          "
        >
          <button
            className="
              cursor-pointer
              text-slate-200
              hover:text-[#ff2d55]
              transition
            "
            onClick={() => {
              const el = document.getElementById("projects");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </button>

          <button
            className="
              cursor-pointer
              text-slate-200
              hover:text-[#ff2d55]
              transition
            "
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* WRAPPER KONTEN */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 lg:px-10 pt-20 md:pt-24 pb-6 md:pb-10">
        {/* HERO */}
        <section id="hero" className="mt-16 md:mt-24 text-center relative">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.35em] uppercase text-[#ff2d55] mb-6 font-semibold animate-[textGlitch_1.1s_steps(2,end)_infinite]">
            Hello, I&apos;m Niko
          </p>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight md:leading-[1.1]">
            <span>{typedText}</span>
            <span className="inline-block ml-1 border-r-2 border-[#ff2d55] h-[1.1em] align-middle animate-pulse" />
          </h1>

          <p className="mt-5 max-w-xl mx-auto text-xs md:text-sm text-slate-400">
            I&apos;m a computer science undergraduate exploring AI, machine
            learning, and real-world problem solving through projects and
            collaborations.
          </p>
        </section>

        {/* ABOUT + PHOTO */}
        <section className="mt-16 md:mt-24 grid md:grid-cols-[1.1fr_auto_1.1fr] gap-12 items-center">
          {/* About kiri */}
          <div className="text-base space-y-5">
            <p className="tracking-[0.3em] text-xs md:text-sm text-slate-400 uppercase">
              About me
            </p>

            <p className="text-lg md:text-2xl font-semibold leading-relaxed">
              I explore the intersection of artificial intelligence and modern
              software development.
            </p>

            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              As a Computer Science student, I work on projects involving
              machine learning, data analysis, and user-focused application
              design. My goal is to create digital solutions that don’t just
              work—but feel intuitive, reliable, and intelligent.
            </p>

            {/* Garis kiri–kanan, LinkedIn & GitHub */}
            <div className="flex items-center gap-4 pt-4">
              <span className="h-[2px] flex-1 bg-[#ff2d55] shadow-[0_0_12px_rgba(255,45,85,0.8)]" />
              <div className="flex items-center gap-3 text-[11px] md:text-xs tracking-[0.25em] uppercase text-slate-400">
                <a
                  href="https://www.linkedin.com/in/nicholas-wira-angkasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff2d55] transition"
                >
                  LinkedIn
                </a>
                <span className="text-[#ff2d55]">•</span>
                <a
                  href="https://github.com/freyzaza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff2d55] transition"
                >
                  GitHub
                </a>
              </div>
              <span className="h-[2px] flex-1 bg-[#ff2d55] shadow-[0_0_12px_rgba(255,45,85,0.8)]" />
            </div>
          </div>

          {/* Foto tengah */}
          <div className="bg-[#d9d9d9] w-48 h-60 md:w-64 md:h-80 rounded-2xl overflow-hidden mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              width={400}
              height={500}
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* Bio kanan */}
          <div className="text-base space-y-4">
            <h3 className="uppercase tracking-[0.3em] text-xs md:text-sm text-slate-400">
              Nicholas Wira Angkasa
            </h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              I focus on making digital products easier to use, more intuitive,
              and comfortable for people from the first click to the last.
            </p>

            <a
              href="/CV - Nicholas Wira Angkasa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4 inline-flex items-center justify-center 
                rounded-full border border-slate-600 
                px-6 py-2.5 text-[11px] md:text-xs 
                tracking-[0.25em] uppercase 
                transition-all duration-300
                hover:border-[#ff2d55]
                hover:text-[#ff2d55]
                hover:shadow-[0_0_12px_rgba(255,45,85,0.8)]
              "
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* WHAT I DO */}
        <section className="mt-16 md:mt-24">
          <p className="tracking-[0.3em] text-xs md:text-sm text-slate-400 uppercase mb-4">
            What I do
          </p>

          <div className="border-y border-slate-700 divide-y divide-slate-700">
            {[
              "MACHINE LEARNING DEVELOPMENT",
              "DEEP LEARNING DEVELOPMENT",
              "WEB DEVELOPMENT",
              "JOURNALISTIC",
              "MEDIA EDITING",
            ].map((item) => (
              <div
                key={item}
                className="
                  py-4 
                  text-2xl md:text-3xl lg:text-4xl 
                  font-extrabold 
                  tracking-[0.06em]
                  transition-all duration-300
                  hover:bg-[#ff2d55]/10 
                  hover:text-[#ff2d55]
                  hover:shadow-[0_0_15px_rgba(255,45,85,0.6)]
                  cursor-pointer
                "
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-16 md:mt-24">
          <header className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black tracking-[0.05em] text-[#ff2d55] animate-[textGlitch_1.1s_steps(2,end)_infinite]">
              SKILLS
            </h2>

            <p className="mt-3 text-xs md:text-sm text-slate-400 max-w-xl mx-auto">
              A collection of my technical, creative, and AI-related skills.
            </p>
          </header>

          <div className="grid md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Programming Language",
                items: ["C", "Python", "SQL", "HTML", "CSS", "JavaScript"],
              },
              {
                title: "Media & Creative Tools",
                items: ["Photoshop", "Lightroom", "CapCut", "Canva"],
              },
              {
                title: "Language",
                items: ["Indonesian – Native", "English – Intermediate"],
              },
              {
                title: "AI Skills",
                items: [
                  "NLP",
                  "Machine Learning",
                  "Deep Learning",
                  "Computer Vision",
                  "Speech Recognition",
                ],
              },
            ].map(({ title, items }) => (
              <div
                key={title}
                className="
                  rounded-2xl
                  border border-[#ff2d55]
                  backdrop-blur-md
                  p-5
                  shadow-[0_0_15px_rgba(255,45,85,0.55)]
                "
              >
                <h3
                  className="
                    text-[10px] md:text-xs
                    tracking-[0.3em]
                    uppercase
                    text-[#ff2d55]
                    mb-3
                    animate-[textGlitch_1.1s_steps(2,end)_infinite]
                  "
                >
                  {title}
                </h3>

                <ul className="space-y-2 text-sm">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-3 rounded-full bg-[#ff2d55]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16 md:mt-24">
          <div className="text-center mb-10">
            <h2
              className="
                mt-2 text-2xl md:text-3xl font-black tracking-[0.05em]
                text-[#ff2d55] animate-[textGlitch_1.1s_steps(2,end)_infinite]
              "
            >
              PROJECTS
            </h2>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {[
              {
                img: "/project1.png",
                title: "Spam Detection",
                year: "2025",
                link: "https://github.com/freyzaza/spam-detection-random-forest.git",
              },
              {
                img: "/project2.webp",
                title: "Chatbot",
                year: "2025",
                link: "https://github.com/Baeeechuuu/cutie-chatter-main_chatbots.git",
              },
              {
                img: "/project3.webp",
                title: "Face Recognition Attendance",
                year: "2024",
                link: "https://github.com/muhammadizza26/ProjectAI_Kelompok20",
              },
              {
                img: "/project4.jpg",
                title: "House Price Prediction",
                year: "2025",
                link: "https://github.com/freyzaza/house-price-prediction.git",
              },
            ].map(({ img, title, year, link }) => (
              <article
                key={title}
                className="
                  rounded-2xl
                  border border-[#ff2d55]
                  backdrop-blur-md
                  p-5
                  shadow-[0_0_18px_rgba(255,45,85,0.6)]
                "
              >
                <div className="h-48 overflow-hidden rounded-lg">
                  <Image
                    src={img}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="uppercase tracking-[0.2em]">
                      {title}
                    </span>
                    <span className="text-[#ff2d55] font-semibold">
                      {year}
                    </span>
                  </div>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center w-full rounded-full
                      border border-slate-600 px-3 py-2 text-[10px]
                      tracking-[0.25em] uppercase transition-all duration-300
                      hover:border-[#ff2d55]
                      hover:text-[#ff2d55]
                      hover:shadow-[0_0_12px_rgba(255,45,85,0.8)]
                    "
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ORGANIZATION SECTION */}
        <section className="mt-16 md:mt-24">
          <header className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black tracking-[0.08em] text-[#ff2d55] animate-[textGlitch_1.1s_steps(2,end)_infinite]">
              ORGANIZATION EXPERIENCE
            </h2>
            <p className="mt-4 text-xs md:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
              This organization experience has helped me grow in teamwork,
              leadership, coordination, and other soft skills.
            </p>
          </header>

          <div className="max-w-5xl mx-auto">
            <article
              className="
                rounded-2xl
                border border-[#ff2d55]
                backdrop-blur-md
                p-6 md:p-8
                shadow-[0_0_12px_rgba(255,45,85,0.6)]
              "
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                2024 – Present
              </p>

              <h3
                className="
                  text-lg md:text-xl font-semibold mt-2
                  text-[#ff2d55]
                  drop-shadow-[0_0_6px_rgba(255,45,85,0.9)]
                "
              >
                Journalistic Division Senior Staff
              </h3>

              <p className="text-sm text-slate-300">Nippon Club</p>

              <p className="mt-4 text-xs md:text-sm text-slate-400 leading-relaxed">
                Contributed as an active member of the journalism division in
                the campus Nippon Club organization. Wrote and edited articles
                covering various campus activities and cultural events, and
                served as a photographer to document organizational events and
                provide visual content for articles and publications.
                Collaborated with team members to ensure timely publication and
                high-quality content for the organization&apos;s media platforms.
              </p>
            </article>
          </div>
        </section>

        {/* LET'S CONNECT */}
        <section
          id="contact"
          className="mt-16 md:mt-24 border-y border-slate-700 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              Got a project in mind?
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-black tracking-[0.05em] text-[#ff2d55] animate-[textGlitch_1.1s_steps(2,end)_infinite]">
              LET&apos;S CONNECT
            </h2>
          </div>

          <a
            href="https://www.linkedin.com/in/nicholas-wira-angkasa"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center rounded-full border border-slate-600
              px-8 py-3 text-[10px] tracking-[0.25em] uppercase 
              transition-all duration-300
              hover:border-[#ff2d55]
              hover:text-[#ff2d55]
              hover:shadow-[0_0_12px_rgba(255,45,85,0.8)]
            "
          >
            Send me a message
          </a>
        </section>

        {/* FOOTER */}
        <footer className="mt-8 border-t border-white/5 py-6 md:py-7 text-[10px] md:text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="tracking-wide text-center md:text-left">
            © {new Date().getFullYear()} Nicholas Wira Angkasa. All rights
            reserved.
          </p>

          <div className="flex gap-6 uppercase tracking-[0.25em]">
            <a
              href="https://www.linkedin.com/in/nicholas-wira-angkasa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff2d55] transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/freyzaza"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff2d55] transition"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
