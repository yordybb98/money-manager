import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'

function ExpenseChart() {

    const { transactions } = useGlobalState()
    const totalIncome = transactions.filter(transaction => transaction.amount > 0).reduce((acc, transaction) => (acc += transaction.amount), 0)
    const totalExpenses = transactions.filter(transaction => transaction.amount < 0).reduce((acc, transaction) => (acc += transaction.amount), 0) * -1

    const TotalExpensesPercentage = Math.round((totalExpenses / totalIncome) * 100)
    const TotalIncomePercentage = 100 - TotalExpensesPercentage

    return (
        <VictoryPie
            colorScale={["#e74c3c", "#2ecc71"]}
            data={[
                { x: "Expenses", y: TotalExpensesPercentage },
                { x: "Incomes", y: TotalIncomePercentage },
            ]}
            animate={{
                duration: 200
            }}
            labels={
                ({ datum }) => `${datum.y}%`
            }
            labelComponent={<VictoryLabel
                angle={45}
                style={{
                    fill: "white"
                }}
            />}
        />
    )
}

export default ExpenseChart