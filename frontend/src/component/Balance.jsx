
export const Balance = ({value}) => {
    return <div className="flex">
        <div className="text-lg font-bold">
            Balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {value}
        </div>
    </div>
}