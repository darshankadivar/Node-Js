import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ViewProfile() {
    const token = localStorage.getItem("token")

    const [record, setRecord] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await axios.get("http://localhost:1008/user/viewprofile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setRecord([res.data.data])
            // console.log(res.data.data);
        })
    }
    return (
        <div className="w-full min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
            <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">

                <h2 className="text-2xl font-semibold text-center bg-indigo-600 text-white py-4">
                    User Profile
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-indigo-50">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium text-gray-700 border-b">ID</th>
                                <th className="px-4 py-3 text-left font-medium text-gray-700 border-b">Name</th>
                                <th className="px-4 py-3 text-left font-medium text-gray-700 border-b">Email</th>
                                <th className="px-4 py-3 text-left font-medium text-gray-700 border-b">Created At</th>
                            </tr>
                        </thead>

                        <tbody>
                            {record.map((e, i) => (
                                <tr key={i} className="hover:bg-indigo-50 transition border-b">
                                    <td className="px-4 py-3">{e._id}</td>
                                    <td className="px-4 py-3">{e.name}</td>
                                    <td className="px-4 py-3">{e.email}</td>
                                    <td className="px-4 py-3">{e.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}