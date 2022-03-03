import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
import Edit from './Edit';
import { useHistory } from 'react-router-dom';

const Data = ({ details, deleteDetail }) => {
    const history = useHistory()
    // const [details, setdetails] = useState(getDatafromLS());
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleEdit = id => {
        history.push("/Edit")
        const employee = details[id]
        console.log(employee)
        // setdetails([...details, details]);
        setName('');
        setQuantity('');
        setPrice('');
    };
    return details.map((detail, index) => (
        <tr key={details.name}>
            <td>{detail.name}</td>
            <td>{detail.quantity}</td>
            <td>{detail.price}</td>
            <td className='delete-btn' onClick={() => deleteDetail(detail.price)} >
                <Icon icon={trash} />
            </td>
            <td className='update-btn' onClick={() => handleEdit(detail.price)}>
                <button type="button" class="btn btn-primary" onClick={() => handleEdit(index)}>Edit</button>
            </td>
            <td>{detail.quantity * detail.price}</td>
        </tr>
    ))
}
export default Data;

