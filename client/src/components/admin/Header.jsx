import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <Link to="/" className=" flex-shrink-0" id='sidebar-toggler' onClick={handleSidebarToggle}>
                    <i style={{ color: " #f33f3f" }} className="fa fa-bars"></i>
                </Link>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control border-0" type="search" placeholder="Search" />
                </form>
                <div className="navbar-nav align-items-center ms-auto">


                    <div className="nav-item dropdown">
                        <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <span className="d-none d-lg-inline-flex">Abdul Rafay</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <Link to="/" className="dropdown-item">My Profile</Link>
                            <Link to="/" className="dropdown-item">Settings</Link>
                            <Link to="/" className="dropdown-item">Log Out</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}
