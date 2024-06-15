import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import { url } from '../../../url';
import Swal from 'sweetalert2';

export default function Dashboard() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${url}/user/update/${id}`)
            .then((response) => {
                if (response.data.status) {
                    const userData = response.data.data;
                    setName(userData.name);
                    setEmail(userData.email);
                    setPassword(userData.password);
                } else {
                    console.log('Error in fetching user data');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Frontend validation
        if (!name || !email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'All fields are required'
            });
            return;
        }

        if (!/^[A-Za-z\s]+$/.test(name)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Name must contain only alphabetic characters'
            });
            return;
        }

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Invalid email format'
            });
            return;
        }

        if (password.length < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Password should be at least 2 characters long'
            });
            return;
        }

        axios.put(`http://localhost:4000/user/update/${id}`, { name, email, password })
            .then((result) => {
                if (result.data.statusCode === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: result.data.message
                    });

                    navigate("/dashboard/user");
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: result.data.message
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.response ? error.response.data.message : 'An error occurred'
                });
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
                    <section class="vh-100 gradient-custom" style={{ marginTop: -35 }}>
                        <div class="container h-100">
                            <div class="row justify-content-center align-items-center h-100">
                                <div class="col-12 col-lg-9 col-xl-7">
                                    <div class="card shadow-2-strong card-registration" style={{ backgroundColor: "#F3F6F9" }}     >
                                        <div class="card-body p-md-5">
                                            <h3 class="text-center mb-5">Update the User</h3>
                                            <form id="staffAdd" method="post" onSubmit={handleSubmit}>
                                                <div class="row mb-4">
                                                    <div class="col-md-6">
                                                        <div class="form-outline">
                                                            <input type="text" id="name"
                                                                name="name"
                                                                value={name}
                                                                onChange={(e) => setName(e.target.value)}
                                                                class="form-control form-control-lg" />
                                                            <label class="form-label">Username: </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-outline">
                                                            <input type="email"
                                                                class="form-control form-control-lg"
                                                                id="email"
                                                                name="email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)} />
                                                            <label class="form-label">Email: </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb-4">
                                                    <div class="form-outline">
                                                        <input type="password" id="password"
                                                            name="password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            class="form-control form-control-lg" />
                                                        <label class="form-label">Password: </label>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <input class="btn btn-primary btn-lg" type="submit"
                                                        value="Submit" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
