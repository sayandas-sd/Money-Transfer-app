
import { BottomComp } from "../component/BottomComp"
import { Button } from "../component/Button"
import { Heading } from "../component/Heading"
import { Inputbox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"

export const Signin = ()=>{
    return <div>
        <div>
            <div>
                <Heading label={"Sign in"} />
                <SubHeading label={"Enter your details to access your account"} />
                <Inputbox label={"Email"} placeholder={"sayan123@gmail.com"} />
                <Inputbox label={"Password"} placeholder={"123456"} />
                <div>
                    <Button label={"Sign in"} />
                </div>
                <BottomComp label={"Don't have account "} bottonText={"Sign up"}/>
            </div>
        </div>
    </div>
}