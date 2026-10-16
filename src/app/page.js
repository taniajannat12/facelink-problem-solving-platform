
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Database,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  Monitor,
  Search,
  ShieldCheck,
  Star,
  UserRound,
  Users,
  Briefcase,
  Quote,
  Code2,
  CircleCheck,
} from "lucide-react";

const categories = [
  {
    title: "Web Development",
    text: "React, Next.js, APIs & more",
    icon: Monitor,
  },
  {
    title: "Programming",
    text: "Code, bugs & technical issues",
    icon: Lightbulb,
  },
  {
    title: "Education",
    text: "Learning & academic problems",
    icon: GraduationCap,
  },
  {
    title: "Career",
    text: "Skills, jobs & career guidance",
    icon: Briefcase,
  },
];

const solvers = [
  {
    name: "Rahim Hasan",
    role: "Full Stack Developer",
    skills: ["Next.js", "React", "MongoDB"],
    initials: "RH",
    problems: "24 problems solved",
  },
  {
    name: "Arif Hasan",
    role: "React Developer",
    skills: ["React", "Firebase", "JavaScript"],
    initials: "AH",
    problems: "18 problems solved",
  },
  {
    name: "Nabil Ahmed",
    role: "Backend Developer",
    skills: ["Node.js", "MongoDB", "JWT"],
    initials: "NA",
    problems: "31 problems solved",
  },
];

const flowSteps = [
  {
    number: "01",
    title: "Write Your Problem",
    text: "Describe the question, issue or challenge you are facing.",
    icon: UserRound,
    color: "indigo",
  },
  {
    number: "02",
    title: "Choose How to Solve",
    text: "Select the solution path that fits your problem.",
    icon: Search,
    color: "violet",
  },
  {
    number: "03",
    title: "Select a Solution Path",
    text: "Choose from the solution database, human solver or AI assistant.",
    icon: Brain,
    color: "cyan",
  },
  {
    number: "04",
    title: "Connect & Solve",
    text: "Get the solution, discuss the problem and move forward.",
    icon: MessageCircle,
    color: "sky",
  },
  {
    number: "05",
    title: "Problem Solved",
    text: "Once the problem is resolved, it can be marked as solved.",
    icon: CheckCircle2,
    color: "emerald",
  },
];

const reviews = [
  {
    initials: "SJ",
    name: "Sadia Jannat",
    role: "Problem Seeker",
    text: "I could explain my problem and quickly find a direction instead of searching through many different places.",
  },
  {
    initials: "RH",
    name: "Rahim Hasan",
    role: "Problem Solver",
    text: "Helping someone solve a real problem makes sharing my development experience much more meaningful.",
  },
  {
    initials: "AH",
    name: "Arif Hasan",
    role: "Community Member",
    text: "FaceLink feels different because the main purpose of the connection is actually solving something together.",
  },
];

export default function Home() {
  const flowRef = useRef(null);

  useEffect(() => {
    const flowItems = flowRef.current?.querySelectorAll(".flow-item");

    if (!flowItems || flowItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Number(a.target.dataset.index) -
              Number(b.target.dataset.index)
          );

        visible.forEach((entry) => {
          const item = entry.target;
          const index = Number(item.dataset.index);

          setTimeout(() => {
            item.classList.add("flow-visible");
          }, index * 900);

          observer.unobserve(item);
        });
      },
      {
        threshold: 0.15,
      }
    );

    flowItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-reveal");

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">

   

      <section className="relative overflow-hidden px-6 py-12 sm:py-16 lg:px-10 lg:py-10">

        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_1fr]">

        

          <div className="order-2 lg:order-1">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
              What is FaceLink?
            </span>

            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
              A place where
              <span className="text-indigo-600">
                {" "}
                problems meet solutions.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
              FaceLink is a problem-solving network designed to make getting
              help simpler. Instead of searching everywhere, users can bring
              their problem to one place and choose the solution path that
              fits them.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-600">
                Find
              </span>

              <span className="rounded-full bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-600">
                Connect
              </span>

              <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-semibold text-cyan-600">
                Solve
              </span>

            </div>

          </div>



          <div className="order-1 lg:order-2">

            <div className="relative flex h-[430px] items-center justify-center">

              <div className="hero-bg-glow absolute h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="hero-bg-glow-two absolute h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="hero-ring hero-ring-one absolute h-[300px] w-[300px] rounded-full border border-indigo-200/50" />

              <div className="hero-ring hero-ring-two absolute h-[380px] w-[380px] rounded-full border border-violet-200/30" />

              <div className="hero-orbit-dot hero-dot-one" />
              <div className="hero-orbit-dot hero-dot-two" />
              <div className="hero-orbit-dot hero-dot-three" />

              <div className="hero-connection connection-one" />
              <div className="hero-connection connection-two" />
              <div className="hero-connection connection-three" />
              <div className="hero-connection connection-four" />



              <div className="hero-brain-wrapper relative">

                <div className="hero-brain-shadow absolute inset-[-18px] rounded-[32%] bg-indigo-500/20 blur-2xl" />

                <div className="hero-brain relative flex h-60 w-60 items-center justify-center rounded-[32%] rotate-[-4deg] bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 shadow-2xl shadow-indigo-200">

                  <div className="absolute inset-3 rounded-[30%] border border-white/10" />

                  <div className="absolute inset-7 rounded-[25%] bg-white/5 blur-xl" />

                  <div className="hero-brain-icon relative rotate-[4deg]">

                    <Brain
                      size={128}
                      strokeWidth={1.2}
                      className="text-white"
                    />

                  </div>

                  <div className="hero-brain-pulse absolute h-5 w-5 rounded-full bg-white" />

                  <div className="hero-scan-line absolute left-7 right-7 top-1/2 h-px bg-white/30" />

                </div>

              </div>



              <div className="hero-card hero-card-one absolute left-[2%] top-[17%]">

                <div className="hero-card-icon bg-indigo-50 text-indigo-600">
                  <Search size={17} />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Discover
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Find solutions
                  </p>
                </div>

              </div>

              <div className="hero-card hero-card-two absolute right-[2%] top-[18%]">

                <div className="hero-card-icon bg-violet-50 text-violet-600">
                  <Users size={17} />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Connect
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Meet a solver
                  </p>
                </div>

              </div>



              <div className="hero-card hero-card-three absolute bottom-[16%] left-[4%]">

                <div className="hero-card-icon bg-cyan-50 text-cyan-600">
                  <Database size={17} />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Knowledge
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Shared experience
                  </p>
                </div>

              </div>



              <div className="hero-card hero-card-four absolute bottom-[12%] right-[4%]">

                <div className="hero-card-icon bg-emerald-50 text-emerald-600">
                  <CheckCircle2 size={17} />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-800">
                    Solved
                  </p>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    Problem completed
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="relative overflow-hidden bg-[#f5f7ff] px-6 py-24 lg:px-10">

        <div className="absolute right-[-120px] top-20 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="absolute bottom-[-150px] left-[-120px] h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">

          <div className="scroll-reveal mx-auto max-w-2xl text-center">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
              Simple Process
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From problem to solution,
              <span className="text-indigo-600">
                {" "}
                in one flow.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Follow the simple steps and find the right way to solve your
              problem.
            </p>

          </div>


          <div
            ref={flowRef}
            className="mx-auto mt-14 max-w-3xl"
          >

            {flowSteps.map((step, index) => {

              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="flow-item"
                  data-index={index}
                >

                  <div
                    className={`
                      flow-card
                      group relative overflow-hidden rounded-2xl border
                      bg-white p-5 shadow-sm
                      transition duration-500
                      hover:-translate-y-1 hover:shadow-xl

                      ${
                        step.color === "indigo"
                          ? "border-indigo-100 hover:border-indigo-300"
                          : ""
                      }

                      ${
                        step.color === "violet"
                          ? "border-violet-100 hover:border-violet-300"
                          : ""
                      }

                      ${
                        step.color === "cyan"
                          ? "border-cyan-100 hover:border-cyan-300"
                          : ""
                      }

                      ${
                        step.color === "sky"
                          ? "border-sky-100 hover:border-sky-300"
                          : ""
                      }

                      ${
                        step.color === "emerald"
                          ? "border-emerald-100 hover:border-emerald-300"
                          : ""
                      }
                    `}
                  >

                    <div className="absolute right-[-50px] top-[-50px] h-32 w-32 rounded-full bg-indigo-100/40 blur-3xl transition duration-700 group-hover:scale-150" />

                    <div className="relative flex items-center gap-5">

                      <div
                        className={`
                          flex h-12 w-12 shrink-0 items-center justify-center
                          rounded-xl text-xs font-bold text-white shadow-lg

                          ${
                            step.color === "indigo"
                              ? "bg-indigo-600 shadow-indigo-200"
                              : ""
                          }

                          ${
                            step.color === "violet"
                              ? "bg-violet-600 shadow-violet-200"
                              : ""
                          }

                          ${
                            step.color === "cyan"
                              ? "bg-cyan-500 shadow-cyan-200"
                              : ""
                          }

                          ${
                            step.color === "sky"
                              ? "bg-sky-500 shadow-sky-200"
                              : ""
                          }

                          ${
                            step.color === "emerald"
                              ? "bg-emerald-500 shadow-emerald-200"
                              : ""
                          }
                        `}
                      >
                        {step.number}
                      </div>


                      <div
                        className={`
                          hidden h-11 w-11 shrink-0 items-center justify-center
                          rounded-xl sm:flex

                          ${
                            step.color === "indigo"
                              ? "bg-indigo-50 text-indigo-600"
                              : ""
                          }

                          ${
                            step.color === "violet"
                              ? "bg-violet-50 text-violet-600"
                              : ""
                          }

                          ${
                            step.color === "cyan"
                              ? "bg-cyan-50 text-cyan-600"
                              : ""
                          }

                          ${
                            step.color === "sky"
                              ? "bg-sky-50 text-sky-600"
                              : ""
                          }

                          ${
                            step.color === "emerald"
                              ? "bg-emerald-50 text-emerald-600"
                              : ""
                          }
                        `}
                      >
                        <Icon size={20} />
                      </div>


                      <div className="flex-1">

                        <div className="flex items-center gap-2">

                          <h3 className="text-sm font-bold sm:text-base">
                            {step.title}
                          </h3>

                          <CircleCheck
                            size={15}
                            className="text-emerald-500 opacity-0 transition group-hover:opacity-100"
                          />

                        </div>

                        <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:text-sm">
                          {step.text}
                        </p>

                      </div>


                      <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600 sm:flex">

                        <ArrowRight size={16} />

                      </div>

                    </div>

                  </div>


                  {index !== flowSteps.length - 1 && (
                    <div className="flow-connector relative flex h-14 items-center justify-center">

                      <div className="h-full w-px bg-gradient-to-b from-indigo-200 via-violet-200 to-cyan-200" />

                      <div className="flow-dot absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-indigo-500 shadow-lg shadow-indigo-300" />

                      <div className="flow-arrow absolute flex h-6 w-6 items-center justify-center rounded-full border border-indigo-100 bg-white shadow-sm">

                        <ArrowRight
                          size={11}
                          className="rotate-90 text-indigo-500"
                        />

                      </div>

                    </div>
                  )}

                </div>
              );
            })}

          </div>


          <div className="mt-10 flex justify-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-2.5 text-xs font-semibold text-emerald-600 shadow-sm animate-[completePulse_3s_ease-in-out_infinite]">

              <CheckCircle2 size={15} />

              Solution Completed

            </div>

          </div>

        </div>

      </section>



      <section className="scroll-reveal px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
                Explore Problems
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                What can you solve?
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Bring different kinds of questions to a community built around
              helping each other.
            </p>

          </div>


          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((category, index) => {

              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-indigo-600 transition duration-300 group-hover:rotate-3 group-hover:bg-indigo-600 group-hover:text-white">

                    <Icon size={20} />

                  </div>

                  <h3 className="mt-6 text-sm font-bold">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {category.text}
                  </p>

                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-indigo-600">

                    Explore

                    <ArrowRight
                      size={13}
                      className="transition group-hover:translate-x-1"
                    />

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>



      <section className="relative overflow-hidden bg-[#0b1120] px-6 py-24 text-white lg:px-10">

        <div className="absolute left-1/2 top-[-150px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">

          <div className="scroll-reveal">

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
              The FaceLink Network
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">

              Every problem can create

              <span className="text-cyan-300">
                {" "}
                a new connection.
              </span>

            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
              A seeker brings a problem. A solver brings experience. FaceLink
              connects them through a simple network where knowledge can move
              from one person to another.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                Knowledge Sharing
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                Human Connection
              </div>

              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                Collaboration
              </div>

            </div>

          </div>


          <div className="relative h-[390px]">

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 600 390"
              fill="none"
            >

              <path
                d="M120 85 L300 195 L480 90"
                stroke="currentColor"
                className="text-indigo-400/30"
                strokeWidth="1.5"
              />

              <path
                d="M120 85 L300 195 L135 305"
                stroke="currentColor"
                className="text-cyan-400/30"
                strokeWidth="1.5"
              />

              <path
                d="M480 90 L300 195 L465 305"
                stroke="currentColor"
                className="text-violet-400/30"
                strokeWidth="1.5"
              />

              <path
                d="M135 305 L300 195 L465 305"
                stroke="currentColor"
                className="text-emerald-400/30"
                strokeWidth="1.5"
              />

            </svg>


            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 shadow-2xl shadow-indigo-950 animate-[networkPulse_3s_ease-in-out_infinite]">

              <Brain size={46} />

            </div>


            <div className="absolute left-[8%] top-[10%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-indigo-300 backdrop-blur animate-[floatOne_4s_ease-in-out_infinite]">

              <UserRound size={23} />

            </div>


            <div className="absolute right-[8%] top-[11%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300 backdrop-blur animate-[floatTwo_4.5s_ease-in-out_infinite]">

              <Users size={23} />

            </div>


            <div className="absolute bottom-[9%] left-[11%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300 backdrop-blur animate-[floatOne_5s_ease-in-out_infinite]">

              <Search size={23} />

            </div>


            <div className="absolute bottom-[9%] right-[11%] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-300 backdrop-blur animate-[floatTwo_4s_ease-in-out_infinite]">

              <CheckCircle2 size={23} />

            </div>


            <div className="absolute left-[1%] top-[32%] text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Seeker
            </div>

            <div className="absolute right-[1%] top-[33%] text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Solver
            </div>

          </div>

        </div>

      </section>


      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-10">

        <div className="absolute left-[-100px] top-20 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="absolute bottom-10 right-[-100px] h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="scroll-reveal flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <div className="mb-3 flex items-center gap-2 text-indigo-600">

                <Users size={18} />

                <span className="text-xs font-bold uppercase tracking-[0.25em]">
                  Solver Community
                </span>

              </div>

              <h2 className="text-3xl font-bold sm:text-4xl">

                People ready to share

                <span className="text-indigo-600">
                  {" "}
                  what they know.
                </span>

              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Connect with people who have experience in the area where you
              need help.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {solvers.map((solver, index) => (

              <div
                key={solver.name}
                className="scroll-reveal group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition duration-500 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50"
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >

                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400" />


                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-4">

                    <div className="relative">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 via-violet-100 to-cyan-100 text-sm font-bold text-indigo-600 transition duration-500 group-hover:scale-105">

                        {solver.initials}

                      </div>

                      <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />

                    </div>

                    <div>

                      <h3 className="text-sm font-bold">
                        {solver.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        {solver.role}
                      </p>

                    </div>

                  </div>

                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-bold text-emerald-600">
                    Available
                  </span>

                </div>


                <div className="mt-7">

                  <div className="mb-3 flex items-center gap-2">

                    <Code2
                      size={14}
                      className="text-indigo-500"
                    />

                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Expertise
                    </span>

                  </div>

                  <div className="flex flex-wrap gap-2">

                    {solver.skills.map((skill) => (

                      <span
                        key={skill}
                        className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 text-[10px] font-medium text-slate-600 transition group-hover:border-indigo-100 group-hover:bg-indigo-50/50"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>


                <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">

                  <div className="flex items-center gap-2">

                    <CheckCircle2
                      size={14}
                      className="text-emerald-500"
                    />

                    <span className="text-[10px] font-medium text-slate-500">
                      {solver.problems}
                    </span>

                  </div>

                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition group-hover:bg-indigo-600 group-hover:text-white">

                    <ArrowRight size={14} />

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      <section className="relative overflow-hidden bg-[#f8f9fc] px-6 py-24 lg:px-10">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-100/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">

          <div className="scroll-reveal mx-auto max-w-2xl text-center">

            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-indigo-600 shadow-sm">

              <Quote size={22} />

            </div>

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
              Community Voices
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">

              What people say about

              <span className="text-indigo-600">
                {" "}
                FaceLink.
              </span>

            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Real experiences from people using FaceLink to find,
              share and solve problems.
            </p>

          </div>


          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {reviews.map((review, index) => (

              <div
                key={review.name}
                className="scroll-reveal relative rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-100 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >

                <div className="absolute right-6 top-6 text-indigo-100">

                  <Quote
                    size={42}
                    fill="currentColor"
                    strokeWidth={0}
                  />

                </div>


                <div className="flex gap-1 text-amber-400">

                  {[1, 2, 3, 4, 5].map((item) => (

                    <Star
                      key={item}
                      size={14}
                      fill="currentColor"
                    />

                  ))}

                </div>


                <p className="relative mt-7 min-h-[120px] text-sm leading-7 text-slate-600">
                  “{review.text}”
                </p>


                <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 text-xs font-bold text-indigo-600">
                    {review.initials}
                  </div>

                  <div>

                    <p className="text-sm font-bold">
                      {review.name}
                    </p>

                    <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-indigo-500">
                      {review.role}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      <section className="scroll-reveal px-6 pb-20 pt-4 lg:px-10">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 px-7 py-14 text-center text-white shadow-2xl shadow-indigo-200 sm:px-12">

          <div className="absolute left-1/2 top-[-100px] h-60 w-60 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            <ShieldCheck
              className="mx-auto mb-4 animate-[shieldFloat_3s_ease-in-out_infinite]"
              size={30}
            />

            <h2 className="text-3xl font-bold sm:text-4xl">
              Have a problem?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-indigo-100">
              Bring it to FaceLink and find the path that works for you.
            </p>

            <Link
              href="/seeker/problem"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-600 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Start Solving
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>


      <style jsx global>{`

        /* HERO */

        .hero-bg-glow {
          animation: heroGlow 5s ease-in-out infinite;
        }

        .hero-bg-glow-two {
          animation: heroGlowTwo 6s ease-in-out infinite;
        }

        .hero-ring {
          pointer-events: none;
        }

        .hero-ring-one {
          animation: heroRingOne 10s linear infinite;
        }

        .hero-ring-two {
          animation: heroRingTwo 15s linear infinite;
        }

        .hero-brain-wrapper {
          animation: heroBrainFloat 4.5s ease-in-out infinite;
          z-index: 10;
        }

        .hero-brain {
          animation: heroBrainTilt 5s ease-in-out infinite;
        }

        .hero-brain-shadow {
          animation: heroShadowPulse 4s ease-in-out infinite;
        }

        .hero-brain-icon {
          animation: heroIconPulse 3s ease-in-out infinite;
        }

        .hero-brain-pulse {
          animation: heroPulse 2s ease-in-out infinite;
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);
        }

        .hero-scan-line {
          animation: heroScan 3s ease-in-out infinite;
        }

        .hero-card {
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 15px;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow:
            0 15px 35px rgba(15, 23, 42, 0.08),
            0 4px 12px rgba(99, 102, 241, 0.06);
          backdrop-filter: blur(10px);
          opacity: 0;
        }

        .hero-card-icon {
          display: flex;
          height: 34px;
          width: 34px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }

        .hero-card-one {
          animation:
            heroCardIn 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards,
            heroFloatOne 4s ease-in-out 1.4s infinite;
        }

        .hero-card-two {
          animation:
            heroCardIn 1s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards,
            heroFloatTwo 4.5s ease-in-out 1.8s infinite;
        }

        .hero-card-three {
          animation:
            heroCardIn 1s cubic-bezier(0.22, 1, 0.36, 1) 1.2s forwards,
            heroFloatThree 5s ease-in-out 2.2s infinite;
        }

        .hero-card-four {
          animation:
            heroCardIn 1s cubic-bezier(0.22, 1, 0.36, 1) 1.6s forwards,
            heroFloatFour 4.2s ease-in-out 2.6s infinite;
        }

        .hero-orbit-dot {
          position: absolute;
          z-index: 5;
          height: 7px;
          width: 7px;
          border-radius: 999px;
          background: rgb(99 102 241);
          box-shadow: 0 0 14px 4px rgba(99, 102, 241, 0.25);
        }

        .hero-dot-one {
          left: 20%;
          top: 31%;
          animation: heroDotOne 4s ease-in-out infinite;
        }

        .hero-dot-two {
          right: 19%;
          top: 34%;
          background: rgb(139 92 246);
          animation: heroDotTwo 4.5s ease-in-out infinite;
        }

        .hero-dot-three {
          right: 25%;
          bottom: 24%;
          background: rgb(6 182 212);
          animation: heroDotThree 5s ease-in-out infinite;
        }

        .hero-connection {
          position: absolute;
          z-index: 2;
          height: 1px;
          width: 95px;
          transform-origin: center;
          background: linear-gradient(
            to right,
            transparent,
            rgba(99, 102, 241, 0.3),
            transparent
          );
          animation: connectionPulse 3s ease-in-out infinite;
        }

        .connection-one {
          left: 20%;
          top: 38%;
          transform: rotate(17deg);
        }

        .connection-two {
          right: 18%;
          top: 39%;
          transform: rotate(-17deg);
          animation-delay: 0.7s;
        }

        .connection-three {
          left: 21%;
          bottom: 35%;
          transform: rotate(-18deg);
          animation-delay: 1.2s;
        }

        .connection-four {
          right: 20%;
          bottom: 34%;
          transform: rotate(18deg);
          animation-delay: 1.8s;
        }


        /* HERO KEYFRAMES */

        @keyframes heroBrainFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes heroBrainTilt {
          0%,
          100% {
            transform: rotate(-4deg) scale(1);
          }

          50% {
            transform: rotate(3deg) scale(1.025);
          }
        }

        @keyframes heroIconPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.95;
          }

          50% {
            transform: scale(1.07);
            opacity: 1;
          }
        }

        @keyframes heroPulse {
          0% {
            transform: scale(0.7);
            opacity: 0.5;
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
          }

          50% {
            transform: scale(1.15);
            opacity: 1;
            box-shadow: 0 0 0 12px rgba(255, 255, 255, 0);
          }

          100% {
            transform: scale(0.7);
            opacity: 0.5;
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }

        @keyframes heroScan {
          0%,
          100% {
            top: 28%;
            opacity: 0;
          }

          20% {
            opacity: 0.3;
          }

          50% {
            top: 72%;
            opacity: 0.55;
          }

          80% {
            opacity: 0;
          }
        }

        @keyframes heroGlow {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.4;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.8;
          }
        }

        @keyframes heroGlowTwo {
          0%,
          100% {
            transform: scale(0.85);
            opacity: 0.25;
          }

          50% {
            transform: scale(1.15);
            opacity: 0.65;
          }
        }

        @keyframes heroShadowPulse {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.4;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.8;
          }
        }

        @keyframes heroRingOne {
          from {
            transform: rotate(0deg) scale(1);
          }

          to {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes heroRingTwo {
          from {
            transform: rotate(360deg) scale(1);
          }

          to {
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes heroCardIn {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.92);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes heroFloatOne {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes heroFloatTwo {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(9px);
          }
        }

        @keyframes heroFloatThree {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes heroFloatFour {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(8px);
          }
        }

        @keyframes heroDotOne {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }

          50% {
            transform: translate(28px, -18px) scale(1.5);
            opacity: 1;
          }
        }

        @keyframes heroDotTwo {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }

          50% {
            transform: translate(-25px, 22px) scale(1.5);
            opacity: 1;
          }
        }

        @keyframes heroDotThree {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }

          50% {
            transform: translate(-20px, -25px) scale(1.5);
            opacity: 1;
          }
        }

        @keyframes connectionPulse {
          0%,
          100% {
            opacity: 0.15;
          }

          50% {
            opacity: 0.65;
          }
        }


        /* GENERAL */

        @keyframes brainFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes brainPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }

          50% {
            transform: scale(1.06);
            opacity: 0.9;
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes floatOne {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes floatTwo {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(8px);
          }
        }


        /* SCROLL REVEAL */

        .scroll-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.9s ease,
            transform 0.9s cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .scroll-reveal.section-visible {
          opacity: 1;
          transform: translateY(0);
        }


        /* FLOW */

        .flow-card {
          opacity: 0;
          transform:
            translateY(45px)
            scale(0.94);

          transition:
            opacity 0.75s ease,
            transform 0.75s cubic-bezier(
              0.22,
              1,
              0.36,
              1
            ),
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .flow-item.flow-visible .flow-card {
          opacity: 1;
          transform:
            translateY(0)
            scale(1);
        }

        .flow-connector {
          opacity: 0;
          transition:
            opacity 0.4s ease;
        }

        .flow-item.flow-visible .flow-connector {
          opacity: 1;
        }

        .flow-connector::before {
          content: "";

          position: absolute;

          top: 0;

          left: 50%;

          width: 2px;

          height: 0;

          transform: translateX(-50%);

          background: linear-gradient(
            to bottom,
            rgb(165 180 252),
            rgb(196 181 253),
            rgb(103 232 249)
          );

          transition:
            height 0.7s
            cubic-bezier(
              0.22,
              1,
              0.36,
              1
            );
        }

        .flow-item.flow-visible .flow-connector::before {
          height: 100%;
        }

        .flow-dot {
          opacity: 0;
        }

        .flow-item.flow-visible .flow-dot {
          animation:
            flowDotMove
            1.1s
            cubic-bezier(
              0.65,
              0,
              0.35,
              1
            )
            forwards;
        }

        @keyframes flowDotMove {
          0% {
            top: 0;
            opacity: 0;
            transform:
              translateX(-50%)
              scale(0.5);
          }

          15% {
            opacity: 1;
          }

          75% {
            opacity: 1;
          }

          100% {
            top: calc(100% - 10px);
            opacity: 0;
            transform:
              translateX(-50%)
              scale(1);
          }
        }

        .flow-arrow {
          opacity: 0;
          transform:
            translateY(-5px)
            scale(0.7);
        }

        .flow-item.flow-visible .flow-arrow {
          animation:
            flowArrowAppear
            0.5s
            ease
            0.75s
            forwards;
        }

        @keyframes flowArrowAppear {
          from {
            opacity: 0;
            transform:
              translateY(-5px)
              scale(0.7);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        .flow-item.flow-visible .flow-card > div {
          animation:
            contentSlide
            0.7s
            ease
            both;
        }

        @keyframes contentSlide {
          from {
            opacity: 0;
            transform:
              translateX(-12px);
          }

          to {
            opacity: 1;
            transform:
              translateX(0);
          }
        }


        /* OTHER ANIMATIONS */

        @keyframes completePulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.04);
          }
        }

        @keyframes networkPulse {
          0%,
          100% {
            transform:
              translate(-50%, -50%)
              scale(1);
          }

          50% {
            transform:
              translate(-50%, -50%)
              scale(1.07);
          }
        }

        @keyframes shieldFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }


        /* MOBILE */

        @media (max-width: 640px) {

          .hero-ring-two {
            height: 330px;
            width: 330px;
          }

          .hero-ring-one {
            height: 260px;
            width: 260px;
          }

          .hero-brain {
            height: 210px;
            width: 210px;
          }

          .hero-brain-icon svg {
            width: 105px;
            height: 105px;
          }

          .hero-card {
            padding: 9px 11px;
          }

          .hero-card p:last-child {
            display: none;
          }

          .hero-card-one {
            left: 0;
          }

          .hero-card-two {
            right: 0;
          }

          .hero-card-three {
            left: 0;
          }

          .hero-card-four {
            right: 0;
          }

        }


        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .flow-card,
          .scroll-reveal {
            opacity: 1 !important;
            transform: none !important;
          }

        }

      `}</style>

    </main>
  );
}
