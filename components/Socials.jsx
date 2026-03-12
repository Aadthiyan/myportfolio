import Link from "next/link";

import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

export const socialData = [
  {
    name: "GitHub",
    link: "https://github.com/Aadthiyan",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/aadhithiyan01/",
    Icon: RiLinkedinLine,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/Aadhiks_95/",
    Icon: SiLeetcode,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-accent transition-all duration-300"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
