

const Request = () => {
  return (
    <div>
        <div className="request-input w-full flex md:flex-row flex-col justify-evenly gap-y-6">
            <input type="text" placeholder="Input your Request Code" className="lg:w-8/12 md:w-7/12 w-full p-4 outline outline-[#005C30] outline-rounded-md border-rounded-md"/>
            <button type="submit" className="bg-[#005C30] text-white rounded-md md:px-4 text-sm lg:text-base h-16">Check Request Status</button>

        </div>

        
    </div>
  )
}

export default Request