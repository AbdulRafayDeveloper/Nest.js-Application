import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    return (
        <nav className="navbar bg-light navbar-light">
            <a href="/dashboard" className="navbar-brand mx-4 my-2 mb-3">
                <h3 className="text-danger"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
            </a>

            <div className="navbar-nav w-100">
                <Link to="/dashboard" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fas fa-users me-2"></i>Users</Link>
                    <div className="dropdown-menu bg-transparent border-0">
                        <Link to="/dashboard/user" className="dropdown-item">List Of Users</Link>
                        <Link to="/dashboard/user/add" className="dropdown-item">Add new User</Link>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fas fa-file-alt me-2"></i>Posts</Link>
                    <div className="dropdown-menu bg-transparent border-0">
                        <Link to="/dashboard/post" className="dropdown-item">List Of Posts</Link>
                        <Link to="/dashboard/post/add" className="dropdown-item">Add new Post</Link>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fas fa-folder me-2"></i>Categories</Link>
                    <div className="dropdown-menu bg-transparent border-0">
                        <Link to="/dashboard/category" className="dropdown-item">List Of Categories</Link>
                        <Link to="/dashboard/category/add" className="dropdown-item">Add new Category</Link>
                    </div>
                </div>
                <div className="nav-item dropdown">
                    <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fas fa-comments me-2"></i>Comments</Link>
                    <div className="dropdown-menu bg-transparent border-0">
                        <Link to="/dashboard/post" className="dropdown-item">List Of Comments</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
