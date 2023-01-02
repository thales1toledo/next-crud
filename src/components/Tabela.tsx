import Cliente from "../core/Cliente"
import { IconeEdit, IconeTrash } from "./Icons"


interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {exibirAcoes ? <th className="text-center p-4">Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-[#caafe0]' : 'bg-[#e2d3ee]'}`} >
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center items-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className="text-green-600 rounded-full p-2 m-1 hover:bg-purple-100">
                        {IconeEdit}
                    </button>
                ) : false}

                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className="text-red-500 rounded-full p-2 m-1 hover:bg-purple-100">
                        {IconeTrash}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="bg-gradient-to-r from-[#6b21a8] to-[#361154] text-gray-100">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}