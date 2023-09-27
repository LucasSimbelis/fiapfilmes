"use client"
import { serverLogout } from '@/actions/user'
import { useRouter } from 'next/navigation'

export default function NavBar(){
    const {push} =  useRouter()

    function handleLogout(){
        serverLogout()
        push("/login")
      }

    return(
        <nav className="bg-amber-900 p-4">
        <ul>
          <li><a href="#"><h1 className="text-3xl font-bold">Fiap Filmes</h1></a></li>
        </ul>
        <ul>
          <li><a href="#">Fav</a></li>
        </ul>
        <ul>
          <li><a href="#">Filmes</a></li>
        </ul>

        <button onClick={handleLogout}>logout</button>
        
      </nav>
    )
}