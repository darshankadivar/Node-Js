import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MyRecipe() {
    const [recipes, setRecipes] = useState([])

    let token = localStorage.getItem("token")

    useEffect(() => {
        fetchData()
    }, [])

    const navigate = useNavigate()

    const fetchData = async () => {
        await axios.get("http://localhost:1008/recipe/myrecipe", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data)
            setRecipes(res.data)
        }).catch((err) => {
            localStorage.removeItem("token")
            alert("Your session has expired. please login again")
            navigate("/login")
        })
    }

    

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
            <h1 className="text-3xl font-bold mb-6 text-center">My Recipes</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {recipes?.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-xl p-5 border hover:shadow-2xl transition-all duration-300"
                    >
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">
                            {item?.title}
                        </h2>

                        <p className="text-gray-600 text-sm mb-3">
                            {item?.ingredients}
                        </p>

                        <p className="text-sm mb-4 text-gray-500">
                            <strong>Created By:</strong> {item.createdBy?.name || "Unknown"}
                        </p>

                    
                        <div className="flex justify-between mt-4">
                            <button
                                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-200"
                                onClick={() => navigate(`/editrecipe/${item._id}`)}
                            >
                                Edit
                            </button>

                            <button
                                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-all duration-200"
                                onClick={() => console.log("Delete logic yaha lagega")}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );

}
