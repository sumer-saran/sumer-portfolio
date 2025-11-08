// AboutCodePlaygroundSection.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
    viewport: { once: true },
});

export default function AboutCodePlaygroundSection() {
    const navigate = useNavigate();

    // typewriter code animation
    const codeLines = [
        "const developer = {",
        "  name: 'Sumer Saran Aligh',",
        "  role: 'Full Stack Developer',",
        "  sayHi: () => {",
        "    console.log('👋 Hey there! Welcome to my dev space.');",
        "    console.log('Open to discussing tech, solving challenges, and helping others grow.');",
        "    console.log('Feel free to reach out if you want to discuss ideas or collaborate.');",
        "  },",
        "};",
    ];

    const [typed, setTyped] = useState([""]);
    useEffect(() => {
        let line = 0,
            col = 0;
        const speed = 15;
        const ticker = setInterval(() => {
            if (line >= codeLines.length) return clearInterval(ticker);
            const target = codeLines[line];
            setTyped((prev) => {
                const copy = [...prev];
                copy[line] = target.slice(0, col + 1);
                return copy;
            });
            col++;
            if (col >= target.length) {
                line++;
                col = 0;
                setTyped((prev) => [...prev, ""]);
            }
        }, speed);
        return () => clearInterval(ticker);
    // eslint-disable-next-line
    }, []);

    return (
        <section className="relative mx-auto max-w-7xl px-4 sm:px-8 pt-16 pb-10 text-white">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(16,185,129,.18),transparent_60%)]" />
                <div className="absolute top-1/2 -right-24 h-64 w-64 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(168,85,247,.18),transparent_60%)]" />
            </div>

            <motion.div
                {...fadeIn(0)}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide uppercase text-white/70"
            >
                <Sparkles className="h-4 w-4" />
                Developer Playground
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <motion.div
                    {...fadeIn(0.05)}
                    className="rounded-2xl border border-white/10 bg-[#0c0f18] overflow-hidden shadow-xl"
                >
                    {/* top bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#0f1323] border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-500/70" />
                            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                            <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                        </div>
                        <div className="text-xs text-white/60 font-mono">aboutMe.js</div>
                        <Terminal className="h-4 w-4 text-white/50" />
                    </div>

                    {/* code area */}
                    <div className="relative grid grid-cols-[auto,1fr] font-mono text-[13px] leading-6 overflow-hidden">
                        {/* Line numbers column */}
                        <div className="select-none bg-[#0b0e19] text-white/40 px-4 py-4 border-r border-white/5 flex flex-col items-end">
                            {Array.from({ length: codeLines.length }).map((_, i) => (
                                <div key={i} className="tabular-nums h-6">
                                    {i + 1}
                                </div>
                            ))}
                        </div>

                        {/* Scrollable code area */}
                        <div
                            className="overflow-x-auto whitespace-pre scrollbar-thin scrollbar-thumb-emerald-500/60 scrollbar-track-transparent hover:scrollbar-thumb-emerald-400/80"
                            style={{
                                scrollbarColor: "rgba(52,211,153,0.6) transparent", // for Firefox
                                scrollbarWidth: "thin",
                            }}
                        >
                            <pre className="px-4 py-4 min-w-max">
                                {typed.map((line, i) => (
                                    <code key={i} className="block">
                                        {line}
                                        {i === typed.length - 1 && (
                                            <span className="inline-block w-2 h-4 align-middle bg-emerald-400 animate-pulse ml-1" />
                                        )}
                                    </code>
                                ))}
                            </pre>
                        </div>
                    </div>
                </motion.div>

                {/* === SUMMARY PANEL === */}
                <motion.div
                    {...fadeIn(0.1)}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 shadow-xl flex flex-col justify-between"
                >
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                            Building Scalable Experiences 🚀
                        </h2>
                        <p className="text-white/80">
                            I specialize in crafting data-driven, scalable, and efficient
                            systems. With experience in agile teams,
                            I have delivered impactful tech solutions for{" "}
                            <span className="text-white font-medium">E-commerce</span>,{" "}
                            <span className="text-white font-medium">Order Management</span>,{" "}
                            <span className="text-white font-medium">Fleet Management</span>,
                            and other <span className="text-white font-medium">Enterprise Systems</span>.
                        </p>

                        {/* Tech logos */}
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            {[
                                { slug: "django", name: "Django" },
                                { slug: "php", name: "PHP" },
                                { slug: "react", name: "React" },
                                { slug: "nodedotjs", name: "Node.js" },
                                { slug: "postgresql", name: "PostgreSQL" },
                                { slug: "mysql", name: "MySQL" },
                                { slug: "docker", name: "Docker" },
                                { slug: "kubernetes", name: "Kubernetes" },
                                { slug: "devpost", name: "AWS/Azure DevOps" },
                            ].map(({ slug, name }) => (
                                <div
                                    key={slug}
                                    title={name}
                                    className="flex items-center gap-2 rounded-md bg-[#0b0e19] px-3 py-2 text-sm"
                                >
                                    <img
                                        src={`https://cdn.simpleicons.org/${slug}/FFFFFF`}
                                        alt={name}
                                        className="h-5 w-5"
                                        loading="lazy"
                                    />
                                    <span className="text-white/80 text-xs">{name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
  <div className="flex items-center w-40 justify-start gap-4 rounded-xl border border-white/10 bg-[#0c111b]/60 p-3 shadow-md">
    <Trophy className="h-6 text-white/50 w-6 flex-shrink-0" />
    <div className="text-left">
      <div className="text-xs text-white/60">Experience</div>
      <div className="font-semibold text-emerald-400 text-lg">3+ Years</div>
    </div>
  </div>
</div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <button
                            onClick={() => navigate("/contact")}
                            className="rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-sm font-medium"
                        >
                            Let’s Talk
                        </button>
                        <a
                            href="https://www.linkedin.com/in/sumersaranaligh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl bg-white/10 hover:bg-white/20 px-4 py-2 text-sm font-medium"
                        >
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
