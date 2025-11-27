import axios from 'axios'
import React, { useState } from 'react'

export default function AddRecipe() {
    const [formData, setFormData] = useState({})

    let token = localStorage.getItem("token")
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post("http://localhost:1008/recipe/addrecipe", formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            alert(res.data.msg)
            console.log(res.data.data);
        })

        setFormData({
            title: "",
            ingredients: ""
        })
    }
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
            <div className="w-full max-w-xl bg-white shadow-xl rounded-xl p-8">

                <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
                    Add New Recipe
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Recipe Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title || ""}
                            onChange={handleChange}
                            placeholder="Enter recipe title"
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none bg-gray-50"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Ingredients
                        </label>
                        <textarea
                            name="ingredients"
                            value={formData.ingredients || ""}
                            onChange={handleChange}
                            placeholder="Enter ingredients"
                            required
                            className="w-full border rounded-lg px-4 py-2 h-36 resize-none focus:ring-2 focus:ring-indigo-400 outline-none bg-gray-50"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold py-3 rounded-lg text-lg active:scale-95"
                    >
                        Submit Recipe
                    </button>

                </form>
            </div>
        </div>
    )
}
