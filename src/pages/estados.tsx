import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export type Localidade = {
  id: string;
  nome: string;
  nivel: { nome: string };
}

export function Estados() {

  const { data, isFetching} = useQuery<Localidade[]>('localidades', async ()  => {
    const response = await axios.get('https://servicodados.ibge.gov.br/api/v3/agregados/1705/localidades/N7%7CN6')

    return response.data
  }, {
    staleTime: 1000 * 60, // 1 minuto
  })

  return (
    <>
      {isFetching && <p>Carregando....</p>}
      <h1>Repositorios</h1>
      {data?.map(repo => {
        return (
          <li key={repo.id}>
            <Link to={`/Estado/${repo.nome}`}>{repo.nome}</Link>
            <p>{repo.nivel.nome}</p>
          </li>
        )

      })}
    </>
  )
}
