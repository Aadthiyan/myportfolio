import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  SiNextdotjs, SiTailwindcss, SiFastapi, SiReact, SiPostgresql,
  SiTensorflow, SiSolidity, SiDocker, SiPython, SiFlask, SiVercel, SiEthereum
} from "react-icons/si";

const allProjects = [
  {
    title: "WildGuard-Edge",
    path: "/wildguard.png",
    link: "https://wildgaurd-edge-yu96o5mdcloxta2puyszs2.streamlit.app/",
    tech: [SiTensorflow, SiPython],
  },
  {
    title: "CipherDocs",
    path: "/cipherdocs.png",
    link: "https://cipher-docs-liard.vercel.app/",
    tech: [SiFastapi, SiReact, SiPostgresql],
  },
  {
    title: "RetailGen",
    path: "/retailgen.png",
    link: "https://retail-gen.vercel.app/",
    tech: [SiNextdotjs, SiTailwindcss],
  },
  {
    title: "Blockchain Verify",
    path: "/blockchain.png",
    link: "https://github.com/Aadthiyan/Blockchain-Counterfeit-Projects",
    tech: [SiSolidity, SiReact],
  },
  {
    title: "OmniYield",
    path: "/omniyield.png",
    link: "https://omniyield-theta.vercel.app/",
    tech: [SiNextdotjs, SiEthereum, SiTailwindcss],
  },
  {
    title: "SolShield",
    path: "/solshield.png",
    link: "https://solshield.vercel.app/home",
    tech: [SiSolidity, SiReact, SiTailwindcss],
  },
  {
    title: "EduCohort",
    path: "/educohort.png",
    link: "https://educohort-nine.vercel.app/",
    tech: [SiNextdotjs, SiPython, SiTailwindcss],
  },
  {
    title: "Qubic Guardian",
    path: "/qubic.png",
    link: "https://qubic-hack.vercel.app/",
    tech: [SiReact, SiDocker, SiVercel],
  },
];

const WorkSlider = () => {
  return (
    <div className="h-[420px] sm:h-[520px] overflow-y-auto pr-2 custom-scrollbar">
      <div className="grid grid-cols-2 gap-4">
        {allProjects.map((project, i) => (
          <div
            key={i}
            className="relative rounded-lg overflow-hidden flex items-center justify-center group"
          >
            <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
              {/* image */}
              <div className="relative w-full h-[140px] sm:h-[190px]">
                <Image
                  src={project.path}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* overlay gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-90 transition-all duration-700 flex flex-col items-center justify-center gap-y-4"
                aria-hidden
              />

              {/* link and title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-[100%] group-hover:translate-y-0 transition-all duration-500">
                {/* Tech stack icons */}
                <div className="flex gap-x-3 mb-4">
                  {project.tech && project.tech.map((Icon, idx) => (
                    <Icon key={idx} className="text-2xl text-white drop-shadow-md" />
                  ))}
                </div>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex border border-white/50 rounded-full px-4 py-2 hover:bg-white/20 items-center gap-x-2 text-[12px] tracking-[0.2em]"
                >
                  <div className="uppercase font-bold">{project.title}</div>
                  <div className="text-lg">
                    <BsArrowRight aria-hidden />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSlider;
