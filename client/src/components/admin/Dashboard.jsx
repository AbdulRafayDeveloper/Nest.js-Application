import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Charts from './Charts';
import Header from './Header';


export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className={`container-xxl position-relative bg-white d-flex p-0`}>
                {/* Sidebar */}
                <div className={`sidebar pe-4 pb-3 ${isOpen ? 'open' : ''}`}>
                    <Sidebar/>
                </div>
                <div className={`content  ${isOpen ? 'content-open' : ''} `}>
                    <Header/>
                    <Charts/>
                </div>
            </div>
        </>
    )

}
