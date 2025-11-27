import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {


    const [formData, setFormData] = useState({})

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post("http://localhost:1008/user/login", formData).then((res) => {
            console.log(res.data)
            alert(res.data.msg)
            localStorage.setItem("token", res.data.token);
            navigate("/")
        }).catch((err) => {
            return alert(err.response.data.msg)
        })

        setFormData({
            email: "",
            password: ""
        })

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <form
                onSubmit={handleSubmit}
                className="bg-white text-gray-500 w-full max-w-sm md:max-w-md p-6 md:p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Sign In
                </h2>

                <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border bg-indigo-500/5 mb-4 border-gray-400/30 outline-none rounded-lg py-3 px-4 focus:border-indigo-500 transition"
                    type="email"
                    placeholder="Email"
                    required
                />

                <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border bg-indigo-500/5 mb-6 border-gray-400/30 outline-none rounded-lg py-3 px-4 focus:border-indigo-500 transition"
                    type="password"
                    placeholder="Password"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-3 rounded-lg text-white font-semibold tracking-wide"
                >
                    Submit
                </button>

                <p className="text-center mt-5 text-gray-600">
                    Don't have an account?{" "}
                    <span
                        onClick={() => navigate("/register")}
                        className="text-indigo-600 cursor-pointer underline"
                    >
                        Register
                    </span>
                </p>
            </form>

        </div>
    );

}
