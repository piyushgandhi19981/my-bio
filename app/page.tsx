"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--background)] transition-colors duration-300">
      <ThemeToggle />
      {/* Spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column - Fixed Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Profile Image */}
              <div className="mb-8">
                <Image
                  src="/profile.jpeg"
                  alt="Piyush Gandhi"
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-slate-700/50 shadow-xl transition-all duration-300 hover:border-teal-400/50 hover:scale-105"
                  priority
                />
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Piyush Gandhi
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Development Engineer 2 at Dream11
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                Detail-oriented and innovative Software Engineer building
                accessible, pixel-perfect digital experiences for the web.
              </p>

              {/* Navigation */}
              <nav
                className="nav hidden lg:block"
                aria-label="In-page jump links"
              >
                <ul className="mt-16 w-max">
                  {["About", "Experience", "Projects", "Education"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          className="group flex items-center py-3 active"
                          href={`#${item.toLowerCase()}`}
                        >
                          <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                          <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                            {item}
                          </span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul
              className="ml-1 mt-8 flex items-center"
              aria-label="Social media"
            >
              {[
                {
                  name: "GitHub",
                  icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
                  url: "https://github.com/piyushgandhi19981",
                },
                {
                  name: "LinkedIn",
                  icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  url: "https://www.linkedin.com/in/piyush-gandhi-28553a168/",
                },
                {
                  name: "Instagram",
                  icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
                  url: "https://www.instagram.com/gge_201/",
                },
                {
                  name: "Email",
                  icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
                  url: "mailto:gandhipiyush29@gmail.com",
                },
              ].map((social) => (
                <li key={social.name} className="mr-5 text-xs shrink-0">
                  <a
                    className="block hover:text-slate-200"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${social.name} (opens in a new tab)`}
                    title={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </header>

          {/* Right Column - Scrollable Content */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            {/* About Section */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4 text-slate-400">
                  Detail-oriented and innovative Software Engineer with{" "}
                  <span className="text-slate-200 font-medium">
                    5 years of experience
                  </span>{" "}
                  in designing, testing, and developing software solutions.
                  Possesses a deep understanding of web technologies, with a
                  focus on delivering innovative business solutions.
                </p>
                <p className="mb-4 text-slate-400">
                  I thrive in fast-paced, high-energy, and deadline-driven
                  environments, and am eager to take on additional tasks. My
                  expertise spans across{" "}
                  <span className="text-slate-200 font-medium">
                    React JS, React Native, React Redux, Node.js, HTML/CSS,
                    JavaScript, Python, Java, C, and C++
                  </span>
                  .
                </p>
                <p className="mb-4 text-slate-400">
                  Currently, I'm working with{" "}
                  <span className="text-slate-200 font-medium">
                    React Native
                  </span>{" "}
                  for implementation of UX of different apps. I have experience
                  in working with Node.js, Redux, HTML, CSS, jQuery and other FE
                  Skills. I also have experience working with Python for ML
                  projects using tools like Jupyter Notebook and Kaggle.
                </p>
                <p className="text-slate-400">
                  My work focuses on crafting accessible, pixel-perfect user
                  interfaces that blend thoughtful design with robust
                  engineering, creating experiences that not only look great but
                  are meticulously built for performance and usability.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  {[
                    {
                      period: "Oct 2024 — Present",
                      title: "Software Development Engineer 2",
                      company: "Dream11",
                      location: "Mumbai",
                      description:
                        "Developed and integrated multiple config-driven ad slots in Dream11, simplifying placement, ensuring flexibility, and significantly reducing recurring developer efforts. Built a reusable component to accept configurations, enabling seamless display of diverse ad types from a single centralized integration point.",
                      achievements: [
                        "Enhanced impression tracking utility to precisely capture ad visibility, ensuring accurate user exposure metrics and improving measurement reliability within Dream11's application",
                        "Supported third-party Ads SDK and GAM integration with reliable impression and click tracking, plus a ReactJS dashboard for config-driven event mapping",
                      ],
                      technologies: [
                        "React Native",
                        "TypeScript",
                        "JavaScript",
                        "React",
                        "Redux",
                      ],
                      link: "https://www.dream11.com/",
                    },
                    {
                      period: "Oct 2022 — Sep 2024",
                      title: "Senior Software Engineer",
                      company: "Tekion",
                      location: "Bengaluru",
                      description:
                        "Lead a frontend team of six junior developers, guiding them in building config-driven, pixel-perfect frontend applications. Responsible for writing documentation for scalable, enterprise-level applications, including User Management and Global Search.",
                      achievements: [
                        "Achieved a 95% reduction in code for the Global Search application by eliminating redundancy and enhancing reusability",
                        "Scaled the User Management application to provide role-based access across different regions, supporting multiple levels of user access",
                        "Focused on writing and reviewing code from an architectural perspective, optimizing data flow, and enhancing performance",
                        "Conducted thorough code reviews, managed the entire product delivery process, and oversaw the merging of code from junior developers",
                      ],
                      technologies: [
                        "React",
                        "JavaScript",
                        "TypeScript",
                        "Redux",
                        "HTML/CSS",
                        "Node.js",
                      ],
                      link: "https://tekion.com/",
                    },
                    {
                      period: "Oct 2021 — Sep 2022",
                      title: "Software Engineer",
                      company: "Tekion",
                      location: "Bengaluru",
                      description:
                        "Took ownership of key applications, including Customer Management, Employee Onboarding, and Compliance Management Requests. Implemented sections in the Customer Management application using Intersection Observers, reducing duplicate customer entries by 75%.",
                      achievements: [
                        "Increased test coverage from 18% to 85% by developing unit test cases for core applications",
                        "Developed a GDPR and CPRA compliance application for Europe and the U.S., featuring data protection, report generation, and consent management using Next.js",
                      ],
                      technologies: [
                        "React",
                        "Next.js",
                        "JavaScript",
                        "Redux",
                        "Jest",
                        "HTML/CSS",
                      ],
                      link: "https://tekion.com/",
                    },
                    {
                      period: "Aug 2020 — Sep 2021",
                      title: "Associate Software Engineer",
                      company: "Tekion",
                      location: "Bengaluru",
                      description:
                        "Built 7-8 key applications for core and platform teams, mastering component structure and scalable architecture. Optimized lookup entity fetching, improving page load time by 30%; granted merge access and appointed code reviewer.",
                      achievements: [
                        "Developed multiple enterprise-level applications from scratch",
                        "Optimized performance and reduced page load times significantly",
                        "Granted code review and merge access for team contributions",
                      ],
                      technologies: [
                        "React",
                        "JavaScript",
                        "Redux",
                        "HTML/CSS",
                        "Node.js",
                      ],
                      link: "https://tekion.com/",
                    },
                  ].map((job, index) => (
                    <li key={index} className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header
                          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                          aria-label={job.period}
                        >
                          {job.period}
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href={job.link}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${job.title} at ${job.company}`}
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  {job.title} ·{" "}
                                  <span className="inline-block">
                                    {job.company}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                            <div className="text-slate-500 text-sm font-normal mt-1">
                              {job.location}
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-slate-400">
                            {job.description}
                          </p>
                          {job.achievements && (
                            <ul className="mt-2 text-sm leading-normal text-slate-400 list-disc list-inside space-y-1">
                              {job.achievements.map((achievement, i) => (
                                <li key={i} className="text-slate-400">
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          )}
                          <ul
                            className="mt-2 flex flex-wrap"
                            aria-label="Technologies used"
                          >
                            {job.technologies.map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-12">
                  <a
                    className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-6 py-3 font-medium text-teal-300 hover:bg-teal-400/20 hover:text-teal-200 transition-all duration-300 hover:scale-105 group"
                    href="https://drive.google.com/file/d/1tYBI0FbWb4IgZijdb5NxJ4zVcvUZWR2P/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Download Resume (opens in a new tab)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Download Resume</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Key Projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list space-y-12">
                  {[
                    {
                      title: "Enterprise User Management System",
                      description:
                        "Designed and implemented a scalable user management platform with role-based access control, multi-factor authentication, and workspace-level permissions. Architected the system to support dynamic workspace hierarchies without frontend code changes, enabling seamless enterprise-level expansion.",
                      features: [
                        "Role & Access Management",
                        "Multi-Factor Authentication",
                        "Bulk User Operations",
                        "Account Security Controls",
                      ],
                      technologies: ["React", "TypeScript", "Redux", "Node.js"],
                    },
                    {
                      title: "Global Search Application",
                      description:
                        "Built an intelligent cross-module search system with advanced filtering capabilities. Implemented smart search algorithms that automatically detect input patterns and map them to relevant entity fields, providing comprehensive views of customer data including vehicles, transactions, appointments, and deals.",
                      features: [
                        "Intelligent Search Matching",
                        "Cross-Module Entity Search",
                        "Advanced Filtering",
                        "Unified Customer View",
                      ],
                      technologies: [
                        "React",
                        "TypeScript",
                        "Redux",
                        "Elasticsearch",
                      ],
                    },
                    {
                      title: "Audit Logs & Data Tracking System",
                      description:
                        "Developed a comprehensive audit logging platform that tracks all data modifications across the system. Created a metadata-driven architecture for field-level change tracking with bulk data resolution and time-based filtering, integrated with data warehouse for efficient storage and retrieval.",
                      features: [
                        "Field-Level Change Tracking",
                        "Metadata Management",
                        "Data Warehouse Integration",
                        "Timeline Visualization",
                      ],
                      technologies: [
                        "React",
                        "TypeScript",
                        "Data Warehouse",
                        "Redux",
                      ],
                    },
                    {
                      title: "User Mimicking & Approval Dashboard",
                      description:
                        "Created internal developer tools including a production user mimicking feature for debugging and an approval management system for service builds, restricted APIs, and property configurations. Streamlined DevOps workflows by automating approval processes.",
                      features: [
                        "Production User Mimicking",
                        "Service Build Management",
                        "API Access Control",
                        "Automated DevOps Workflows",
                      ],
                      technologies: [
                        "React",
                        "TypeScript",
                        "Node.js",
                        "CI/CD Integration",
                      ],
                    },
                    {
                      title: "Configurable Ads Integration Platform",
                      description:
                        "Developed a comprehensive ad management system supporting multiple ad networks including AdMob, Google Ad Manager, and third-party providers. Created a configurable component architecture that enables dynamic ad placement across different locations within the application with real-time impression tracking and click analytics.",
                      features: [
                        "Multi-Network Ad Integration",
                        "Dynamic Ad Placement",
                        "Real-Time Impression Tracking",
                        "Configurable Ad Slots",
                        "Click Analytics Dashboard",
                        "Third-Party SDK Support",
                      ],
                      technologies: [
                        "React Native",
                        "TypeScript",
                        "AdMob SDK",
                        "Google Ad Manager",
                        "Redux",
                        "Analytics",
                      ],
                    },
                    {
                      title: "GDPR & CPRA Compliance Suite",
                      description:
                        "Implemented region-agnostic compliance management applications supporting GDPR and CPRA regulations. Developed customer consent flows, data retention policies, and field-level preferences for document delivery across multiple regions.",
                      features: [
                        "Multi-Region Compliance",
                        "Consent Management",
                        "Data Retention Controls",
                        "Privacy Preferences",
                      ],
                      technologies: [
                        "Next.js",
                        "React",
                        "TypeScript",
                        "Tailwind CSS",
                      ],
                    },
                    {
                      title: "Entity Merge & Duplicate Prevention",
                      description:
                        "Built intelligent systems for preventing duplicate entities and merging existing records. Implemented rule-based matching algorithms, conflict resolution interfaces, and transaction validation to ensure data integrity during merge operations.",
                      features: [
                        "Smart Duplicate Detection",
                        "Rule-Based Matching",
                        "Conflict Resolution UI",
                        "Transaction Validation",
                      ],
                      technologies: [
                        "React",
                        "TypeScript",
                        "Redux",
                        "Pattern Matching",
                      ],
                    },
                    {
                      title: "Localized Address Management",
                      description:
                        "Developed a universal address component supporting international localization with country-specific validation. Created a backend service architecture for storing addresses across different assets while maintaining module-specific requirements and validation rules.",
                      features: [
                        "International Localization",
                        "Dynamic Validation",
                        "Zip Code Verification",
                        "Country-State Mapping",
                      ],
                      technologies: [
                        "React",
                        "TypeScript",
                        "Geolocation APIs",
                        "Redux",
                      ],
                    },
                    {
                      title: "Employee Payroll Configuration",
                      description:
                        "Implemented dynamic form generation system for employee management and payroll configuration. Created generic, API-driven forms supporting country-specific taxation rules with automated field rendering based on backend specifications.",
                      features: [
                        "Dynamic Form Generation",
                        "Multi-Country Taxation",
                        "Employee-User Linking",
                        "Payroll Automation",
                      ],
                      technologies: [
                        "React",
                        "TypeScript",
                        "Dynamic Forms",
                        "Redux",
                      ],
                    },
                  ].map((project, index) => (
                    <li key={index}>
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:col-span-8">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div className="text-base">{project.title}</div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal text-slate-400">
                            {project.description}
                          </p>
                          {project.features && (
                            <ul className="mt-3 text-sm leading-normal text-slate-400 space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="mr-2 text-teal-300">▸</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          <ul
                            className="mt-3 flex flex-wrap"
                            aria-label="Technologies used"
                          >
                            {project.technologies.map((tech) => (
                              <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Education Section */}
            <section
              id="education"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Education"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Education
                </h2>
              </div>
              <div>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="Aug 2016 to May 2020"
                  >
                    Aug 2016 — May 2020
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div className="text-base">
                        B. Tech (ICT with minor in CS)
                      </div>
                      <div className="text-slate-400 font-normal mt-1">
                        DA-IICT, Gandhinagar
                      </div>
                    </h3>
                    <div className="mt-2 text-sm text-slate-400">
                      <p className="mb-2">
                        <span className="text-slate-200 font-medium">
                          CPI: 8.8
                        </span>
                      </p>
                      <p>
                        Worked on different projects in fields like IT and
                        communications. One of the top 20 students in my batch.
                        Upgraded my branch from ICT to ICT(CS).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
