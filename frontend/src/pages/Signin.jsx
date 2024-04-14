
import { useNavigate } from "react-router-dom"
import { BottomComp } from "../component/BottomComp"
import { Button } from "../component/Button"
import { Heading } from "../component/Heading"
import { Inputbox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"
import axios from "axios"
import { useState } from "react"

export const Signin = ()=>{
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    

    return <div className="bg-slate-400 h-screen flex justify-center ">
        <div className="flex flex-col justify-center ">
            <div className="rounded-lg h-max w-80 bg-white text-center p-2 px-4">
                <Heading label={"Sign in"} />
                <SubHeading label={"Enter your details to access your account"} />
                <Inputbox onChange={e => {
                    setUserName(e.target.value);
                }}
                label={"Email"} placeholder="sayan123@gmail.com" />
                <Inputbox onChange={e => {
                    setPassword(e.target.value);
                }}
                label={"Password"} placeholder="123456" />
                <div className="pt-5">
                    <Button label={"Sign in"} onClick={async ()=>{
                            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                                username,
                                password
                            })
                            if(!response) {
                                navigate("/signin")
                            } 
                            
                            navigate("/dashboard")
                    }}/>
                </div>
                <BottomComp label={"Don't have account "} bottonText={"Sign up"} to={"/signup"} />
            </div>
        </div>
    </div>
}