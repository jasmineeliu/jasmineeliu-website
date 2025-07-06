import StaggerText from './stagger-text';
export default function LinkFooter() {

  const links = [
    {
      link_name: "jasmineliu331 [at] gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=jasmineliu331@gmail.com",
    },
    {link_name: "Github",
    link: "https://github.com/jasmineeliu"},
    {link_name: "LinkedIn",
    link: "www.linkedin.com/in/jasmineeliu"},
    

  ]

  return (
    <div className='flex flex-col justify-center items-center text-white h-[50vh]'>
      <h1>Connect with me.</h1>
      <div className='flex flex-row gap-4'>
        {
          links.map((link, index) =>{
            return (
              <div key={index} className='text-white'>
                <StaggerText link={link} />
              </div>
            )
          })
        }
      </div>
        
    </div>
  )
}