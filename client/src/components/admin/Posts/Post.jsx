import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { url } from '../../../url';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { Link } from 'react-router-dom';

const roleMappings = {
    0: 'Admin',
    1: 'Editor',
    2: 'Site User',
};

export default function User() {
    const [users, setUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${url}/user`);
            if (response.data.status) {
                setUsers(response.data.data);
            } else {
                console.log('Error in fetching data');
            }
        } catch (error) {
            console.error('Error fetching Users:', error);
        }
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this user!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${url}/user/delete/${id}`)
                    .then((result) => {
                        if (result.data.status) {
                            const updatedUsers = users.filter((element) => element._id !== id);
                            setUsers(updatedUsers);
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });
    };


    const handleSidebarToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className={`container-xxl position-relative bg-white d-flex p-0`}>
                {/* Sidebar */}
                <div className={`sidebar pe-4 pb-3 ${isOpen ? 'open' : ''}`}>
                    <Sidebar />
                </div>
                <div className={`content  ${isOpen ? 'content-open' : ''} `}>
                    <Header />
                    <div class="container-fluid pt-4 px-4">
                        <div class="bg-light text-center rounded p-4">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Users Details</h6>
                                <div class="d-flex align-items-center">
                                    <Link to="/dashboard/user/add"
                                        style={{ fontSize: 16, color: "black", fontWeight: 500, marginRight: 20 }}>Show
                                        All </Link>
                                    <Link to="/dashboard/user/add" class="btn btn-danger" style={{ color: "white", fontSize: 15 }}>
                                        <i class="bi bi-plus"></i>
                                    </Link>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table text-start align-middle table-bordered table-hover mb-0" id="dataTable">
                                    <thead>
                                        <tr class="text-dark">
                                            <th scope="col" class="text-center">Sr No.</th>
                                            <th scope="col" class="text-center">Name</th>
                                            <th scope="col" class="text-center">Email</th>
                                            <th scope="col" class="text-center">Role</th>
                                            <th scope="col" class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((element, index) => (
                                            <tr key={element._id}>
                                                <td className='text-center'>{index + 1}</td>
                                                <td className='text-center'>{element.name}</td>
                                                <td className='text-center'>{element.email}</td>
                                                <td className='text-center'>
                                                    <span className={`role-badge ${element.role === 0 ? 'admin' : element.role === 1 ? 'editor' : 'siteUser'}`}>
                                                        {roleMappings[element.role]}
                                                    </span>
                                                </td>
                                                <td className='text-center'>
                                                    <Link className='btn btn-success' to={`/dashboard/user/update/${element._id}`}>Update</Link>
                                                    <button className='btn btn-danger mx-3' onClick={() => handleDelete(element._id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
