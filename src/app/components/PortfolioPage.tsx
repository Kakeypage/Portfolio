import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/UploadAdditionalFiles/svg-mwlejfcjbi";
import imgKrustyCooked from "../../imports/Menu_Game.png";
import imgSetorIn from "../../imports/Login.png";
import imgPawfeed from "../../imports/Frame_48095688_1_.png";
import imgGiziin from "../../imports/Frame_48095688.png";
import imgPortfolioSection from "../../imports/UploadAdditionalFiles/be010323dfc540116b4fb15a699fd1411522d16d.png";

const ALL_PROJECTS = [
  {
    title: "KrustyCooked",
    subtitle: "Overcooked-inspired cooking simulation game",
    type: "Web Application",
    image: imgKrustyCooked,
    highlight: "Top 8 Finalist — Technoday Hackathon 2025",
    tags: ["UI/UX Design", "Web App", "Game"],
    year: "2025",
    link: "https://github.com/Azmisynth/IF2010-OOP-TUBES-I",
  },
  {
    title: "Setor.in",
    subtitle: "Waste bank management system",
    type: "Web Application",
    image: imgSetorIn,
    highlight: "Improved waste sorting efficiency by 40%",
    tags: ["Product Design", "Web App", "Social Impact"],
    year: "2026",
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
    year: "2026",
  },
  {
    title: "Giziin",
    subtitle: "Personalized Nutrition Management App",
    type: "Mobile App Design",
    image: imgGiziin,
    highlight: "1000+ active users in first month",
    tags: ["Mobile Design", "Community", "User Research"],
    link: "https://docs.google.com/document/d/1l3t7TKhmNZ6B2ZMK85Xh29LS_vyEMFSA19xbjtJdUnM/edit?usp=sharing",
    year: "2026",
  },
];

const ALL_TAGS = ["All", "UI/UX Design", "Mobile App", "Web App", "UX Research"];

export default function PortfolioPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const filtered = ALL_PROJECTS.filter(
    (p) => filter === "All" || p.tags.includes(filter)
  );

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Header */}
      <div className="relative overflow-hidden py-24 px-6 text-center">
        <img
          src={imgPortfolioSection}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-10 transition-colors text-sm"
          >
            <svg className="size-4" fill="none" viewBox="0 0 16 16">
              <path d="M10 4L6 8L10 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
            Back to Home
          </button>
          <h1
            style={{
              fontFamily: "'Luckiest Guy', cursive",
              textShadow: "0px 4px 4px rgba(0,0,0,0.4)",
              letterSpacing: "2px",
            }}
            className="text-white text-6xl mb-4"
          >
            My Portfolio
          </h1>
          <p className="text-white/80 text-lg">All of my UI/UX Design Projects</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white sticky top-0 z-20 shadow-sm px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border-2 ${
                filter === tag
                  ? "bg-[#235cb1] text-white border-[#235cb1] shadow-md"
                  : "bg-white text-[#364153] border-[#d1d5dc] hover:border-[#235cb1] hover:text-[#235cb1]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-[#6a7282] text-sm mb-8 text-center">
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => {
            const Card = project.link ? "a" : "div";
            const cardProps = project.link
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" } }
              : {};
            return (
            <Card
              key={project.title}
              {...cardProps}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-[#6a7282] font-medium">
                  {project.year}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#0a0a0a]">{project.title}</h3>
                  <svg className="size-4 opacity-40 shrink-0 mt-1 ml-2 group-hover:opacity-80 transition-opacity" fill="none" viewBox="0 0 16 16">
                    <path d="M10 2H14V6" stroke="#FF85A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d="M6.66667 9.33333L14 2" stroke="#FF85A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p25f66900} stroke="#FF85A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
                <p className="text-[#4a5565] text-sm mb-1">{project.subtitle}</p>
                <p className="text-[#6a7282] text-xs mb-3">{project.type}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-[#fce7f3] text-[#c6005c] text-xs px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-[#6a7282]">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg">No projects found for this filter.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#101828] py-8 text-center">
        <p className="text-white text-sm">© 2026 Kayla Fiyaza Nawal Zaghbi · Made with 💕</p>
      </footer>
    </div>
  );
}
