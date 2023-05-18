import { useFetch } from './hooks/useFetch';

type Localidade = {
  id: string;
  nome: string;
  nivel: { nome: string };
}

function App() {
  
  const { data, isFetching } = useFetch<Localidade[]>("/v3/agregados/1705/localidades/N7%7CN6")

  return (
    <>
      {isFetching && <p>Carregando....</p>}
      <h1>Repositorios</h1>
      {data?.map(repo => {
        return (
          <li key={repo.id}>
            <strong>{repo.nome}</strong>
            <p>{repo.nivel.nome}</p>
          </li>
        )

      })}
    </>
  )
}

export default App
