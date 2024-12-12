import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import { useState } from "react";
import { use } from "react";

const Users = () => {
    const loadedUsers = useLoaderData();
    console.log(loadedUsers);
    const [users, setUsers] = useState(loadedUsers);
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <h2 className="text-3xl text-center my-5">Users - {users.length}</h2>
            <div>
                {
                    users.map(user => <div className="border m-5 rounded-xl p-10 border-blue-400" key={user._id}>
                        <p>ID - {user._id}</p>
                        <p>Name - {user.name}</p>
                        <p>Email - {user.email}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;