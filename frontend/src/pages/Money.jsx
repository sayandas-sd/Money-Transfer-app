import axios from "axios"
import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Transfer = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    return <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
                <div className="text-card-foreground bg-white rounded-lg max-m-md p-4 space-y-8 w-96 shadow-lg h-min">
                    <div className="font-bold text-3xl text-center p-6">
                        Send Money 
                    </div>
                    <div className="p-4">
                        <div className="flex space-x-4 items-center">
                            <div className="rounded-full bg-sky-400 w-12 h-12 items-center flex justify-center">
                                <span className="text-xl text-white">{name[0]}</span>
                            </div>
                            <div className="text-2xl font-semibold">
                                {name} 
                            </div>
                        </div>
                        <div>
                            <div className="mt-4">
                                <label className="text-sm font-medium" htmlFor="amountInput">Amount (in Rs)</label>
                                <input id="amountInput"
                                onChange={(e)=>{
                                    setAmount(e.target.value)
                                }} type="number" className="border mt-4 rounded border-slate-300 w-full px-2 py-1" placeholder="Enter amount"/>

                            </div>
                            <div className="mt-4">
                                <button className="w-full text-white bg-sky-400 hover:bg-sky-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 m" 
                                onClick={async ()=>{
                                    try {
                                        await axios.post("http://localhost:3000/api/v1/account/transfer", {
                                            to: id,
                                            amount
                                        }, {
                                            headers: {
                                                Authorization: "Bearer " + localStorage.getItem("token")
                                            }
                                        });
                                    } catch (error) {
                                        console.error("Error occurred during transfer:");
                                    }
                                    navigate("/success");
                                }}>
                                    Send money
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  
        </div>
    </div>
}