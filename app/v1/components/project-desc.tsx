"use client";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCurve from "./projects-curve";
import StaggerText from "../../../components/stagger-text";
import CloseIcon from "@mui/icons-material/Close";

export default function ProjectDesc({
  projectSelected,
  handleCloseProject,
  mouseLeave,
  bgEnter,
  mobile,
}: {
  projectSelected: { [key: string]: any } | null;
  handleCloseProject: () => void;
  mouseLeave: () => void;
  bgEnter: () => void;
  mobile: boolean;
}) {
  const slideIn = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.div className="flex flex-row relative overflow-hidden w-full h-[100vh]">
      {!mobile && (
        <div>
          <ProjectCurve projectSelected={projectSelected} />
        </div>
      )}
      <AnimatePresence mode="wait">
        {projectSelected && (
          <motion.div
            className={`w-full bg-black h-full text-white font-body p-12 flex flex-col items-center justify-center mb-12 relative ${mobile ? "fixed top-0 left-0" : "ml-[100px]"}`}
            onMouseEnter={bgEnter}
            onMouseLeave={mouseLeave}
          >
            <motion.div
              key={projectSelected.name}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              }}
              className="w-full"
            >
              <div>
                <div>
                  <CloseIcon
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={handleCloseProject}
                    style={{ fill: "white" }}
                    fontSize="large"
                  />
                </div>

                <h1 className="sm:text-4xl text-2xl font-bold">
                  {projectSelected["name"]}
                </h1>
                <h3 className="text-xl ml-0.5 italic">
                  {projectSelected["date"]}
                </h3>
                <p className="ml-0.5 mt-8">{projectSelected["description"]}</p>
                <div className="flex flex-row flex-wrap mt-8">
                  <p className="font-bold mr-4">Links: </p>
                  {projectSelected["links"] &&
                    projectSelected["links"].length > 0 &&
                    projectSelected["links"].map(
                      (
                        link: { link_name: string; link: string },
                        index: number,
                      ) => {
                        return (
                          <div className="mr-4" key={index}>
                            <StaggerText link={link} />
                          </div>
                        );
                      },
                    )}
                </div>

                <div className="flex flex-row w-full flex-wrap">
                  <p className="font-bold mr-2 ">Skills: </p>
                  {projectSelected["skills"] &&
                    projectSelected["skills"].length > 0 &&
                    projectSelected["skills"].map(
                      (skill: string, index: number) => {
                        return (
                          <span key={index} className=" mr-2">
                            {skill}
                          </span>
                        );
                      },
                    )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
