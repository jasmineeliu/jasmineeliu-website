import StaggerText from "@/components/stagger-text";

export default function Home() {
  const links = [
    { link_name: "GitHub", link: "https://github.com/jasmineeliu" },
    { link_name: "LinkedIn", link: "https://linkedin.com/in/jasmineeliu" },
  ];

  return (
    <div className="flex flex-row gap-8 px-20 justify-between pb-10 items-center h-[100%] w-[100%]">
      <div className='w-[80%] flex flex-col gap-8'>
        <h1 className="text-2xl">hello – i’m jasmine </h1>
      <div className='flex flex-col gap-4'>
        <div> <span>
        I’m a software developer, creative, and life-long learner. Born and
        raised in LA, I’m currently studying Computer Science + Math at Harvey
        Mudd College. Looking ahead, I'm working at </span><span className="text-accent underline">Apple</span> <span> this summer
        in Austin, TX. 
      </span></div>
       

      <div>
        <span>
          I love getting fixated on a problem and finding elegant solutions. As an
        artist and a technologist, I strive to build intuitive tools that draw
        people in. I'm obsessed with humans – from </span>
        <span className="text-accent underline"> the way they move </span>
         <span> to how they think</span>
      </div>

      <p>
        When I’m not coding, I’m crafting, eating my way through wherever I'm located, and exploring the outdoors.
      </p>
      </div>
      <div className="flex flex-row gap-4">
        <p>Connect with me</p>
        <p>/</p>
            <div className="flex flex-row gap-4 opacity-70">
              <p>jasmliu [at] hmc.edu</p>
              {links.map((link, index) => {
                return (
                  <div key={index} className="">
                    <StaggerText link={link} />
                  </div>
                );
              })}
              </div>
            </div>
      </div>
      
      
    </div>
  );
}
