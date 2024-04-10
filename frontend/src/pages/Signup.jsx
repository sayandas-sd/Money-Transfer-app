
import { BottomComp } from "../component/BottomComp"
import { Button } from "../component/Button"
import { Heading } from "../component/Heading"
import { Inputbox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"

export const Signup = () => {
    return <div className= "bg-slate-400 h-screen flex justify-center " >
        <div className= "flex flex-col justify-center " >
            <div className= "rounded-lg bg-white w-80 text-center p-2 px-4 h-max " >
                <Heading label={"Sign up"} />
                <SubHeading label={"Enter your details"} />
                <Inputbox label={"First name"} placeholder="Sayan" /> 
                <Inputbox label={"Last name"}  placeholder="Das" /> 
                <Inputbox label={"Email"}  placeholder="sayan123@gmail.com" /> 
                <Inputbox label={"Password"}  placeholder="123456" /> 

                <div className="pt-5">
                    <Button label={"Sign up"} ></Button>
                </div>
                <BottomComp label={"Already have an account"} bottonText={"Sign in"} to ={"/signin"} />
            </div>
        </div>
    </div>
}