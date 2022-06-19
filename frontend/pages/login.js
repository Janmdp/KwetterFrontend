import { useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/router'
import  axios  from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();
    
        console.log("submitting");

        /*await fetch('https://localhost:44360/login', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
            .then(function (data){
              console.log(data);
              cookie.save('x-access-token', data['x-access-token']);
              this.setState({message: data.Message, cookie :data['x-access-token']})
            }.bind(this)
          )
        })*/
        await axios.post('http://localhost:31751/login', {    
            Email: email,
            Password: password  
        },
        {
            headers: { 'content-type': 'application/json'}
        },
        {
            withCredentials: true
        })
        .then(function (response) {
            
            localStorage.setItem("jwt", response.data);
            router.push("http://localhost:3000/");
        })
        .catch(function(error){
            console.log("Iets is fout");
            console.log(error);
        });
        
        
        
    }

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <h3 className="text-2xl font-bold text-center"> Login to Kwetter!</h3>
            <form onSubmit={submit}>
                <div className="mt-4">
                    <div>
                        <label className="block" >Email</label>
                        <input required id="email" type="text" placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md form-control focus:outline-none focus:ring-1 focus:ring-blue-600"
                                onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label className="block" >Password</label>
                        <input required id="password" type="password" placeholder="Password"
                            className="w-full px-4 py-2 mt-2 border rounded-md form-control focus:outline-none focus:ring-1 focus:ring-blue-600"
                            onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="flex items-baseline justify-between">
                        <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                        <a href="http://localhost:3000/register" className="text-sm text-blue-600 hover:underline">Register</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}