import { useGlobalState } from "../context/GlobalState"

function Balance() {

    const data = useGlobalState()

    return (
        <div>
            Balance: {JSON.stringify(data)}
        </div>
    )
}

export default Balance
