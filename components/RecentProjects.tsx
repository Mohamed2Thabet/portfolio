"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { useState } from "react";

// تعريف نوع المشروع
type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  link: string;
  categories: string[];
  iconLists: string[];
};

const RecentProjects = () => {
  const [active, setActive] = useState<string>("All");
  const [filtered, setFiltered] = useState<Project[]>(projects);

  // جميع الكاتيجوريز بدون تكرار
  const allCategories: string[] = [
    "All",
    ...Array.from(new Set(projects.flatMap((item) => item.categories))),
  ];

  // دالة الفلترة مع تحديد نوع category
  const handleFilter = (category: string) => {
    setActive(category);
    if (category === "All") {
      setFiltered(projects);
    } else {
      setFiltered(
        projects.filter((project) => project.categories.includes(category))
      );
    }
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
        A small selection of{" "}
        <span className="text-purple-500">recent projects</span>
      </h1>

      {/* ====== Nav Filter ====== */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-10">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-lg border transition-all ${
              active === cat
                ? "bg-purple-500 text-white border-purple-500"
                : "bg-transparent text-gray-300 border-gray-500 hover:bg-purple-500 hover:text-white"
            }`}
            onClick={() => handleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ====== Projects Grid ====== */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className="w-full h-full object-cover"
                  />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-6"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {item.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-gray-300 my-2">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center -ml-2"
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-500">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
