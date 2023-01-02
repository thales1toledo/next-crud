interface InputProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    onChange?: (valor: any) => void
    className?: string
}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={e => props.onChange?.(e.target.value)}
                readOnly={props.somenteLeitura}
                className={` border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${props.somenteLeitura ? '' : 'focus:bg-white'}  `}
            />
        </div>
    )
}