import { useState, useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router";
import { router } from "./routes";
import svgPaths from "../imports/UploadAdditionalFiles/svg-mwlejfcjbi";
import imgHeroSection from "../imports/UploadAdditionalFiles/0de9d8a1d9312fce6dca5d8ae84931b06725d793.png";
import imgAboutSection from "../imports/UploadAdditionalFiles/189dd4049221b905c60ba38fe4746d63ce8a4a65.png";
import imgProfilePhoto from "../imports/UploadAdditionalFiles/e882f2d050c89a95e75d88e8f1f64c50f210ca4a.png";
import imgExperienceSection from "../imports/UploadAdditionalFiles/0653b141c27c2f5c53651eb4e7d41f1937c6fca4.png";
import imgPortfolioSection from "../imports/UploadAdditionalFiles/be010323dfc540116b4fb15a699fd1411522d16d.png";
import imgKrustyCooked from "../imports/Menu_Game.png";
import imgSetorIn from "../imports/Login.png";
import imgPawfeed from "../imports/Frame_48095688_1_.png";
import imgGiziin from "../imports/Frame_48095688.png";
import imgContactSection from "../imports/UploadAdditionalFiles/b088860ed347afe35e4305572e52e500ef8ef70c.png";

// ─── Navigation ────────────────────────────────────────────────────────────────

function Navigation() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string, label: string) => {
    setActive(label);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Resume", id: "about" },
    { label: "Experiences", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]"}`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {navItems.map(({ label, id }) => (
            <button
              key={label}
              onClick={() => scrollTo(id, label)}
              className={`text-base font-medium transition-colors whitespace-nowrap ${
                active === label ? "text-[#68b3ff]" : "text-[#364153] hover:text-[#235cb1]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ─── Hero Section ───────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={imgHeroSection}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Subtle floating bubbles */}
      <style>{`
        @keyframes floatBubble {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes floatBubbleSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {[
        { size: 80,  top: "8%",  left: "4%",   opacity: 0.15, delay: "0s",    duration: "5s" },
        { size: 40,  top: "18%", left: "14%",  opacity: 0.1,  delay: "1s",    duration: "4s" },
        { size: 120, top: "5%",  left: "30%",  opacity: 0.08, delay: "0.5s",  duration: "6s" },
        { size: 55,  top: "25%", left: "48%",  opacity: 0.12, delay: "2s",    duration: "4.5s" },
        { size: 90,  top: "10%", left: "62%",  opacity: 0.1,  delay: "1.5s",  duration: "5.5s" },
        { size: 35,  top: "40%", left: "75%",  opacity: 0.15, delay: "0.8s",  duration: "3.8s" },
        { size: 110, top: "3%",  left: "82%",  opacity: 0.08, delay: "2.5s",  duration: "6.5s" },
        { size: 50,  top: "55%", left: "90%",  opacity: 0.12, delay: "0.3s",  duration: "4.2s" },
        { size: 70,  top: "65%", left: "6%",   opacity: 0.1,  delay: "1.8s",  duration: "5s" },
        { size: 45,  top: "72%", left: "22%",  opacity: 0.13, delay: "0.6s",  duration: "4.8s" },
        { size: 100, top: "60%", left: "40%",  opacity: 0.07, delay: "3s",    duration: "7s" },
        { size: 30,  top: "80%", left: "55%",  opacity: 0.15, delay: "1.2s",  duration: "3.5s" },
        { size: 85,  top: "75%", left: "70%",  opacity: 0.09, delay: "2.2s",  duration: "5.8s" },
        { size: 60,  top: "85%", left: "85%",  opacity: 0.11, delay: "0.9s",  duration: "4.3s" },
        { size: 42,  top: "45%", left: "18%",  opacity: 0.1,  delay: "1.6s",  duration: "4.6s" },
        { size: 75,  top: "50%", left: "55%",  opacity: 0.08, delay: "2.8s",  duration: "6.2s" },
      ].map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            opacity: b.opacity,
            background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9), rgba(148,201,255,0.3))",
            border: "1.5px solid rgba(255,255,255,0.5)",
            backdropFilter: "blur(2px)",
            animation: `floatBubble ${b.duration} ease-in-out infinite ${b.delay}`,
          }}
        />
      ))}

      {/* Colorful floating stars */}
      {[
        { top: "7%",  left: "7%",   color: "#ff85a8", size: 22, delay: "0s",   duration: "4s",   char: "✦" },
        { top: "15%", left: "25%",  color: "#68b3ff", size: 16, delay: "1s",   duration: "5s",   char: "★" },
        { top: "6%",  left: "45%",  color: "#fdc700", size: 26, delay: "0.4s", duration: "3.8s", char: "✦" },
        { top: "20%", left: "60%",  color: "#a259ff", size: 18, delay: "2s",   duration: "4.5s", char: "★" },
        { top: "8%",  left: "78%",  color: "#3ecf8e", size: 24, delay: "0.8s", duration: "5.2s", char: "✦" },
        { top: "12%", left: "92%",  color: "#ff85a8", size: 14, delay: "1.5s", duration: "4.2s", char: "★" },
        { top: "35%", left: "2%",   color: "#fdc700", size: 20, delay: "0.6s", duration: "4.8s", char: "✦" },
        { top: "42%", left: "32%",  color: "#68b3ff", size: 12, delay: "2.3s", duration: "3.5s", char: "★" },
        { top: "38%", left: "68%",  color: "#a259ff", size: 22, delay: "1.1s", duration: "5.5s", char: "✦" },
        { top: "30%", left: "88%",  color: "#3ecf8e", size: 16, delay: "0.2s", duration: "4s",   char: "★" },
        { top: "58%", left: "10%",  color: "#ff85a8", size: 18, delay: "1.7s", duration: "4.6s", char: "✦" },
        { top: "65%", left: "40%",  color: "#fdc700", size: 24, delay: "0.9s", duration: "5s",   char: "★" },
        { top: "60%", left: "60%",  color: "#68b3ff", size: 14, delay: "2.6s", duration: "3.8s", char: "✦" },
        { top: "55%", left: "80%",  color: "#a259ff", size: 20, delay: "1.3s", duration: "4.4s", char: "★" },
        { top: "78%", left: "15%",  color: "#3ecf8e", size: 26, delay: "0.5s", duration: "5.8s", char: "✦" },
        { top: "82%", left: "50%",  color: "#ff85a8", size: 15, delay: "1.9s", duration: "4.1s", char: "★" },
        { top: "75%", left: "72%",  color: "#fdc700", size: 22, delay: "0.7s", duration: "4.9s", char: "✦" },
        { top: "88%", left: "90%",  color: "#68b3ff", size: 18, delay: "2.4s", duration: "3.6s", char: "★" },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            top: s.top,
            left: s.left,
            color: s.color,
            fontSize: s.size,
            opacity: 0.8,
            filter: `drop-shadow(0 0 6px ${s.color})`,
            animation: `floatBubble ${s.duration} ease-in-out infinite ${s.delay}`,
          }}
        >
          {s.char}
        </span>
      ))}

      <div className="relative z-10 text-center px-6">
        <div className="flex items-center justify-center gap-5 mb-6">
          {/* Speech bubble with bottom-left pointer */}
          <div className="relative bg-white drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] rounded-2xl px-5 py-2.5">
            <p style={{ fontFamily: "'Poppins', sans-serif" }} className="text-[17.6px] whitespace-nowrap text-[#1e2939]">
              Hi! I am{" "}
              <span style={{ fontWeight: 600 }} className="text-[#68b3ff]">Kayla Fiyaza</span>
            </p>
            {/* Rotated square pointer at bottom-left */}
            <div
              className="absolute bg-white size-4 rotate-45 shadow-md"
              style={{ bottom: "-7px", left: "18px" }}
            />
          </div>
          {/* Italic text */}
          <p
            style={{ fontFamily: "'Poppins', sans-serif", fontStyle: "italic", fontWeight: 600 }}
            className="text-white text-[17.6px] whitespace-nowrap"
          >
            Welcome to my...
          </p>
        </div>
        <h1
          style={{
            fontFamily: "'Luckiest Guy', cursive",
            textShadow: "0px 4px 4px rgba(0,0,0,0.5)",
            letterSpacing: "4px",
            WebkitTextStroke: "2px #0A66C2",
            paintOrder: "stroke fill",
          }}
          className="text-white text-7xl sm:text-8xl md:text-9xl"
        >
          PORTFOLIO
        </h1>
        <button
          onClick={() => {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-12 animate-bounce"
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path
              d="M12 18L24 30L36 18"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

// ─── About Section ──────────────────────────────────────────────────────────────

function AboutSection() {
  const skills = [
    "UI Design", "UX Research", "Leadership", "Communication",
    "Critical Thinking", "Public Speaking", "Teamwork", "Problem Solving",
  ];

  return (
    <section id="about" className="relative py-20 px-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <img src={imgAboutSection} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          style={{ fontFamily: "'Luckiest Guy', cursive", textShadow: "0px 4px 4px rgba(0,0,0,0.25)", WebkitTextStroke: "2px white", paintOrder: "stroke fill" }}
          className="text-[#235cb1] text-5xl text-center mb-12"
        >
          Background &amp; Skills
        </h2>

        {/* About Me Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#dbeafe] rounded-xl size-8 flex items-center justify-center text-xl">👤</div>
            <h3 className="text-[#3776ab] text-2xl font-medium">About Me</h3>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="shrink-0">
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-[#cce9ff] shadow-lg">
                <img src={imgProfilePhoto} alt="Kayla Fiyaza Nawal Zaghbi" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#0a0a0a] mb-4">Kayla Fiyaza Nawal Zaghbi</h4>
              <p className="text-[#364153] text-base leading-relaxed text-justify">
                A proactive and detail-oriented individual with experience in product development, user experience design, and agile project management. Skilled at translating user needs and business objectives into practical, user-centered digital solutions through stakeholder engagement, cross-functional collaboration, and structured problem-solving. Passionate about leveraging technology to address real-world challenges and create meaningful impact.
              </p>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-[#3776ab] text-2xl font-medium mb-6">Education</h3>
          <div className="flex gap-4">
            <div className="bg-[#94c9ff] rounded-2xl size-12 flex items-center justify-center shrink-0 mt-1">
              <svg className="size-6" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p462d500} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M22 10V16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p2b645f80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#0a0a0a]">Bandung Institute of Technology</h4>
              <p className="text-[#4a5565] text-base mt-1">Bachelor Degree · Information Systems and Technology (2024 - Present)</p>
              <p className="text-[#6a7282] text-sm mt-4 mb-2">Related Coursework:</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-8">
                {[
                  "Algorithm Strategies", "Object Oriented Programming",
                  "Data Structures", "Database Management",
                  "Software Engineering", "Platform-Based Programming",
                ].map((course) => (
                  <div key={course} className="flex items-center gap-2">
                    <div className="bg-[#94c9ff] rounded-full size-2 shrink-0" />
                    <span className="text-[#364153] text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <h3 className="text-[#3776ab] text-2xl font-medium mb-6">Tech Stack &amp; Tools</h3>
          <div className="mb-6">
            <p className="text-[#6a7282] text-sm tracking-widest uppercase mb-3">Tools</p>
            <div className="flex flex-wrap gap-3">
              {[
                { emoji: "🎨", label: "Figma", color: "#a259ff", borderColor: "rgba(162,89,255,0.2)" },
                { emoji: "⚡", label: "Supabase", color: "#3ecf8e", borderColor: "rgba(62,207,142,0.2)" },
                { emoji: "🗄️", label: "MySQL", color: "#4479a1", borderColor: "rgba(68,121,161,0.2)" },
                { emoji: "🐘", label: "PostgreSQL", color: "#336791", borderColor: "rgba(51,103,145,0.2)" },
                { emoji: "🌿", label: "Git", color: "#f05032", borderColor: "rgba(240,80,50,0.2)" },
                { emoji: "🐙", label: "GitHub", color: "#24292e", borderColor: "rgba(36,41,46,0.2)" },
              ].map(({ emoji, label, color, borderColor }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border-2"
                  style={{ borderColor, minWidth: "100px" }}
                >
                  <span className="text-2xl">{emoji}</span>
                  <span className="text-xs" style={{ color }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#6a7282] text-sm tracking-widest uppercase mb-3">Programming Languages</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Java", bg: "#ed8b00" },
                { label: "Python", bg: "#3776ab" },
                { label: "C", bg: "#a8b9cc" },
              ].map(({ label, bg }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl shadow-md text-white text-base font-medium"
                  style={{ background: bg }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Languages Row */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-[#3776ab] text-2xl font-medium mb-6">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="border-2 border-[#d1d5dc] rounded-full px-4 py-2 text-[#364153] text-base"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* Languages Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-[#3776ab] text-2xl font-medium mb-6">Languages</h3>
            <div className="flex flex-col gap-4">
              <div className="bg-[#fdf2f8] rounded-2xl p-4 flex items-center gap-4">
                <span className="text-3xl">🇮🇩</span>
                <div>
                  <p className="text-[#0a0a0a] text-lg">Indonesia</p>
                  <p className="text-[#6a7282] text-sm">Native</p>
                </div>
              </div>
              <div className="bg-[#eff6ff] rounded-2xl p-4 flex items-center gap-4">
                <span className="text-3xl">🇬🇧</span>
                <div>
                  <p className="text-[#0a0a0a] text-lg">English</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Experience Section ─────────────────────────────────────────────────────────

function ExperienceSection() {
  const experiences = [
    {
      title: "Head of UXVidia",
      org: "ARKAVIDIA",
      date: "April 2026 - Present",
      bullets: [
        "Led the planning and execution of UXVidia, the UI/UX competition track of Arkavidia 11.0.",
        "Established competition guidelines, assessment criteria, and judging rubrics aligned with UI/UX design best practices.",
        "Coordinated with UI/UX professionals and industry judges throughout the evaluation process.",
        "Oversaw submission reviews and design assessments, ensuring objective and consistent evaluation standards.",
        "Managed project timelines, task delegation, and cross-functional collaboration to deliver competition milestones on schedule.",
      ],
      borderColor: "#94c9ff",
      bulletColor: "#ff85a8",
    },
    {
      title: "Staff of UI/UX",
      org: "KAT ITB 2026",
      date: "April 2026 - Present",
      bullets: [
        "Designed UI/UX solutions using Figma for multiple web-based platforms supporting KAT ITB 2026 activities.",
        "Conducted requirement discussions with stakeholders to identify user and organizational needs.",
        "Produced wireframes, high-fidelity mockups, and design specifications for website development.",
        "Worked closely with developers to ensure accurate implementation of design solutions.",
      ],
      borderColor: "#94c9ff",
      bulletColor: "#94c9ff",
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <img src={imgExperienceSection} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-y-[-1]" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          style={{ fontFamily: "'Luckiest Guy', cursive", textShadow: "0px 4px 4px rgba(0,0,0,0.25)", WebkitTextStroke: "2px white", paintOrder: "stroke fill" }}
          className="text-[#235cb1] text-5xl text-center mb-12"
        >
          My Experiences
        </h2>
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-white rounded-2xl shadow-xl relative overflow-hidden"
              style={{ border: `4px solid ${exp.borderColor}` }}
            >
              <div className="p-9">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#94c9ff] rounded-full p-3 shrink-0">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p22caafc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p33d8b700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-[#0a0a0a]">{exp.title}</h3>
                    <p className="text-[#4a5565] text-lg mt-1">{exp.org}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <svg className="size-4" fill="none" viewBox="0 0 16 16">
                        <path d="M5.33333 1.33333V4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d="M10.6667 1.33333V4" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p3ee34580} stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d="M2 6.66667H14" stroke="#6A7282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                      <span className="text-[#6a7282] text-sm">{exp.date}</span>
                    </div>
                  </div>
                </div>
                <div className="pl-16 flex flex-col gap-2">
                  {exp.bullets.map((b, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="mt-1 shrink-0" style={{ color: exp.bulletColor }}>✨</span>
                      <p className="text-[#364153] text-base">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects Section ───────────────────────────────────────────────────────────

type Project = {
  title: string;
  subtitle: string;
  type: string;
  image: string;
  highlight: string;
  tags: string[];
  rotate: string;
  paperClipColor: string;
  link?: string;
};

function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.link ? "a" : "div";
  const wrapperProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Wrapper {...wrapperProps} className={`bg-white shadow-2xl p-4 relative ${project.rotate} hover:rotate-0 transition-transform duration-300 ${project.link ? "cursor-pointer" : ""}`} style={{ width: "100%", maxWidth: "380px", textDecoration: "none", display: "block" }}>
      {/* Paper clip */}
      <div
        className="absolute right-10 -top-4 z-10"
        style={{ color: project.paperClipColor }}
      >
        <svg width="24" height="48" viewBox="0 0 30 60" fill="none">
          <path d={svgPaths.p19321a00} stroke={project.paperClipColor} strokeLinecap="round" strokeWidth="3" />
        </svg>
      </div>
      {/* Image */}
      <div className="bg-[#f3f4f6] overflow-hidden mb-4" style={{ height: "220px" }}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      {/* Info */}
      <div className="px-2">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-medium text-[#0a0a0a]">{project.title}</h3>
          <svg className="size-4 mt-1 opacity-60 shrink-0 ml-2" fill="none" viewBox="0 0 16 16">
            <path d="M10 2H14V6" stroke="#FF85A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M6.66667 9.33333L14 2" stroke="#FF85A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p25f66900} stroke="#FF85A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
        <p className="text-[#4a5565] text-sm mt-2">{project.subtitle}</p>
        <p className="text-[#6a7282] text-sm mt-1">{project.type}</p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-[#fce7f3] text-[#c6005c] text-xs px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

function ProjectsSection() {
  const navigate = useNavigate();
  const projects: Project[] = [
    {
      title: "KrustyCooked",
      subtitle: "Overcooked-inspired cooking simulation game",
      type: "Web Application",
      image: imgKrustyCooked,
      highlight: "Top 8 Finalist — Technoday Hackathon 2025",
      tags: ["UI/UX Design", "Web App", "Game"],
      rotate: "-rotate-2",
      paperClipColor: "#94C9FF",
      link: "https://github.com/Azmisynth/IF2010-OOP-TUBES-I",
    },
    {
      title: "Setor.in",
      subtitle: "Waste bank management system",
      type: "Web Application",
      image: imgSetorIn,
      highlight: "Improved waste sorting efficiency by 40%",
      tags: ["Product Design", "Web App", "Social Impact"],
      rotate: "rotate-2",
      paperClipColor: "#FFB6C1",
      link: "https://github.com/greeyash/setor.in",
    },
    {
      title: "PAWFEED",
      subtitle: "IoT-based smart cat feeding system",
      type: "IoT Embedded Systems",
      image: imgPawfeed,
      highlight: "Reduced task completion time by 30%",
      tags: ["Dashboard", "Mobile App", "UX Research"],
      link: "https://docs.google.com/document/d/1Ef8PWItLCmauvfl6EELb6-W4nYZmZSqHdKNSeYa6fpM/edit?usp=sharing",
      rotate: "-rotate-2",
      paperClipColor: "#94C9FF",
    },
    {
      title: "Giziin",
      subtitle: "Personalized Nutrition Management App",
      type: "Mobile App Design",
      image: imgGiziin,
      highlight: "1000+ active users in first month",
      tags: ["Mobile Design", "Community", "User Research"],
      rotate: "rotate-2",
      paperClipColor: "#FFB6C1",
      link: "https://docs.google.com/document/d/1l3t7TKhmNZ6B2ZMK85Xh29LS_vyEMFSA19xbjtJdUnM/edit?usp=sharing",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <img src={imgPortfolioSection} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          style={{ fontFamily: "'Luckiest Guy', cursive", textShadow: "0px 4px 4px rgba(0,0,0,0.25)", WebkitTextStroke: "2px white", paintOrder: "stroke fill" }}
          className="text-[#235cb1] text-5xl text-center mb-3"
        >
          My Projects
        </h2>
        <p className="text-[#4a5565] text-lg text-center mb-16">Some Of My Recent UI/UX Design Projects</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-24 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <button
            onClick={() => navigate("/portfolio")}
            className="bg-[#235cb1] text-white rounded-full px-10 py-4 flex items-center gap-3 shadow-xl hover:bg-[#1a4a9a] transition-colors text-lg"
          >
            VIEW MORE PORTFOLIO
            <svg className="size-5" fill="none" viewBox="0 0 20 20">
              <path d="M12.5 2.5H17.5V7.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M8.33333 11.6667L17.5 2.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p387614c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ────────────────────────────────────────────────────────────

function ContactSection() {
  const contacts = [
    {
      bg: "#ea4335",
      cardBg: "#fef2f2",
      label: "Email",
      value: "kfnz1127@gmail.com",
      href: "mailto:kfnz1127@gmail.com",
      textColor: "#ea4335",
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 28 28">
          <path d={svgPaths.p3ea83200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p345286c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      ),
    },
    {
      bg: "#e1306c",
      cardBg: "#fff0f5",
      label: "Instagram",
      value: "@zai.sdiary",
      href: "https://instagram.com/zai.sdiary",
      textColor: "#e1306c",
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 28 28">
          <path d={svgPaths.p2610100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p23fcf100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M20.4167 7.58333H20.4283" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      ),
    },
    {
      bg: "#25d366",
      cardBg: "#f0fff4",
      label: "WhatsApp",
      value: "+62 856-2407-7499",
      href: "https://wa.me/6285624077499",
      textColor: "#25d366",
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 28 28">
          <path d={svgPaths.p24079400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      ),
    },
    {
      bg: "#0a66c2",
      cardBg: "#eff6ff",
      label: "LinkedIn",
      value: "Kayla Fiyaza Nawal Zaghbi",
      href: "https://www.linkedin.com/in/kayla-fiyaza-nawal-zaghbi-60506035a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      textColor: "#0a66c2",
      icon: (
        <svg className="size-7" fill="none" viewBox="0 0 28 28">
          <path d={svgPaths.p1bbfdd80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M7 10.5H2.33333V24.5H7V10.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2c6c5d00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden" style={{ minHeight: "700px", fontFamily: "'Poppins', sans-serif" }}>
      <img src={imgContactSection} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-y-[-1]" />
      {/* Decorative emojis */}
      <div className="absolute top-24 right-16 text-4xl rotate-6 select-none pointer-events-none">🍓</div>
      <div className="absolute bottom-40 left-8 text-4xl -rotate-45 select-none pointer-events-none">⭐</div>
      <div className="absolute bottom-24 right-20 text-4xl rotate-6 select-none pointer-events-none">🍓</div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
            WebkitTextStroke: "2px white",
            paintOrder: "stroke fill",
          }}
          className="text-[#235cb1] text-6xl mb-4"
        >
          Get In Touch
        </h2>
        <p className="text-[#364153] text-xl mb-3">Let&#39;s Create Something Amazing Together</p>

        <div className="bg-white rounded-3xl shadow-2xl p-10 mt-12">
          <p className="text-[#4a5565] text-base mb-8">
            Interested in collaborating? Reach me through any of these channels ✨
          </p>
          <div className="flex flex-col gap-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl flex items-center gap-5 p-5 hover:opacity-90 hover:scale-[1.01] transition-all"
                style={{ background: c.cardBg, textDecoration: "none" }}
              >
                <div
                  className="rounded-2xl size-14 flex items-center justify-center shrink-0 shadow-md"
                  style={{ background: c.bg }}
                >
                  {c.icon}
                </div>
                <div className="text-left flex-1">
                  <p className="text-[#6a7282] text-sm">{c.label}</p>
                  <p className="text-base font-medium" style={{ color: c.textColor }}>{c.value}</p>
                </div>
                <div
                  className="rounded-full size-8 flex items-center justify-center opacity-40"
                  style={{ background: `${c.bg}22` }}
                >
                  <span style={{ color: c.bg }}>→</span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t-2 border-[#fce7f3]">
            <p className="text-[#4a5565] text-sm">
              💌 Available For UI/UX Projects · Product Design · Product Management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#101828] py-8 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <p className="text-white text-sm">© 2026 Kayla Fiyaza Nawal Zaghbi · Made with 💕</p>
    </footer>
  );
}

// ─── Home Page ───────────────────────────────────────────────────────────────────

export function HomePage() {
  {/* MARKER-MAKE-KIT-INVOKED */}
  return (
    <div className="min-h-full">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// ─── App (Router entry) ───────────────────────────────────────────────────────────

export default function App() {
  return <RouterProvider router={router} />;
}
