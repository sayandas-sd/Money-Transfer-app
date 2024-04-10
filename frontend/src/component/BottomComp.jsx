import { Link } from "react-router-dom"


export const BottomComp = ({bottonText, label, to})=>{
    return <div className="py-2 text-sm flex justify-center">
        <div>
            {label}
        </div>
            <Link className ="pointer cursor-pointer underline pl-1" to={to} >
                {bottonText}
            </Link>
    </div>
}