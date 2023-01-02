import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Input from "./Input";

interface FormProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancel?: () => void
}

export default function Form(props: FormProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return (
        <div>
            {id ? (
                <Input valor={id} texto="Código" somenteLeitura />
            ) : false}

            <Input valor={nome} texto="Nome" onChange={setNome} className='mb-3' />
            <Input valor={idade} texto="Idade" tipo="number" onChange={setIdade} className='mb-3' />

            <div className="flex justify-end mt-3">
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))} className="mr-2 bg-gradient-to-r from-blue-500 to-blue-900">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancel} className="bg-gradient-to-r from-gray-500 to-gray-900">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}