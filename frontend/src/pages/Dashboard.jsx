import { Appbar } from "../component/Appbar"
import { Balance } from "../component/Balance"
import { User } from "../component/User"

export const Dashboard = () => {
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={"1000000"} />
            <User />
        </div>
    </div>
}