import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/auth/signup", {
                method: "POST", // HTTP 메서드
                headers: {
                    "Content-Type": "application/json", // JSON 데이터 전송
                },
                body: JSON.stringify({ email, password }), // 데이터를 JSON 문자열로 변환
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage || "Signup failed.");
            }

            const data = await response.json(); // 응답 데이터를 JSON으로 변환
            console.log("Signup Success:", data);
            alert("Signup successful! Redirecting to login...");
            navigate("/login"); // 회원가입 성공 시 로그인 페이지로 이동
        } catch (err) {
            console.error(err);
            setError((err as Error).message);
        }
    };
    
    return (
      <div className="flex flex-col min-h-screen bg-gray-100 border border-gray-300 shadow-xl rounded-xl">
            <div className="flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
                <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
                    <h1 className="mb-8 text-2xl text-center text-primary">Sign Up</h1>
                    {error && <p className="text-red-500">{error}</p>}
                    <input 
                        type="text"
                        className="w-full p-3 mb-4 bg-gray-100 input input-primary"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="text"
                        className="w-full p-3 mb-4 bg-gray-100 input input-primary"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className="w-full p-3 mb-4 bg-gray-100 input input-primary"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        className="w-full p-3 mb-4 bg-gray-100 input input-primary"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full btn btn-primary"
                        onClick={handleSignup}>
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