import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Edit({ details, deleteDetail }) {

    const params = useParams()

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const id = params.id
    const product_details = JSON.parse(localStorage.getItem("detail"))
    const product_detail = product_details[id]
    console.log(product_detail)

    const handleEdit = id => {
        const employee = details[id]
        console.log(employee)
        // setdetails([...details, details]);
        setName('');
        setQuantity('');
        setPrice('');
    };
    return (
        <div>
            <div className='background_color_resetpassword '>
                <div className="row align-items-center">
                    <div className="card col-4 mx-auto card_top card_bg_color">
                        <div className="card-body card_bg_color">
                            <h2>Add Product</h2>
                            <form autoComplete="off" className="form-group" />
                            <label className='h4'>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={e => setName(e.target.value)}
                                value={product_detail.name}
                            ></input>
                            <br /> <br />
                            <label className='h4'>Quantity</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={e => setQuantity(e.target.value)}
                                value={product_detail.quantity}
                            ></input>
                            <br /> <br />
                            <label className='h4'>Price</label>
                            <input
                                type="number"
                                className="form-control"
                                required
                                onChange={e => setPrice(e.target.value)}
                                value={product_detail.price}
                            ></input>
                            <br /> <br />
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => handleEdit(details)}
                            >
                                Submit
                            </button>
                            {/* {localStorage.getItem('Name') && (
                                <div>
                                    Name: <p>{localStorage.getItem('Name')}</p>
                                </div>
                            )}
                            {localStorage.getItem('Quantity') && (
                                <div>
                                    Quantity: <p>{localStorage.getItem('Quantity')}</p>
                                </div>
                            )}
                            {localStorage.getItem('Price') && (
                                <div>
                                    Price: <p>{localStorage.getItem('Price')}</p>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Edit;