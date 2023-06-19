import React, { useState } from 'react'
import { useGlobalState } from "../../context/GlobalState"

function TransactionsForm() {
    const { addTransaction } = useGlobalState()
    const [description, setDescription] = useState()
    const [amount, setAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        addTransaction({
            description,
            amount: +amount,
            id: window.crypto.randomUUID()
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='Ingresa una descripcion'
                    onChange={(e) => setDescription(e.target.value)}
                    className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
                />
                <input
                    type="number"
                    step="0.01"
                    placeholder='00.00'
                    onChange={(e) => setAmount(e.target.value)}
                    className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
                />
                <button className='bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full'>Add Transaction</button>
            </form>
        </div>
    )
}

export default TransactionsForm