import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import AddProduct from './AddProduct';

function Home() {
    return (
        <div className="bg_color">
            <div className="container">
                <div className="d-flex justify-content-end">
                    <Link to="/AddProduct">
                        <button className="button_color">Items</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;