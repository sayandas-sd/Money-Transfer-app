
export const Inputbox = ({label, placeholder})=>{
    return <div>
        <div className="text-sm ">
            {label}
        </div>
        <input placeholder={placeholder} className="w-full px-2 border rounded"/>
    </div>
}