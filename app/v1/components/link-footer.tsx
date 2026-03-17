"use client";
import StaggerText from "../../../components/stagger-text";
export default function LinkFooter() {
  const links = [
    { link_name: "GitHub", link: "https://github.com/jasmineeliu" },
    { link_name: "LinkedIn", link: "https://linkedin.com/in/jasmineeliu" },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-white sm:h-[50vh] h-[30vh]">
      <h1>Connect with me.</h1>
      <div className="flex flex-row gap-4">
        <p>jasmliu [at] hmc.edu</p>
        {links.map((link, index) => {
          return (
            <div key={index} className="text-white">
              <StaggerText link={link} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
