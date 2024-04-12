import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const User = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
        .then(response => {
            setUsers(response.data.user)
        })

    },[filter]);

    return <div>
        <div className="font-bold mt-7 text-lg">
            Users
        </div>
        <div className="my-2">
            <input onChange={e => {
                setFilter(e.target.value)
            }} type="text" placeholder="search name.. " className="border rounded border-slate-300 w-full px-2 py-1" key={users._id}/>
        </div>
        <div>
            {users.map(user => <People user={user} />)}
        </div>
    </div>
}

function People({user, key}){

    const navigate = useNavigate();

    return <div className="flex justify-between" key={key}>
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-rose-300 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl text-white">
                    {user.firstname[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-full">
            <Button onClick = {(e) => {
                navigate(`/transfer?id=${user._id}&name=${user.firstname}`);
            }} label={"Send"} />
        </div>
    </div>
}