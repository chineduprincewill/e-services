import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full fixed top-0 z-20 bg-white p-6 h-16 md:h-24 md:px-12 flex justify-between items-center border-b border-gray-100 shadow-lg">
      <div className=' text-2xl font-semibold '>E-Services</div>
      <Link to="signin">
      <button className=" border px-8 py-2 rounded-md border-[#005C30] text-[#005C30]">Sign in</button>
      </Link>
    </div>
  )
}

export default Nav