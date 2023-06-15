import { useGlobalState } from "../context/GlobalState"

function IncomeExtenses() {

    const { transactions } = useGlobalState()

    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0)
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    return (
        <>
            <div>
                <h4>Income</h4>
                <p>{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <h4>{expense}</h4>
            </div>
        </>
    )
}

export default IncomeExtenses