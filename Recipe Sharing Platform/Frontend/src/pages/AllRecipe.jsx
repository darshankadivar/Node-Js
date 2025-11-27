import { useEffect, useState } from "react";
import axios from "axios";

export default function AllRecipe() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:1008/recipe/allrecipe")
            .then(res => {
                console.log(res.data); 
                setRecipes(res.data);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-indigo-600 mb-10">
                All Recipes
            </h1>

        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {recipes?.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300">

                       
                        <div className="h-48 w-full bg-gray-200 overflow-hidden">
                            {item.image ? (
                                <img
                                    src={`http://localhost:1008/uploads/${item.image}`}
                                    alt="recipe"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="h-full flex justify-center items-center text-gray-400">
                                    No Image
                                </div>
                            )}
                        </div>

                  
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">
                                {item?.title}
                            </h2>

                            <p className="text-gray-600 text-sm mb-4">
                                {item?.ingredients}
                            </p>

                            <p className="text-gray-500 text-sm border-t pt-3">
                                <b className="text-indigo-600">Created By:</b>{" "}
                                {item.createdBy?.name || "Unknown"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
