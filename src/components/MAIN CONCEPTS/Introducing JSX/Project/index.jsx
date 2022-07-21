import React from 'react';
import shoes from './image/shoes.png';
import { FaBars } from 'react-icons/fa';
import './style.css';
function Project() {
    const ShoesWala = <span>ShoesWala</span>
    const home = <span>Home</span>
    const about = <span>About Us</span>
    const category = <span>Category</span>
    const help = <span>Help</span>
    const newArrivals = <span>New Arrivals</span>
    const paragraph = 'Your Ultimate Strength Training Partner';
    const btn = 'Buy Now';
    return (
        <div className='container-fluid'>
            <div className="content row" id='content'>
                <nav className='d-flex align-items-center text-center'>
                    <div className="nav-logo align-items-center">
                        <h1 className='text-center'>{ ShoesWala }</h1>
                    </div>
                    <div className="nav-menu align-items-center">
                        <ul className='d-flex list-inline'>
                            <li>
                                <a href="#" className='text-decoration-none text-white'>{home}</a>
                            </li>
                            <li>
                                <a href="#" className='text-decoration-none text-white'>{about}</a>
                            </li>
                            <li>
                                <a href="#" className='text-decoration-none text-white'>{category}</a>
                            </li>
                            <li>
                                <a href="#" className='text-decoration-none text-white'>{help}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-bar d-flex align-items-center">
                        <FaBars className='icon' />
                    </div>
                </nav>
                <header className='d-flex'>
                    <div className="row">
                        <div className="left d-flex flex-column justify-content-center w-50 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <h1>
                                {newArrivals}
                            </h1>
                            <p>{ paragraph }</p>
                            <a href="#">{ btn }</a>
                        </div>
                        <div className="right justify-content-center ali w-50 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <img src={shoes} alt="error" />
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Project