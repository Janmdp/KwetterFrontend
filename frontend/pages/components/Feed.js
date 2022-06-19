import { useState, useEffect } from 'react';
import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from './Post';
import  axios  from 'axios';



function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const [beenFilled, setFilled] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    (
      async () => {
        if(localStorage.getItem("jwt") != undefined){
            setHasToken(true);
        }

        if(localStorage.getItem("jwt") != undefined && beenFilled != true){
          console.log("Finna run this code");
            var token = 'Bearer ' + localStorage.getItem("jwt")

        await axios.get('http://localhost:31751/posts',
        {
            headers: { 'content-type': 'application/json',
                        'Authorization': token}
        },
        {
            withCredentials: true
        })
        .then(function (response) {
          setPosts(response.data);
          setFilled(true);
          console.log("Retrieved data");
          console.log(posts);
          console.log(response.data)
        })
        .catch(function(error){
            console.log("Iets is fout");
            console.log(error);
        });
        }
    }
    )()
    
  })

  if(hasToken){
    return (
      <div className="flex-grow text-white border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
          <h2 className="text-lg font-bold sm:text-xl">Home</h2>
          <div className="flex items-center justify-center ml-auto hoverAnimation w-9 h-9 xl:px-0">
            <SparklesIcon className="h-5 text-white"/>
          </div>
        </div>

        <Input userName={username}/>
        <div className="pb-72">
          {posts.map((post, index) => {
            return (
            <Post key={post.id} id={post.id} authorname={post.authorName} content={post.content}/>
            )})}
        
        </div>

      </div>
    )
  }
    
  else{
    return (<div><h1 className='text-white'>Unauthorized</h1></div>);
  }
  }
  
  export default Feed