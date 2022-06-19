import { useLayoutEffect, useState, useEffect } from "react"
import { useRouter } from "next/router";

export default function Profile() {
    const [hasToken, setHasToken] = useState(false);
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState(null);
    const router = useRouter();

    useEffect(() => {
        (
            async () => {
                if(localStorage.getItem("jwt") != undefined){
                    setHasToken(true);
                }

                if(localStorage.getItem("jwt") != undefined){
                    var token = 'Bearer ' + localStorage.getItem("jwt")
                    const response = await fetch("http://localhost:31751/user", {
                        method: 'GET',
                        headers: {'content-type': 'application/json',
                                  'Authorization': token
                        },
                        credentials: "include"
                     
                    })
                    const content = await response.json();
                    setUsername(content.username);
                    setEmail(content.email);
                    setId(content.id);
                }
            }

        )();
    })

const deleteAccount = async (e) => {
    e.preventDefault();

    var token = 'Bearer ' + localStorage.getItem("jwt")
    const response = await fetch('http://localhost:31751/deleteuser?id=' + id, {
            method: "DELETE",
            headers: {'Content-type': 'application/json',
            'Authorization': token
        },
           });

        localStorage.removeItem("jwt");
        router.push("http://localhost:3000/login");
}

    if(hasToken){
        return (
            <div>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                        <h3 className="text-2xl font-bold text-center">Your profile</h3>
                        <div className="mt-4">
                            <h2>Username: {userName}</h2>
                            <h2>Email: {email}</h2>
                            <button onClick={deleteAccount} className="px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-900" >Delete account</button>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
    else{
        return (<div><h1 className='text-white'>Unauthorized</h1></div>)
    }
    
}