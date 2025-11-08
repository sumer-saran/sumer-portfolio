import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, GraduationCap, Award, Rocket, Landmark, TimerReset, ArrowRight, ExternalLink } from "lucide-react";
import Footer from "./Footer";
import "../App.css";
import AboutCodePlaygroundSection from "./AboutCodePlayground";

// ======= Data (extracted from resume) =======
const journey = [
  {
    id: "panafrican-2025",
    date: "Feb 2025 – Present",
    title: "Full Stack Developer — PanAfrican Equipment Group, Dubai",
    tags: ["Django", "React", "PostgreSQL", "C++", "Kafka", "AWS", "Microservices", "Docker"],
    summary: "Building and shipping Fortitude, a real-time SaaS fleet management system enabling sub-second data updates and live dashboards.",
    logo: "/fortitude.svg",
  },
  {
    id: "sharafdg-2024-25",
    date: "Aug 2024 – Feb 2025",
    title: "Software Developer — Sharaf DG, Dubai",
    tags: ["React", "Node", "Python", "PHP", "Azure DevOps", "MySQL", "Docker", "Microservices"],
    summary: "Collaborated across teams to architect, build, and deliver full-stack solutions that enhanced Sharaf DG’s digital ecosystem. My role focused on designing scalable features and ensuring performance and reliability across all e-commerce platforms.",
    logo: "https://uae.sharafdg.com/wp-content/uploads/sites/7/2025/05/SDG-Anniversary-Logo-Web-Desktop-500x136-2.gif",
  },
  {
    id: "sharafdg-2023-24",
    date: "Feb 2023 – Aug 2024",
    title: "Junior Software Developer — Sharaf DG, Dubai",
    tags: ["React", "Node", "Python", "PHP", "Azure DevOps", "MySQL", "Docker"],
    summary: "Contributed to end-to-end development of internal and customer-facing systems. I supported the creation of innovative retail solutions and automation tools, translating requirements into efficient, production-ready software that improved operations and user experience.",
    logo: "https://uae.sharafdg.com/wp-content/uploads/sites/7/2025/05/SDG-Anniversary-Logo-Web-Desktop-500x136-2.gif",
  },
];

const certifications = [
  { name: "Full Stack Developer (MERN) — 2024", link: "https://www.udemy.com/certificate/UC-760a93bd-7311-467a-938d-558daa872fc4/" },
  { name: "ReactJS — 2024", link: "https://personalsumersaranaligh.blob.core.windows.net/certifications/Sumer-ReactJs.pdf" },
];

const education = {
  school: "BITS Pilani, Dubai",
  span: "Aug 2019 – Jun 2023",
  degree: "B.E. in Computer Science (CGPA 9.2/10, Distinction)",
  coursework: [
    "OOP", "Databases", "Discrete Math", "DSA", "OS", "Networks", "Machine Learning", "Data Mining", "Advanced DSA",
  ],
};

const skills = {
  languages: ["Python", "JavaScript", "PHP", "MySQL", "PostgreSQL", "C++"],
  tools: ["Django", "React", "AWS", "Azure DevOps Services", "Laravel", "Docker", "Kubernetes", "Git", "jQuery", "Kafka"],
};

// ======= Utilities =======
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

// 3D flip container
function FlipCard({ front, back, className = "" }) {
  return (
    <div className={`group [perspective:1200px] ${className}`}>
      <div className="relative h-full w-full rounded-2xl shadow-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </div>
        {/* BACK */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {back}
        </div>
      </div>
    </div>
  );
}

// Temporary light-weight replacements
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-white/10 bg-white/5 ${className}`}>{children}</div>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 sm:p-6 ${className}`}>{children}</div>
);
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-2 transition ${className}`}
    {...props}
  >
    {children}
  </button>
);
const Badge = ({ children, className = "" }) => (
  <span className={`inline-block text-xs px-2 py-1 rounded-lg bg-white/10 text-white ${className}`}>
    {children}
  </span>
);
const Separator = ({ className = "" }) => (
  <div className={`h-px w-full bg-white/10 my-3 ${className}`} />
);


// Sparkles background
function SparkleBG() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(16,185,129,.25),transparent_60%)]" />
      <div className="absolute top-1/2 -right-24 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(168,85,247,.25),transparent_60%)]" />
      <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(59,130,246,.25),transparent_60%)]" />
    </div>
  );
}

// Reaction Time Mini‑Game
function ReactionTimeGame() {
  const [state, setState] = useState("idle"); // idle | waiting | now | scored
  const [message, setMessage] = useState("Click START, then wait for GO!");
  const [best, setBest] = useState(null);
  const startRef = useRef(null);
  const timerRef = useRef(null);

  const start = () => {
    setState("waiting");
    setMessage("Wait for GO...");
    const delay = 800 + Math.random() * 2000;
    timerRef.current = setTimeout(() => {
      setState("now");
      setMessage("GO! Click now!");
      startRef.current = performance.now();
    }, delay);
  };

  const click = () => {
    if (state === "waiting") {
      // too early
      clearTimeout(timerRef.current);
      setState("idle");
      setMessage("Too soon! Try again.");
      return;
    }
    if (state === "now" && startRef.current) {
      const ms = Math.round(performance.now() - startRef.current);
      setState("scored");
      setMessage(`Nice! ${ms} ms reaction time`);
      setBest((b) => (b === null || ms < b ? ms : b));
      startRef.current = null;
      return;
    }
  };

  const reset = () => {
    clearTimeout(timerRef.current);
    setState("idle");
    setMessage("Click START, then wait for GO!");
    startRef.current = null;
  };

  return (
    <Card className="bg-black/40 backdrop-blur-md border-white/10 text-white">
      <CardContent className="p-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2"><TimerReset className="h-5 w-5" /><span className="font-semibold">Reaction Time</span></div>
        <p className="text-sm text-white/80">Test your reflexes! Best: {best ? `${best} ms` : "—"}</p>
        <div onClick={click} className={`w-full h-40 rounded-xl grid place-items-center text-xl sm:text-2xl font-bold transition-colors select-none cursor-pointer ${state === "now" ? "bg-emerald-500/60" : state === "waiting" ? "bg-yellow-500/40" : state === "scored" ? "bg-indigo-500/40" : "bg-zinc-800/60"}`}>
          {message}
        </div>
        <div className="flex gap-2">
          <Button onClick={start} variant="default" className="bg-emerald-600 hover:bg-emerald-500">Start</Button>
          <Button onClick={reset} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-white">Reset</Button>
        </div>
      </CardContent>
    </Card>
  );
}

// ======= Main Component =======
export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0b0b13] text-white pt-10">
      <SparkleBG />

      <AboutCodePlaygroundSection />

      {/* JOURNEY TIMELINE with FLIP CARDS */}
      {/* ===== Journey Section (Updated) ===== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-8">
        <motion.h2 {...fadeIn(0)} className="text-3xl sm:text-4xl font-extrabold">
          Journey so far
        </motion.h2>
        <p className="mt-2 text-white/70">
          Hover a card to flip and see a snapshot of my role and impact.
        </p>

        <div className="mt-6 space-y-6">
          {journey.map((j, idx) => (
            <motion.div
              key={j.id}
              {...fadeIn(0.08 * idx)}
              className="relative grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4"
            >
              <div className="sm:text-right">
                <Badge className="bg-emerald-600 hover:bg-emerald-500">
                  {j.date}
                </Badge>
              </div>

              <FlipCard
                className="min-h-[220px]"
                front={
                  <Card className="h-full bg-white/5 border-white/10">
                    <CardContent className="h-full sm:p-6 flex flex-col justify-between">
                      <div>
                        {/* Top: Logo + Title */}
                        <div className="flex flex-wrap items-center gap-3 mb-2 sm:mb-6">
                          {j.logo && (
                            <img
                              src={j.logo}
                              alt={j.title}
                              className="w-16 h-4 sm:h-8 sm:h-8 object-contain ms-4 mb-0 me-6"
                            />
                          )}
                          <h3 className="text-lg sm:text-xl font-bold leading-snug text-white">
                            {j.title}
                          </h3>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {j.tags.map((t) => (
                            <Badge
                              key={t}
                              variant="secondary"
                              className="bg-zinc-800 text-white border-white/10"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-end gap-2 text-emerald-400 mt-4">
                        <span className="text-sm whitespace-nowrap">Hover to view summary</span>
                        <ArrowRight className="h-4 w-4 flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>


                }
                back={
                  <Card className="h-full bg-gradient-to-br from-[#0a0f1a] via-[#0b1825] to-[#0a0f1a] border-white/10 relative overflow-hidden">
                    <CardContent className="h-full p-6 flex flex-col items-center justify-center text-center">
                      {/* subtle glow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 via-transparent to-cyan-500/10 pointer-events-none" />

                      {/* logo */}
                      <img
                        src={j.logo || "https://via.placeholder.com/60x60"}
                        alt={j.title}
                        className="w-20 h-10 object-contain mb-3 opacity-90"
                      />

                      {/* summary text */}
                      <p className="text-white/90 font-medium leading-relaxed max-w-md text-[12px] sm:text-[15px]">
                        {j.summary}
                      </p>

                      <a
                        href="https://docs.google.com/document/d/13Cqzche8LBBJlOC_gafl4aY9aamyqjb9zf9L-V-LH4I/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 text-sm"
                      >
                        View more in resume <ExternalLink className="h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                }
              />
            </motion.div>
          ))}
        </div>
      </section>


      {/* SKILLS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-8">
        <motion.h2 {...fadeIn(0)} className="text-3xl sm:text-4xl font-extrabold">Tech Stack & Expertise</motion.h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3"><Landmark className="h-5 w-5" /><span className="font-semibold">Languages</span></div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((t) => (
                  <Badge key={t} className="bg-zinc-800 border-white/10">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-3"><Landmark className="h-5 w-5" /><span className="font-semibold">Tools & Platforms</span></div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((t) => (
                  <Badge key={t} className="bg-zinc-800 border-white/10">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CERTS & EDUCATION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-black/40 border-white/10 lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-2"><Award className="h-5 w-5" /><h3 className="font-bold text-lg">Certifications</h3></div>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-center justify-between gap-2">
                    <span className="text-white/90">{c.name}</span>
                    <a href={c.link} className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300"><ExternalLink className="h-4 w-4" />Verify</a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-2"><GraduationCap className="h-5 w-5" /><h3 className="font-bold text-lg">Education</h3></div>
              <p className="mt-2 font-semibold">{education.school}</p>
              <p className="text-sm text-white/60">{education.span}</p>
              <p className="mt-2 text-white/90">{education.degree}</p>
              <Separator className="my-3 bg-white/10" />
              <div className="text-sm text-white/70">Relevant Coursework:</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <Badge key={c} className="bg-zinc-800 border-white/10">{c}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PLAYGROUND / MINI‑GAME */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-8">
        <motion.h2 {...fadeIn(0)} className="text-3xl sm:text-4xl font-extrabold">Have some fun 🎮</motion.h2>
        <p className="mt-2 text-white/70">Quick reaction test while you browse my work—your best score is saved for this session.</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <ReactionTimeGame />

          <Card className="bg-black/40 backdrop-blur-md border-white/10">
            <CardContent className="p-6 h-full flex flex-col">
              <h3 className="font-semibold">Try an external playground</h3>
              <p className="text-sm text-white/70 mt-1">You can also open an interactive sandbox in a new tab.</p>
              <div className="mt-4">
                <a href="https://codesandbox.io/" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500">
                  <Rocket className="h-4 w-4" /> Open CodeSandbox
                </a>
              </div>
              <p className="text-xs text-white/50 mt-3">Some game sites block iframes; opening in a new tab guarantees it works everywhere.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 py-14">
        <Card className="bg-gradient-to-r from-emerald-600/20 via-cyan-500/20 to-purple-600/20 border-white/10">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Let’s build something amazing together</h3>
            <p className="mt-2 text-white/80">Have an idea, a tough problem, or a product that needs scale? I’d love to help.</p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <a href="mailto:sumeraligh@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20"><Mail className="h-4 w-4" /> Email</a>
              {/* <a href="https://github.com/sumer-saran" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20"><Github className="h-4 w-4" /> GitHub</a> */}
              <a href="https://www.linkedin.com/in/sumersaranaligh/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
}