import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJava,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTensorflow,
  SiSolidity,
  SiCplusplus,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [SiCplusplus, FaJava, FaJs, FaPython, SiSolidity],
      },
      {
        title: "Frameworks & Tools",
        icons: [
          FaReact,
          SiNextdotjs,
          SiTailwindcss,
          SiFastapi,
          SiFlask,
          FaNodeJs,
          FaDocker,
          FaGitAlt,
        ],
      },
      {
        title: "Databases & ML",
        icons: [SiPostgresql, SiMongodb, SiRedis, SiTensorflow],
      },
    ],
  },
  {
    title: "achievements",
    info: [
      {
        title: "IEEE ICCCNT 2023 — Published at IIT Delhi",
        stage: "Research",
      },
      {
        title: "IEEE ICSSEECC 2024 — Research Published",
        stage: "Research",
      },
      {
        title: "Runner-up, National-Level Judo Tournament",
        stage: "Sports",
      },
      {
        title: "Treasurer, CSE Association",
        stage: "Leadership",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Intern — Introspect Labs",
        stage: "Jul 2025 – Dec 2025",
      },
      {
        title: "Algorithm Dev Intern — DoTE / TNEA",
        stage: "Mar 2023 – Aug 2023",
      },
      {
        title: "Web Dev Intern — Business Web Solution",
        stage: "Oct 2022 – Dec 2022",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "B.E. Computer Science, GPA 8.62 — PSG iTech",
        stage: "2020 – 2024",
      },
      {
        title: "Career Essentials in Generative AI — Microsoft",
        stage: "2024",
      },
      {
        title: "Getting Started as Project Manager — LinkedIn",
        stage: "2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar flex container */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Engineering ideas into{" "}
            <span className="text-accent">scalable systems.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Full-stack software engineer with experience building scalable SaaS
            platforms, AI-driven systems, and blockchain applications. Strong
            background in backend development, distributed systems, and
            production-ready deployments with measurable real-world impact.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  GitHub projects.
                </div>
              </div>

              {/* publications */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  IEEE publications.
                </div>
              </div>

              {/* internships */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Internships.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
