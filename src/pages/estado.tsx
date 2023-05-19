import { useQueryClient } from "react-query"
import { useParams } from  "react-router-dom"
import { Localidade } from "./estados"
export function Estado() {

    const params = useParams()
    const estado = params['*'] as string

    const queryClient = useQueryClient()

    async function handleChangeNameEstado() {
      queryClient.invalidateQueries(['localidades']) // atualizar na hora da chamada ?

      const previousEstados = queryClient.getQueryData<Localidade[]>('localidades')
      
      if (previousEstados) {
        const nextEstados = previousEstados.map(localidade => {
          if(localidade.nome === estado) {
            return {...localidade, nivel: { nome: 'Muriçokas' }}
          } else {
            return localidade
          }
        }) // const com o novo estado
        console.log(nextEstados)
        queryClient.setQueryData('localidades', nextEstados) // definir a data
      }

      
    }

  return (
    <>
      <h1>{estado}</h1>
      <button onClick={handleChangeNameEstado}>Meu deus</button>
    </>
  )
}

