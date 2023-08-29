import {Link} from "react-router-dom"

const Signin = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center border" >
        <div className="w-full md:w-6/12 mx-8">
            <h1 className="text-3xl text-center my-8">E-Services Login</h1>
            <div className="flex flex-col h-auto items-center gap-y-8">
                <input type="text" placeholder="Input Email or Username" className="w-10/12 md:w-8/12 p-4 outline outline-[#005C30] outline-rounded-md rounded-md" />
                <input type="password" placeholder="Input Password" className="w-10/12 md:w-8/12 p-4 outline outline-[#005C30] outline-rounded-md rounded-md" />
                <button className="bg-[#005C30] w-10/12 md:w-8/12 text-white rounded-md h-16">Login</button>
                <p className="text-sm">Not registered yet? <Link to="/signup"><span className="text-[#005C30]">Create an account</span></Link></p>
            </div>
        </div>

    </div>
  )
}

export default Signin