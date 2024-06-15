import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import Post from './components/admin/Posts/Post';
import AddPost from './components/admin/Posts/AddPost';
import UpdatePost from './components/admin/Posts/UpdatePost';
import User from './components/admin/Users/User';
import AddUser from './components/admin/Users/Adduser';
import UpdateUser from './components/admin/Users/UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/post" element={<Post />} />
        <Route exact path="/dashboard/post/add" element={<AddPost />} />
        <Route exact path="/dashboard/post/update" element={<UpdatePost />} />
        <Route exact path="/dashboard/user" element={<User />} />
        <Route exact path="/dashboard/user/add" element={<AddUser />} />
        <Route exact path="/dashboard/user/update/:id" element={<UpdateUser />} />
        {/* <Route exact path="/dashboard/category" element={<Post />} />
        <Route exact path="/dashboard/category/add" element={<Post />} />
        <Route exact path="/dashboard/category/update" element={<Post />} />
        <Route exact path="/dashboard/comment" element={<Post />} />  */}

        {/* <Route exact path="/dashboard/post/add" element={<Post />} />
        <Route exact path="/dashboard/post/add" element={<Post />} />
        <Route exact path="/dashboard/post/add" element={<Post />} />
        <Route exact path="/dashboard/post/add" element={<Post />} />
        <Route exact path="/dashboard/post/add" element={<Post />} />
        <Route exact path="/dashboard/post/add" element={<Post />} />
        <Route exact path="/dashboard/post/add" element={<Post />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
