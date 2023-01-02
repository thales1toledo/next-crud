import Botao from '../components/Botao'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import useClientes from '../hooks/useClientes'

export default function Home() {

  const {
    cliente,
    clientes,
    editarCliente,
    excluirCliente,
    novoCliente,
    salvarCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`flex justify-center h-screen items-center bg-gradient-to-r from-blue-500 to-purple-500`}>
      <Layout titulo='Home'>
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao onClick={novoCliente} className='bg-gradient-to-r from-green-500 to-green-900 mb-4'>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={editarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Form cancel={exibirTabela} clienteMudou={salvarCliente} cliente={cliente} />
        )}
      </Layout>
    </div>
  )
}
