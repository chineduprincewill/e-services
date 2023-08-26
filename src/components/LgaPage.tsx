
const LgaPage = () => {
  return (
    <div className=" transition-all duration-100">
        <div className="">
        <h1 className="lg:text-6xl md:text-5xl text-3xl  font-semibold mt-6 ">
          SELECT YOUR LGA
          </h1>
          <div className=" md:w-full lg:w-5/12 w-full mt-4 md:mt-8">
            <select className="w-full h-12 md:h-16 border-2 border-black focus:outline-[#005C30]">
                <option>Select a LGA</option>
            </select>


          </div>
        </div>
        <div className=" w-full flex md:flex-wrap flex-col md:flex-row md:mt-12 mt-8 gap-y-8 md:justify-between">
            <div className="lg:w-[30%] md:w-[45%] w-full border h-60 shadow flex flex-col p-4 justify-evenly">
                <h1 className="text-2xl font-semibold">BIRTH CERTIFICATE</h1>
                <p className="text-sm font-thin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quo reiciendis perferendis eos ab. Accusamus sint rerum rem, tempore aliquam delectus laboriosam, animi quam eos consectetur provident deserunt molestias cum?</p>


            </div>
            <div className="lg:w-[30%] md:w-[45%] w-full border h-60 shadow flex flex-col p-4 justify-evenly">
                <h1 className="text-2xl font-semibold">DEATH CERTIFICATE</h1>
                <p className="text-sm font-thin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quo reiciendis perferendis eos ab. Accusamus sint rerum rem, tempore aliquam delectus laboriosam, animi quam eos consectetur provident deserunt molestias cum?</p>


            </div>
            <div className="lg:w-[30%] md:w-[45%] w-full border h-60 shadow flex flex-col p-4 justify-evenly">
                <h1 className="text-2xl font-semibold">BIRTH CERTIFICATE</h1>
                <p className="text-sm font-thin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quo reiciendis perferendis eos ab. Accusamus sint rerum rem, tempore aliquam delectus laboriosam, animi quam eos consectetur provident deserunt molestias cum?</p>


            </div>
            <div className="lg:w-[30%] md:w-[45%] w-full border h-60 shadow flex flex-col p-4 justify-evenly">
                <h1 className="text-2xl font-semibold">BIRTH CERTIFICATE</h1>
                <p className="text-sm font-thin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quo reiciendis perferendis eos ab. Accusamus sint rerum rem, tempore aliquam delectus laboriosam, animi quam eos consectetur provident deserunt molestias cum?</p>


            </div>

        </div>
    </div>
  )
}

export default LgaPage