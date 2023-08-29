import data from '../data/data'
import { useState } from 'react';
import Notloggedin from './Notloggedin';


const LgaPage = () => {
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [checksignedin, setChecksignedin] = useState<boolean>(false)
    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(event.target.value);
    };
    const handleguest = ()=>{
        setChecksignedin(true)
    }
  return (
    <div className=" transition-all duration-100">
        <div className="">
        <h1 className="lg:text-6xl md:text-5xl text-3xl  font-semibold mt-6 ">
          SELECT YOUR LGA
          </h1>
          <div className=" md:w-full lg:w-5/12 w-full mt-4 md:mt-8">
            <select className="w-full px-2 h-12 md:h-16 border-2 border-black focus:outline-[#005C30]"
            onChange={handleRegionChange}
            value={selectedRegion || ''}>
                <option>Select a LGA</option>
            {Object.keys(data).map((regionName) => (
                    
                    <option key={regionName} value={regionName}>
                    
                        {regionName}
                    </option>
                ))}
            </select>


          </div>
        </div>
        <div className=" w-full flex md:flex-wrap flex-col md:flex-row md:mt-12 mt-8 gap-y-8 md:justify-between">
        {selectedRegion && data[selectedRegion] && data[selectedRegion].map((item, index) => (
            <div className="lg:w-[30%] md:w-[45%] w-full border h-60 shadow flex flex-col p-4 justify-evenly" key={index} onClick={handleguest}>
                <h1 className="text-2xl font-semibold">{item.title}</h1>
                <p className="text-sm font-thin">{item.desc}</p>


            </div>
            ))}
            
            
            

        </div>
        {checksignedin && <Notloggedin />}
    </div>
  )
}

export default LgaPage