import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../CSS/Sidebar.css';

function Sidebar() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                <i className="bi bi-list fs-3"></i>
            </button>
            <div className={`sidebar ${isVisible ? 'show' : 'hide'}`}>
                <div className='d-flex flex-column bg-dark text-white p-4'>
                    <a href='#' className='d-flex align-items-center'>
                        <i className='bi bi-bootstrap fs-5 me-2'></i>
                        <span className='fs-4'>Sidebar</span>
                    </a>
                    <hr className='text-secondary mt-2' />
                    <ul className='nav nav-pills flex-column p-0 m-0'>
                        <li className='nav-item p-1'>
                            <Link to='/' className='nav-link text-white'>
                                <i className='bi bi-house-door me-2 fs-5'></i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className='nav-item p-1'>
                            <Link to='/showcase' className='nav-link text-white'>
                                <i className='bi bi-display me-2 fs-5'></i>
                                <span>Showcase</span>
                            </Link>
                        </li>
                        <li className='nav-item p-1'>
                            <Link to='/products' className='nav-link text-white'>
                                <i className='bi bi-box me-2 fs-5'></i>
                                <span>Product List</span>
                            </Link>
                        </li>
                        <li className='nav-item p-1'>
                            <Link to='/reviews' className='nav-link text-white'>
                                <i className='bi bi-chat-square-text me-2 fs-5'></i>
                                <span>Reviews</span>
                            </Link>
                        </li>
                        <li className='nav-item p-1'>
                            <Link to='/company-profile' className='nav-link text-white'>
                                <i className='bi bi-people me-2 fs-5'></i>
                                <span>Company Profile</span>
                            </Link>
                        </li>
                        <li className='nav-item p-1'>
                            <Link to='/developer' className='nav-link text-white'>
                                <i className='bi bi-person-circle me-2 fs-5'></i>
                                <span>Developer Page</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
