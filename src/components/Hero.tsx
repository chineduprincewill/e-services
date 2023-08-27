import { useState } from "react"
import LgaPage from "./LgaPage";
import Request from "./Request";

const Hero = () => {
  const [servicebutton, showServicebutton] = useState<boolean>(false);
  const [showLgaPage, setShowLgaPage] = useState<boolean>(false);
  const [showRequestPage, setShowRequestPage] = useState<boolean>(false);

  const handleservice = ()=>{
    showServicebutton(!servicebutton);
  }
  const LGAbutton = () =>{
    setShowLgaPage(!showLgaPage)
  }
  const Requestbutton = () =>{
    setShowRequestPage(!showRequestPage)
  }
  return (
    <div className="font-roboto p-6 md:px-12 mt-12 md:mt-0">
      <div className={`hero-div flex md:flex-row flex-col-reverse gap-y-4 gap-x-4 md:justify-between transition-all duration-100 ${showLgaPage || showRequestPage ? 'opacity-0 h-0 pointer-events-none' : 'opacity-100 h-auto'}`}>
        <div className="md:w-6/12 md:mt-12 md:border-r-2 md:border-[#005C30]">
          <h1 className="lg:text-6xl text-3xl  font-semibold mt-6 ">
          INTRODUCTION TEXT
          </h1>
          <p className="font-thin md:mt-8 mt-4 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, nulla. Dolor dolorum aut incidunt debitis magnam voluptates, perferendis corporis deserunt, fuga vero, minima commodi id provident! Porro, repellendus hic? Ipsam?</p>

          <div className="mt-12">
            <button className={`transition-all duration-100 ${servicebutton ? 'opacity-0 hidden pointer-events-none' : 'opacity-100' } bg-[#005C30] hover:bg-green-900 text-white w-6/12 md:w-6/12 lg:w-4/12 py-4 px-2 rounded-md`} onClick={handleservice}>
              Request for Services
            </button>
            <div className={`transition-all duration-200 flex ${servicebutton ? 'opacity-100' : 'opacity-0 pointer-events-none' } gap-x-8`}>
            <button className="bg-[#005C30] text-white w-5/12 md:w-5/12 py-4 rounded-md px-2" onClick={LGAbutton}>
              Select LGA
            </button>

            <button className="bg-[#edbe23] hover:bg-[#c6a025] text-white w-7/12 md:w-5/12  py-4 rounded-md" onClick={Requestbutton}>
              Request Status
            </button>
            </div>
          </div>

        </div>
        <div className="md:w-5/12 md:mt-12 px-12">
          <img src="images/illustration-hero.svg" className={`transition-all duration-100 md:mt-12 md:scale-125 lg:scale-100 ${servicebutton ? 'opacity-0 hidden' : 'opacity-100' }`}/>
          <img src="images/accept-illustration.svg" className={`transition-all duration-200 md:mt-12 md:scale-125 lg:scale-100 ${servicebutton ? 'opacity-100' : 'opacity-0 hidden'} `} />
        </div>
       



      </div>
      {showLgaPage && <LgaPage />}
      {showRequestPage && <Request />}
      
      </div>
  )
}

export default Hero