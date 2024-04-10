
import { BottomComp } from "../component/BottomComp"
import { Button } from "../component/Button"
import { Heading } from "../component/Heading"
import { Inputbox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"

export const Signin = ()=>{
    return <div className="bg-slate-400 h-screen flex justify-center ">
        <div className="flex flex-col justify-center ">
            <div className="rounded-lg h-max w-80 bg-white text-center p-2 px-4">
                <Heading label={"Sign in"} />
                <SubHeading label={"Enter your details to access your account"} />
                <Inputbox label={"Email"} placeholder="sayan123@gmail.com" />
                <Inputbox label={"Password"} placeholder="123456" />
                <div className="pt-5">
                    <Button label={"Sign in"} />
                </div>
                <BottomComp label={"Don't have account "} bottonText={"Sign up"} to={"/signup"} />
            </div>
        </div>
    </div>
}