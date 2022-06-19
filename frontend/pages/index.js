import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import { useEffect, useState } from "react"

export default function Home() {
  const [hasToken, setHasToken] = useState(false);
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(null);

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

  if(hasToken){
    return (
    
      <div className={styles.container}>
        <Head>
          <title>Kwetter</title>
          <meta name="description" content="Kwetter application" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
          {/* Sidebar */}
          <Sidebar></Sidebar>
          {/* Feed */}
          <Feed username={userName} />
          {/* Widgets */}
  
          {/* Modal */}
        </main>
        
  
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    )
  }
  else{
    return (<div><h1 className='text-white'>Unauthorized</h1></div>)
  }
  
}
