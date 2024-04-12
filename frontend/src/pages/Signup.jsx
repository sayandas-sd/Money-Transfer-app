
import { useState } from "react"
import { BottomComp } from "../component/BottomComp"
import { Button } from "../component/Button"
import { Heading } from "../component/Heading"
import { Inputbox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"


export const Signup = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    return <div className= "bg-slate-400 h-screen flex justify-center " >
        <div className= "flex flex-col justify-center " >
            <div className= "rounded-lg bg-white w-80 text-center p-2 px-4 h-max " >
                <Heading label={"Sign up"} />
                <SubHeading label={"Enter your details"} />
                <Inputbox onChange ={e => {
                    setFirstName(e.target.value);
                }} label={"First name"} placeholder="Sayan" /> 
                <Inputbox onChange={e => {
                    setLastName(e.target.value);
                }} label={"Last name"}  placeholder="Das" /> 
                <Inputbox onChange={e =>{
                    setUserName(e.target.value);
                }} label={"Email"}  placeholder="sayan123@gmail.com" /> 
                <Inputbox onChange={e => {
                    setPassword(e.target.value);
                }} label={"Password"}  placeholder="123456" /> 

                <div className="pt-5">
                    <Button onClick={async () => {
                        try{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                            username,
                            firstname,
                            lastname,
                            password
                        });

                        localStorage.setItem("token", response.data.token)
                        navigate("/signin");
                    } catch (error) {
                        console.error("Error signing up:", error);
                    }
                    }} label={"Sign up"} ></Button>
                </div>
                <BottomComp label={"Already have an account"} bottonText={"Sign in"} to ={"/signin"} />
            </div>
        </div>
    </div>
}