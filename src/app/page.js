import Title from "@/componentes/Title";

export default function Home() {
  return (
    <>
    <nav className="flex p-4 bg-amber-900">
      <ul className="flex gap-20">
        <li>
          <a href="#">
            <h1>Fiap Filmes</h1>
          </a>
        </li>
        <li>
          <a href="#">
            filmes
          </a>
        </li>
      </ul>
    </nav>
      <Title>Em alta</Title>
      <div id="card" className="flex flex-col w-40 justify-center item-center m-2">
        <img className="rounded" src="https://place-hold.it/150X220/666" alt=""/>
        <span className="font-bold text-center line-clamp-1">titulo do filme</span>
        <div>
          <span>6.0</span>
        </div>
        <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">detalhes</a>
      </div>
          
    </>
  )
}
