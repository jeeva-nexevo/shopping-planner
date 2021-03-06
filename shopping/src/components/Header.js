import React from 'react'
import './Header.css';

function Header() {
    return (
        <div className='bg_color_header'>
            <div className="d-flex flex-row bd-highlight mb-3">
                <nav className="navbar navbar-light ">
                    <a className="navbar-brand p-2 bd-highlight text_color" href="/">Home</a>
                    <a className="navbar-brand p-2 bd-highlight text_color" href="#">Product List</a>
                </nav>
            </div>
        </div>
    )
}

export default Header;