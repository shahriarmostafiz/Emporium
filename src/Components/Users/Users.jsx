import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
    const loadeduserData = useLoaderData()
    const [userData, setUserData] = useState(loadeduserData)
    // console.log(userData);
    const handleUserDeletation = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Deleted!',
                //     'Your file has been deleted.',
                //     'success'
                // )
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        data.deletedCount && Swal.fire(
                            'Deleted!',
                            'User has been deleted.',
                            'error'
                        )
                        const remainingUser = userData.filter(user => user._id !== id)
                        setUserData(remainingUser)

                    })
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            {userData.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At </th>
                            <th>Last Login  </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user?.lastSignInTime ? user.lastSignInTime : ''}</td>
                                <td>
                                    <button
                                        onClick={() => handleUserDeletation(user._id)}
                                        className="btn-sm btn rounded-md btn-error btn-outline "> Delete User </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;