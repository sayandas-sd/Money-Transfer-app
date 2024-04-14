import { useEffect, useState } from "react"
import { Appbar } from "../component/Appbar"
import { Balance } from "../component/Balance"
import { User } from "../component/User"
import axios from "axios";

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);

    useEffect(()=>{
        const getBalance = async ()=>{
            try{
                const response = await axios.get("http://localhost:3000/api/v1/account/balance",{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                const formattedBalance = parseFloat(response.data.balance).toFixed(2);
                setBalance(formattedBalance);

            } catch (error) {
                console.log("Error fetching balance:", error);
            }
        };

        getBalance();

    },[]);
    
    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance !== null ? balance : "0"} />
            <User />
        </div>
    </div>
}