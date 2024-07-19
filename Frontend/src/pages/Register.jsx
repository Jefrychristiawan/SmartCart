export default function Register() {
    return (
      <div className="flex justify-center items-center">
          <form action="">
              <div className="shadow-custom flex flex-col w-96 rounded-lg py-8 px-5 space-y-4">
                  <span className="text-green-500 font-bold text-4xl mx-auto">Register</span>
                  <span className="block">Username:</span>
                  <input type="text" name="" id="" placeholder="Enter Username" className="border border-gray-300 rounded-lg h-8 pl-5 focus:outline-none"/>
                  <span className="block">Email:</span>
                <input type="text" name="" id="" placeholder="Enter Email" className="border border-gray-300 rounded-lg h-8 pl-5 focus:outline-none"/>
                <span className="block">Password:</span>
                <input type="password" name="" id="" placeholder="Enter Password" className="border border-gray-300 rounded-lg h-8 pl-5 focus:outline-none"/>
                  <div className="flex-grow"></div>
                  <button className="bg-green-500 rounded-md py-3 text-white mt-auto font-bold">Register</button>
              </div>
          </form>
      </div>
    )
  }
  