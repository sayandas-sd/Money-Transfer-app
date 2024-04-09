
export const BottomComp = ({bottonText, label, to})=>{
    return <div>
        <div>
            {label}
        </div>
            <Link className ="pointer cursor-pointer under" to={to} >
                {bottonText}
            </Link>
    </div>
}