
import { BottomComp } from "../component/BottomComp"
import { Button } from "../component/Button"
import { Heading } from "../component/Heading"
import { Inputbox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"

export const Signup = () => {
    return <div className= "" >
        <div className= "" >
            <div className= "" >
                <Heading label={"Sign up"} />
                <SubHeading label={"Enter your details"} />
                <Inputbox label={"First name"} placeholder={"Sayan"} /> 
                <Inputbox label={"Last name"}  placeholder={"Das"} /> 
                <Inputbox label={"Email"}  placeholder={"sayan123@gmail.com"} /> 
                <Inputbox label={"Password"}  placeholder={"123456"} /> 
            </div>

            <div className="">
                <Button label={"Sign up"} ></Button>
            </div>
            <BottomComp label={"Already have an account"} bottonText={"Sign in"} />
        </div>
    </div>
}