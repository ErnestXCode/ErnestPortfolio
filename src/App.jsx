import { useState } from "react";

import {
  trackEvent,
  trackDownload,
  trackResume,
  trackProject,
  trackNavigation,
} from "./analytics";

const projects = [
  {
  category: "Valuation",
  title: "PayPal — DCF Valuation",
  description:
    "A revenue-driven DCF isolating the mechanical link between rising average transaction value and declining take rate, grounded in PayPal's acquisition history and current strategic position.",
  tags: ["DCF", "Financial Modeling", "Valuation"],
  status: "Research",
  link: "/PYPL_DCF.xlsm",
  type: "download",
},
  {
    category: "Valuation",
    title: "Microsoft — DCF Valuation",
    description:
      "A driver-based DCF built around Microsoft's segment economics, operating assumptions, and long-term cash-flow generation.",
    tags: ["DCF", "Financial Modeling", "Valuation"],
    status: "Research",
    link: "/MSFT_DCF.xlsx",
    type: "download",
  },

  {
    category: "Valuation",
    title: "Copart — DCF Valuation",
    description:
      "A bottom-up valuation model linking vehicle volumes, total-loss frequency, service revenue, and long-term operating assumptions.",
    tags: ["DCF", "Operating Model", "Equity Research"],
    status: "Research",
    link: "/COPART_DCF.xlsx",
    type: "download",
  },

  {
    category: "Financial Systems",
    title: "K-Unity Loan Pipeline MIS",
    description:
      "An Excel-based management information system with pipeline registers, RM scorecards, SLA aging analysis, dashboards, PivotTables and VBA automation. Shown with dummy data.",
    tags: ["Excel", "VBA", "MIS"],
    status: "Built",
    link: "/K-Unity-MIS.xlsm",
    type: "download",
  },

  {
    category: "Financial Systems",
    title: "School Management Platform",
    description:
      "A SaaS-style school management platform designed to centralize fee management, attendance, examinations, report cards, and parent-teacher communication through dedicated dashboards.",
    tags: ["SaaS", "React", "MIS"],
    status: "Built",
    link: "https://nexa-two-swart.vercel.app/",
    type: "website",
  },

  {
    category: "Automation",
    title: "M-Pesa Statement Reconciliation",
    description:
      "A web application built to extract M-Pesa statement transactions and automate monthly inflow and outflow reconciliation.",
    tags: ["React", "JavaScript", "Automation"],
    status: "Live",
    link: "https://nexa-mpesa-analyzer.vercel.app/",
    type: "website",
  },

  {
    category: "FinTech",
    title: "Swaff Holdings",
    description:
      "A website I am building for a recovery officer developing Swaff Holdings as a new business venture.",
    tags: ["React", "Web Development", "FinTech"],
    status: "In Development",
    link: "https://swaff-holdings.vercel.app/",
    type: "website",
  },

  {
    category: "FinTech",
    title: "K-Unity Member App",
    description:
      "A Progressive Web App prototype covering product information, digital onboarding, annual reports and member feedback.",
    tags: ["React", "PWA", "FinTech"],
    status: "Prototype",
    link: "https://k-unity.vercel.app/",
    type: "website",
  },
];

function App() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Valuation",
    "Financial Systems",
    "Automation",
    "FinTech",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleFilterChange = (category) => {
    setFilter(category);

    trackEvent("filter_project", {
      filter_category: category,
    });
  };

  const handleProjectClick = (project) => {
    if (project.type === "download") {
      trackDownload({
        fileName: project.link.split("/").pop(),
        projectName: project.title,
        projectCategory: project.category,
      });
    } else {
      trackProject({
        projectName: project.title,
        projectCategory: project.category,
        destination: project.link,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#"
            onClick={() =>
              trackEvent("nav_click", {
                destination: "home",
              })
            }
            className="text-sm font-medium tracking-tight"
          >
            Ernest Ngugi
          </a>

          <div className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
            <a
              href="#work"
              onClick={() => trackNavigation("work")}
              className="transition hover:text-white"
            >
              Work
            </a>

            <a
              href="#about"
              onClick={() => trackNavigation("about")}
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => trackNavigation("contact")}
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Ernest%20Ngugi%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackResume("navbar")}
              className="hidden rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300 transition hover:border-white/30 hover:text-white sm:block"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-40 pb-28">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />

          <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-16 md:grid-cols-[1fr_300px]">
              <div>
                <div className="mb-6 flex items-center gap-3 text-sm text-neutral-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Finance & Investment Analysis
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl md:text-7xl">
                  Ernest Ngugi
                  <span className="block text-neutral-500">
                    Financial modeling. Valuation. Analysis.
                  </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
                  I build financial models, valuation frameworks, and
                  technology-enabled analytical tools to understand businesses
                  beyond the headline numbers.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    onClick={() =>
                      trackEvent("cta_click", {
                        cta: "view_my_work",
                      })
                    }
                    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
                  >
                    View my work
                  </a>

                  <a
                    href="#about"
                    onClick={() =>
                      trackEvent("cta_click", {
                        cta: "about_me",
                      })
                    }
                    className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-white/25"
                  >
                    About me
                  </a>

                  <a
                    href="/Ernest%20Ngugi%20Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackResume("hero")}
                    className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-neutral-300 transition hover:border-white/25 hover:text-white"
                  >
                    Resume
                  </a>
                </div>
              </div>

              {/* PROFILE IMAGE */}
              <div className="mx-auto w-full max-w-[280px]">
                <div className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[#050505]">
                  <img
                    src="/Ernest_pfp.jpg"
                    alt="Ernest Ngugi"
                    className="h-full w-full object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-90"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20" />
                </div>

                <p className="mt-4 text-center text-xs text-neutral-600">
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-white/[0.08]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/[0.08] md:grid-cols-4">
            {[
              [
                String(
                  projects.filter(
                    (project) => project.category === "Valuation",
                  ).length,
                ),
                "Valuation models",
              ],
              [
                String(
                  projects.filter(
                    (project) => project.category === "Financial Systems",
                  ).length,
                ),
                "Financial systems",
              ],
              [
                String(
                  projects.filter(
                    (project) =>
                      project.category === "Automation" ||
                      project.category === "FinTech",
                  ).length,
                ),
                "Apps & web projects",
              ],
              ["2026", "Finance & Banking"],
            ].map(([number, label]) => (
              <div key={label} className="px-6 py-8">
                <div className="text-2xl font-semibold tracking-tight">
                  {number}
                </div>

                <div className="mt-1 text-xs text-neutral-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-600">
                Selected work
              </p>

              <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                Models & projects
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500">
                Financial models, valuation work, analytical systems and
                finance-related software I have built.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition ${
                    filter === category
                      ? "border-white bg-white text-black"
                      : "border-white/10 text-neutral-500 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-[#080808] p-7 transition hover:bg-[#0d0d0d]"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs text-neutral-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] text-neutral-500">
                    {project.status}
                  </span>
                </div>

                <p className="mb-2 text-xs text-neutral-600">
                  {project.category}
                </p>

                <h3 className="text-xl font-medium tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 min-h-[72px] text-sm leading-6 text-neutral-500">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.04] px-2 py-1 text-[10px] text-neutral-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  {project.type === "download" ? (
                    <a
                      href={project.link}
                      download
                      onClick={() => handleProjectClick(project)}
                      className="inline-flex items-center gap-2 text-xs text-neutral-500 transition hover:text-white"
                    >
                      Download model
                      <span>↓</span>
                    </a>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => handleProjectClick(project)}
                      className="inline-flex items-center gap-2 text-xs text-neutral-500 transition hover:text-white"
                    >
                      View project
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="border-y border-white/[0.08] bg-[#080808]"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                About
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                Finance, but beyond the spreadsheet.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-7 text-neutral-400">
              <p>
                I am a Finance and Banking student at Moi University with a
                strong interest in investment analysis, financial modeling,
                valuation, and asset management.
              </p>

              <p>
                I build models to understand what actually drives a business:
                its operating model, financial statements, capital
                requirements, competitive position, and the assumptions that
                ultimately determine its value.
              </p>

              <p>
                Alongside financial modeling, I use Excel, VBA, Python and
                JavaScript to automate repetitive processes and turn financial
                analysis into usable tools.
              </p>

              <p className="text-neutral-300">
                I am particularly interested in opportunities where rigorous
                financial analysis can contribute to better investment and
                business decisions.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Financial Analysis",
                items: [
                  "DCF Valuation",
                  "Three-Statement Modeling",
                  "Comparable Companies",
                  "Investment Analysis",
                  "Financial Forecasting",
                ],
              },
              {
                title: "Tools",
                items: [
                  "Microsoft Excel",
                  "VBA",
                  "Python",
                  "React",
                  "JavaScript",
                ],
              },
              {
                title: "Focus",
                items: [
                  "Equity Research",
                  "Investment Analysis",
                  "Asset Management",
                  "Financial Modeling",
                  "Technology-enabled Finance",
                ],
              },
            ].map((group) => (
              <div key={group.title}>
                <h3 className="mb-5 text-sm font-medium">{group.title}</h3>

                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="border-b border-white/[0.06] pb-3 text-sm text-neutral-500"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-white/[0.08] bg-[#080808]"
        >
          <div className="mx-auto max-w-6xl px-6 py-28">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-600">
              Contact
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              Interested in the work?
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-neutral-500">
              I am open to conversations around investment analysis, financial
              modeling, research, and finance opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:enkaranu58@gmail.com"
                onClick={() =>
                  trackEvent("contact_click", {
                    method: "email",
                  })
                }
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
              >
                Email me
              </a>

              <a
                href="tel:+254795482452"
                onClick={() =>
                  trackEvent("contact_click", {
                    method: "phone",
                  })
                }
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition hover:border-white/25"
              >
                +254 795 482 452
              </a>

              <a
                href="https://www.linkedin.com/in/ernest-ngugi-35723a356/"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("contact_click", {
                    method: "linkedin",
                  })
                }
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition hover:border-white/25"
              >
                LinkedIn
              </a>

              <a
                href="/Ernest%20Ngugi%20Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackResume("contact")}
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white transition hover:border-white/25"
              >
                View CV
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 px-6 py-8 text-xs text-neutral-600 sm:flex-row">
          <span>© 2026 Ernest Ngugi Karanu</span>
          <span>Finance & Investment Analysis</span>
        </div>
      </footer>
    </div>
  );
}

export default App;