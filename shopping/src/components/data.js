import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';
import Edit from './Edit';
import { useHistory } from 'react-router-dom';

const Data = ({ details, deleteDetail }) => {
    const history = useHistory()
    const [allTotal, setAllTotal] = useState(0)
    // const [details, setdetails] = useState(getDatafromLS());
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

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

        
    

    useEffect(()=>{
        let newtotal = 0
        for (let i = 0; i<details.length; i++){
            newtotal = (details[i].price*details[i].quantity)+newtotal
        }
        setAllTotal(newtotal)
    })
    

    return (
    <>
        {details.map((detail, index) => (
            <tr key={details.name}>
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
        <h1>{allTotal}</h1>
    </>
    )
    
}
export default Data;

