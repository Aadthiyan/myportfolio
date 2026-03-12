import Image from "next/image";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/" className="text-3xl font-poppins tracking-wider">
            <span className="font-bold capitalize">aadhithiyan</span>
            <span className="text-accent"></span>
          </Link>

          {/* right side: socials + resume */}
          <div className="flex items-center gap-x-8">
            <Socials />
            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1WOlYOW_JVBBOVHa0J0ywvnoZfeCIucO1/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-x-2 text-sm font-semibold text-white/90 hover:text-accent transition-all duration-300 border border-white/20 hover:border-accent rounded-full px-4 py-2"
            >
              <HiDownload className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
