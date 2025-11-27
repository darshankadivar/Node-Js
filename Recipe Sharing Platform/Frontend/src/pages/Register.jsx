import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register() {
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

        await axios.post("http://localhost:1008/user/register", formData).then((res) => {
            alert(res.data.msg)
        })

        setFormData({
            name: "",
            email: "",
            password: ""
        })

        navigate("/login")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <form
                onSubmit={handleSubmit}
                className="bg-white text-gray-600 w-full max-w-sm md:max-w-md p-6 md:p-8 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Sign Up
                </h2>

                <input
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                    className="w-full border bg-indigo-500/5 mb-4 border-gray-400/30 outline-none rounded-lg py-3 px-4 focus:border-indigo-600 transition"
                    type="text"
                    placeholder="Username"
                    required
                />

                <input
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className="w-full border bg-indigo-500/5 mb-4 border-gray-400/30 outline-none rounded-lg py-3 px-4 focus:border-indigo-600 transition"
                    type="email"
                    placeholder="Email"
                    required
                />

                <input
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    className="w-full border bg-indigo-500/5 mb-6 border-gray-400/30 outline-none rounded-lg py-3 px-4 focus:border-indigo-600 transition"
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
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-indigo-600 cursor-pointer underline"
                    >
                        Log In
                    </span>
                </p>
            </form>

        </div>
    );

}
