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
    <div className="p-6 md:px-12 mt-24 md:mt-16 md:mt-0">
      <div className={`hero-div flex md:flex-row flex-col-reverse gap-y-4 gap-x-4 md:justify-between transition-all duration-100 ${showLgaPage ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>
        <div className="md:w-6/12 md:mt-12 md:border-r md:border-gray-400 md:px-12">
          <h1 className="lg:text-7xl text-5xl mt-6 text-gray-900">
            <p className="leading-8 py-3 md:py-6">Anambra State</p>
            <p className="leading-8 py-3 md:py-6">E-Services Solution</p>
          </h1>
          <p className="mt-2 md:mt-4 pr-6 text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, nulla. Dolor dolorum aut incidunt debitis magnam voluptates, perferendis corporis deserunt, fuga vero, minima commodi id provident! Porro, repellendus hic? Ipsam?</p>

          <div className="mt-6">
            <button className={`transition-all duration-100 ${servicebutton ? 'opacity-0 hidden' : 'opacity-100' } bg-[#005C30] hover:bg-green-700 text-white w-8/12 md:w-5/12 py-4 rounded-md`} onClick={handleservice}>
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