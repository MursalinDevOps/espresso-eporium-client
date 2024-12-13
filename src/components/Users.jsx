import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleUserDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Failed to delete user");
                    }
                    return res.json();
                })
                .then(() => {
                    Swal.fire(
                        "Deleted!",
                        "The user has been deleted.",
                        "success"
                    );
                    // Update the state to remove the deleted user
                    setUsers(users.filter(user => user._id !== _id));
                })
                .catch(err => {
                    Swal.fire(
                        "Error!",
                        "Failed to delete the user.",
                        "error"
                    );
                    console.error("Delete error:", err);
                });
            }
        });
    };

    return (
        <div>
            <Navbar />
            <h2 className="text-3xl text-center my-5">Users - {users.length}</h2>
            <div>
                {users.map(user => (
                    <div className="border m-5 rounded-xl p-10 border-blue-400" key={user._id}>
                        <p>ID - {user._id}</p>
                        <p>Name - {user.name}</p>
                        <p>Email - {user.email}</p>
                        <button
                            onClick={() => handleUserDelete(user._id)}
                            className="btn btn-sm btn-error text-white mt-3"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
