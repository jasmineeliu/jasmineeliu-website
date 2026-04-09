"use client";
import Link from "next/link";
import { motion, useMotionValue, animate } from "framer-motion";
import StaggerText from "./stagger-text";
import { useEffect, useRef } from "react";
import { interpolate } from "flubber";
import CatPage from "@/components/cat";

type NavigationLinkProps = {
  href: string;
  text: string;
};

export default function Sidebar({
  tabs,
  currentTab,
}: {
  tabs: {
    href: string;
    path_name: string;
  }[];
  currentTab: string;
}) {
  const flower_path =
    "M270 318.527C296.5 435.027 264.5 482.027 239.5 482.027C185.9 478.827 195.5 371.694 207 318.527C177 368.694 107.762 448.194 70.5 412.027C36.5 379.027 106.5 299.027 165 273.027C109 289.361 0.500031 290.027 0.5 241.027C0.499966 185.985 111 196.861 165 209.527C114.5 175.361 31.5 109.027 71.5 69.0273C110.266 30.2613 182.167 119.194 208.5 162.527C197 107.027 186.2 -1.47273 239 0.527272C291.8 2.52727 281.667 108.694 270 162.527C300.5 115.027 368 32.0633 409 70.5273C446.308 105.527 359 188.527 313.5 209.027C365.5 197.527 477 189.027 479 239.027C481.06 290.525 366.833 285.86 316 273.027C384.5 312.027 437 374.027 410 410.027C363.2 446.027 297.5 364.027 270 318.527Z";

  const star_path =
    "M17.0883 189.23C161.588 158.73 168.088 92.23 192.588 8.23002C196.255 2.39668 205.088 -5.76978 214.588 8.23002C239.588 145.73 306.088 171.23 388.588 189.73C416.588 194.23 404.588 214.23 388.588 214.23C245.088 239.23 232.088 328.73 215.588 389.73C206.088 415.23 192.088 401.23 189.588 386.23C151.088 244.73 112.088 239.23 17.0883 213.73C-10.4117 209.23 1.08828 190.73 17.0883 189.23Z";

  const pathRefs = useRef<(SVGPathElement | null)[]>([]);


  useEffect(() => {
    const controlsList: any[] = [];

    tabs.forEach((tab, idx) => {
      const isActive = tab.href === currentTab;

      const interpolator = isActive
        ? interpolate(star_path, flower_path, { maxSegmentLength: 10 })
        : interpolate(flower_path, star_path, { maxSegmentLength: 10 });

      const el = pathRefs.current[idx];
      if (!el) return;
      if (!isActive && el.getAttribute("d") === star_path) return;

      const controls = animate(0, 1, {
        duration: 0.6,
        ease: "easeInOut",
        onUpdate: (t) => {
          el.setAttribute("d", interpolator(t));
        },
      });

      controlsList.push(controls);
    });

    return () => {
      controlsList.forEach((c) => c.stop());
    };
  }, [currentTab]);

  return (
    <div className="flex align-top justify-end-safe w-64 border-r border-[#0D0B21] p-4">
      <div className="flex flex-col gap-2 justify-between">
        <div className=" ml-auto flex flex-col gap-2 mr-15">
          {tabs.map((link, idx) => (
            <Link href={link.href} key={idx} className="cursor-none">
              <div className="flex flex-row items-center gap-2">
                <motion.svg
                  width={18}
                  height={18}
                  viewBox="0 0 480 483"
                  className="pt-1"
                >
                  <path
                    ref={(el) => {
                      pathRefs.current[idx] = el;
                    }}
                    d={star_path}
                    fill={link.href === currentTab ? "#4361E9" : "#0D0B21"}
                    stroke={link.href === currentTab ? "#4361E9" : "#0D0B21"}
                  />
                </motion.svg>
                <p
                  className={
                    link.href === currentTab ? "text-accent" : "text-[#0D0B21]"
                  }
                >
                  {link.path_name}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <CatPage />
      </div>
    </div>
  );
}
