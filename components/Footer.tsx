import Image from "next/image";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative w-full pt-20 pb-10 overflow-hidden"
    >
      {/* background grid */}
      <div className="absolute left-0 -bottom-72 w-full min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="footer background grid"
          className="opacity-50 object-cover"
          fill
          priority
        />
      </div>

      {/* content */}
      <div className="relative flex flex-col items-center text-center px-4">
        <h1 className="heading lg:max-w-[45vw]">
          I am a Frontend Developer specializing in React, Next.js, and WordPress.
        </h1>
      </div>

      {/* bottom section */}
      <div className="relative flex mt-16 md:flex-row flex-col justify-between items-center gap-6 px-4 z-100">
        <p className="md:text-base text-sm md:font-normal font-light text-white-100">
          Copyright © Mohamed Thabet 2025
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="social icon"
              className="w-10 h-10 flex justify-center items-center 
              backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 
              bg-black-200 rounded-lg border border-black-300 hover:scale-105 
              transition"
            >
              <Image src={item.img} alt="social icon" width={22} height={22} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
