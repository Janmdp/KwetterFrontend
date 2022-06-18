import { useState, SyntheticEvent } from "react"
import { useRouter } from "next/router"

export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();
        /*All of this runs and passes throug the api */
        if(password == confirmPassword){
          const response = await fetch('https://localhost:44360/createlogin', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                Username: username,
                Email: email,
                Password: password
            })
           });
           /* None of this happens at all idk why */
           console.log("werk");
           await router.push("http://localhost:3000/login");
        }
        else{
            alert("Passwords do not match!");
        }
        
    }

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <h3 className="text-2xl font-bold text-center"> Register to Kwetter!</h3>
            <form onSubmit={submit}>
                <div className="mt-4">
                    <div>
                        <label className="block">Email</label>
                        <input required type="text" placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md form-control focus:outline-none focus:ring-1 focus:ring-blue-600"
                                onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label className="block">Username</label>
                        <input required type="text" placeholder="Username"
                                className="w-full px-4 py-2 mt-2 border rounded-md form-control focus:outline-none focus:ring-1 focus:ring-blue-600"
                                onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label  className="block">Password</label>
                        <input required type="password" placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md form-control focus:outline-none focus:ring-1 focus:ring-blue-600"
                            onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <label className="block">Confirm Password</label>
                        <input required type="password" placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md form-control focus:outline-none focus:ring-1 focus:ring-blue-600"
                            onChange={e => setConfirmPassword(e.target.value)}/>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Register</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}