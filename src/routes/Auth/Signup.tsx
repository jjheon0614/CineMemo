import { Link } from "react-router-dom"

export default function Signup() {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100 border border-gray-300 shadow-xl rounded-xl">
            <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                    <h1 className="mb-8 text-2xl text-center text-primary">Sign Up</h1>
                    <input 
                        type="text"
                        className="w-full p-3 mb-4 bg-gray-100 input input-primary"
                        name="email"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        className="w-full p-3 mb-4 bg-gray-100 input input-primary"
                        name="password"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        className="w-full p-3 mb-4 bg-gray-100 input input-primary"
                        name="confirm_password"
                        placeholder="Confirm Password"
                    />
                    <button
                        type="submit"
                        className="w-full btn btn-primary">
                        Create Account
                    </button>
                </div>

                <div className="mt-6 text-grey-dark">
                    Already have an account?
                    <Link className="btn btn-link btn-primary" to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
  }