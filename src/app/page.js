import Image from 'next/image'

export default function Home() {

  const lista =[{
    id: 1,
    nome: 'Danilo',
    idade: 20
  },{
    id: 3456789,
    nome: 'Maria',
    idade: 19,
  },{
  id: 345559,
  nome: 'Luiza',
  idade: 29,
}]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>NextJs</h1>
      <ul>
        {
          lista.map(
            (elemento)=>(
              <li key={elemento.id}>{elemento.nome} tem {elemento.idade} anos</li>
            )
          )
        }
      </ul>
    </main>
  )
}