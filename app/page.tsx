import { Hero } from "@/components/Hero";
import {  FiUser, FiCode, FiBriefcase, FiMail } from "react-icons/fi";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { Spotlight } from "@/components/ui/spotlight-new";
import RecentProjects from "@/components/RecentProjects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import ScrollToTop from "@/components/ScrollToTop";
import Experience from "@/components/Experience";
import { BsGear } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
import Footer from "@/components/Footer";

export default function Home() {
 const navItems = [
  {
    name: "About",
    link: "#about",
    icon: <FiUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FiCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: <BsGear className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <FiBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Education",
    link: "#education",
    icon: <FaGraduationCap className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <FiMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
  <div className="container w-full">
    <ScrollToTop />
    <FloatingNav navItems={navItems} />
    <Spotlight />
    <Hero />
    <About />
    <Skills />
    <Education />
    <Experience />
    <RecentProjects />
    <Testimonials />
    <Contact />
    <Footer/>
  </div>
</main>

  );
}
