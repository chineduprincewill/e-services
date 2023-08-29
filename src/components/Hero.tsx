import { useState } from "react"
import LgaPage from "./LgaPage";
import Request from "./Request";

const Hero = () => {
  const [servicebutton, showServicebutton] = useState<boolean>(false);
  const [showLgaPage, setShowLgaPage] = useState<boolean>(false);
  const [showRequestPage, setShowRequestPage] = useState<boolean>(false);

  const handleservice = ()=>{
    showServicebutton(!servicebutton);
    setShowRequestPage(false);
  }
  const LGAbutton = () =>{
    setShowLgaPage(!showLgaPage)
  }
  const Requestbutton = () =>{
    setShowRequestPage(!showRequestPage)
  }
  return (
    <div className="p-6 md:px-12 mt-24 md:mt-16">
      {servicebutton && !showLgaPage && <div className="md:mx-12 md:mt-12" onClick={handleservice}> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 md:w-8 md:h-8 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3   12h18" />
        </svg>

      </div>}
      <div className={`hero-div flex md:flex-row flex-col-reverse gap-y-4 gap-x-4 md:justify-between transition-all duration-100 ${showLgaPage ? 'opacity-0 h-0 pointer-events-none' : 'opacity-100 h-auto'}`}>
        
        <div className={`md:w-6/12 ${servicebutton ? '' : 'md:mt-20'} md:border-r md:border-gray-400 md:px-12 ${showRequestPage ? 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto' : 'opacity-100'}`}>
          <h1 className="lg:text-7xl text-4xl mt-6 text-gray-900">
            <p className="leading-8 py-2 lg:py-6">Anambra State</p>
            <p className="leading-8 py-2 lg:py-6">E-Services</p>
            <p className="leading-8 py-2 lg:py-6">Solution</p>
          </h1>
          <p className="mt-2 md:mt-4 pr-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, nulla. Dolor dolorum aut incidunt debitis magnam voluptates, perferendis corporis deserunt, fuga vero, minima commodi id provident! Porro, repellendus hic? Ipsam?</p>

          <div className="mt-6">
            <button className={`transition-all duration-100 ${servicebutton ? 'opacity-0 hidden' : 'opacity-100' } bg-[#005C30] hover:bg-green-700 text-white w-8/12 md:w-5/12 py-4 rounded-md`} onClick={handleservice}>
              Request for Services
            </button>
            <div className={`transition-all duration-200 flex ${servicebutton ? 'opacity-100' : 'opacity-0 pointer-events-none' } gap-x-8`}>
            <button className="bg-[#005C30] text-white w-6/12 md:w-5/12 py-4 rounded-md px-2" onClick={LGAbutton}>
              Select LGA
            </button>

            <button className="bg-[#edbe23] hover:bg-[#c6a025] text-white w-7/12 md:w-5/12  py-4 rounded-md" onClick={Requestbutton}>
              Request Status
            </button>
            </div>
          </div>

        </div>
        <div className="md:w-5/12 md:mt-12">
          <img src="images/illustration-hero.svg" className={`transition-all duration-100 md:mt-12 scale-75 md:scale-125 lg:scale-75 ${servicebutton ? 'opacity-0 hidden' : 'opacity-100' }`}/>
          <img src="images/accept-illustration.svg" className={`transition-all duration-200 md:mt-12 scale-75 md:scale-125 lg:scale-75 ${servicebutton ? 'opacity-100' : 'opacity-0 hidden'} ${showRequestPage ? 'opacity-0 hidden' : 'opacity-100'} `} />
          {showRequestPage && <div className="request-input mt-12 w-full flex md:flex-row flex-col justify-between gap-y-6">
            <input type="text" placeholder="Input your Request Code" className="lg:w-9/12 md:w-7/12 w-full p-4 outline outline-[#005C30] outline-rounded-md rounded-md"/>
            <button type="submit" className="bg-[#005C30] text-white rounded-md md:px-4 text-sm lg:text-base h-16 mx-8">Check Request Status</button>

        </div>}
        </div>
       



      </div>
      {showLgaPage &&
       <div className="md:mt-12 md:px-4 md:mx-8">
                <div onClick={LGAbutton}> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 md:w-8 md:h-8 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
</svg>

      </div>
        <LgaPage />
       </div>
       }
      
      </div>
  )
}

export default Hero