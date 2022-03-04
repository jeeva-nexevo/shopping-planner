import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
import Edit from './Edit';
import { useHistory } from 'react-router-dom';
import './data.css';

const Data = ({ details, deleteDetail }) => {
    const history = useHistory()
    const [allTotal, setAllTotal] = useState(0)
    // const [details, setdetails] = useState(getDatafromLS());
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [strikeDetails, setStrikeDetails] = useState([])

    const handleEdit = id => {
        history.push("/Edit/" + id)
        const employee = details[id]
        console.log(employee)
        // setdetails([...details, details]);
        setName('');
        setQuantity('');
        setPrice('');
    };
    const [total, setTotal] = useState(0);


    const strike = (id) => {

        let strikeDetail = details[id];
        setStrikeDetails([
            ...strikeDetails,
            strikeDetail
        ])
        let newDetails = details;
        newDetails.splice(id, 1)
        details(newDetails)
    }

    useEffect(() => {
        let newtotal = 0
        for (let i = 0; i < details.length; i++) {
            newtotal = (details[i].price * details[i].quantity) + newtotal
        }
        setAllTotal(newtotal)
    })


    return (
        <>
            {details.map((detail, index) => (
                <tr key={details.name}>
                    <td onClick={() => strike(index)}> <input type='checkbox' /></td>
                    <td>{detail.name}</td>
                    <td>{detail.quantity}</td>
                    <td>{detail.price}</td>
                    <td className='delete-btn' onClick={() => deleteDetail(detail.price)} >
                        <Icon icon={trash} />
                    </td>
                    <td className='update-btn'>
                        <button type="button" class="btn btn-primary"
                            onClick={() => handleEdit(detail.id)}>Edit</button>
                    </td>
                    <td>{detail.quantity * detail.price}</td>

                </tr>
            ))}
            <div className='total_left'>
                Total :<h1>{allTotal}</h1>
            </div>

            <div className="view-container">
                <div class="card card_top">
                    <div className="table-responsive">
                        <div class="card-body">
                            <table className="table">
                                <thead>
                                    <tr className="h3">
                                        <td></td>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                    {strikeDetails.map((detail, index) => {
                                        return (
                                            <tr className='strike' >
                                                <td></td>
                                                <td>{detail.name}</td>
                                                <td>{detail.quantity}</td>
                                                <td>{detail.price}</td>

                                            </tr>
                                        )
                                    })}
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                            <br />
                            <br />
                            <br />
                            <br />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Data;

