import { useState } from "react"

const Hero = () => {
  const [servicebutton, showServicebutton] = useState<boolean>(false);
  const handleservice = ()=>{
    showServicebutton(!servicebutton);
  }
  return (
    <div className="font-roboto p-6 md:px-12 mt-12 md:mt-0">
      <div className="flex md:flex-row flex-col-reverse gap-y-4 gap-x-4 md:justify-between">
        <div className="md:w-6/12 md:mt-12 md:border-r-2 md:border-[#005C30]">
          <h1 className="lg:text-6xl text-3xl  font-semibold mt-6 ">
          INTRODUCTION TEXT
          </h1>
          <p className="font-thin md:mt-8 mt-4 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, nulla. Dolor dolorum aut incidunt debitis magnam voluptates, perferendis corporis deserunt, fuga vero, minima commodi id provident! Porro, repellendus hic? Ipsam?</p>

          <div className="mt-12">
            <button className={`transition-all duration-100 ${servicebutton ? 'opacity-0 hidden' : 'opacity-100' } bg-[#005C30] hover:bg-green-900 text-white w-8/12 md:w-5/12 py-4 rounded-md`} onClick={handleservice}>
              Request for Services
            </button>
            <div className={`transition-all duration-200 flex ${servicebutton ? 'opacity-100' : 'opacity-0' } gap-x-8`}>
            <button className="bg-[#005C30] text-white w-8/12 md:w-4/12 py-4 rounded-md ">
              Select LGA
            </button>

            <button className="bg-[#edbe23] hover:bg-green-900 text-white w-8/12 md:w-4/12 py-4 rounded-md ">
              Request Status
            </button>
            </div>
          </div>

        </div>
        <div className="md:w-5/12 md:mt-12 px-12">
          <img src="images/illustration-hero.svg" className={`transition-all duration-100 ${servicebutton ? 'opacity-0 hidden' : 'opacity-100' }`}/>
          <img src="images/accept-illustration.svg" className={`transition-all duration-200 ${servicebutton ? 'opacity-100' : 'opacity-0 hidden'} `} />
        </div>
       



      </div>
      
      </div>
  )
}

export default Hero