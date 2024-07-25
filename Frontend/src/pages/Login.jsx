import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

export default function Login() {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  
  const handleSubmit = async (e) => {
    // console.log('bb')
    e.preventDefault()
    
    await login(email,password)
  }
  return (
    <div className="flex justify-center items-center">
        <form action="" onSubmit={handleSubmit}>
            <div className="shadow-custom flex flex-col w-96 rounded-lg py-8 px-5 space-y-4">
                <span className="text-green-500 font-bold text-4xl mx-auto">Login</span>
                <span className="block">Email:</span>
                <input type="text" name="" id="" placeholder="Enter Email" 
                className="border border-gray-300 rounded-lg h-8 pl-5 focus:outline-none"
                onChange={(e) => {setEmail(e.target.value)}}
                value={email}
                />
                <span className="block">Password:</span>
                <input type="password" name="" id="" placeholder="Enter Password" 
                className="border border-gray-300 rounded-lg h-8 pl-5 focus:outline-none"
                onChange={(e) => {setPassword(e.target.value)}}
                value={password}
                />
                <div className="flex-grow"></div>
                <button disabled={isLoading} className="bg-green-500 rounded-md py-3 text-white mt-auto font-bold">Login</button>
                {error && <div>{error}</div>}
            </div>
        </form>
    </div>
  )
}
