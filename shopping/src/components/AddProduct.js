// import React from 'react';
// import './AddProduct.css';

// function AddProduct() {
//     const handleSubmit = (e) => {
//         e.preventDefault()
//     }
//     return (
//         <div className='bg_color'>
//             <div className='background_color_resetpassword vh-100'>
//                 <div className="row align-items-center">
//                     <div>
//                         {/* <h1 className="text-dark">Add Product Page</h1> */}
//                     </div>
//                     <div className="card col-4 mx-auto">
//                         <div className="card-body">
//                             <i class="fa fa-lock fa-5x" aria-hidden="true"></i>
//                             <h3 className="card-title text-primary">AddProduct</h3>
//                             <form action="" method="" className="form-horizontal mt-2" onSubmit={handleSubmit}>
//                                 <h6 className="card-subtitle mb-2 text-danger name_left">Name</h6>
//                                 <input type="" className="form-control mb-4" placeholder="OTP" name="title" />
//                                 <h6 className="card-subtitle mb-2 text-danger price_left">Price</h6>
//                                 <input type="password" className="form-control mb-4" placeholder="Password" name="title" />
//                                 <h6 className="card-subtitle mb-2 text-danger quantity_left">Quantity</h6>
//                                 <input type="password" className="form-control mb-4" placeholder="Confirm Password" name="title" />
//                                 <button type="submit" className="btn btn-primary mt-5 mb-5" >Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AddProduct;


// class AddProduct extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: '', price: '', quantity: '' }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value,
//             [event.target.price]: event.target.value,
//             [event.target.quantity]: event.target.value
//         });
//     }
//     handleSubmit(event) {
//         const { name, price, quantity} = this.state

//         console.log('Name: ' + this.state.name);
//         console.log('Price ' + this.state.price);
//         console.log('Quantity' + this.state.quantity);
//         event.preventDefault();
//     }


//     render() {
//         return (
//             // <form onSubmit={this.handleSubmit}>
//             //     <label>
//             //         Name:
//             //         <input type="text" value={this.state.value} onChange={this.handleChange} />
//             //     </label>
//             //     <input type="submit" value="Submit" />
//             // </form>
//             <div className='bg_color'>
//                 <div className='background_color_resetpassword vh-100'>
//                     <div className="row align-items-center">
//                         <div className="card col-4 mx-auto">
//                             <div className="card-body">
//                                 <i class="fa fa-lock fa-5x" aria-hidden="true"></i>
//                                 <h3 className="card-title text-primary">AddProduct</h3>
//                                 <form action="" method="" className="form-horizontal mt-2" onSubmit={this.handleSubmit}>
//                                     <h6 className="card-subtitle mb-2 text-danger name_left">Name</h6>
//                                     <input type="" className="form-control mb-4" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
//                                     <h6 className="card-subtitle mb-2 text-danger price_left">Price</h6>
//                                     <input type="password" className="form-control mb-4" placeholder="Price" name="price" value={this.state.price} onChange={this.handleChange} />
//                                     <h6 className="card-subtitle mb-2 text-danger quantity_left">Quantity</h6>
//                                     <input type="password" className="form-control mb-4" placeholder="Quantity" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
//                                     <button type="submit" className="btn btn-primary mt-5 mb-5" >Submit</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default AddProduct;


// import React from 'react';
// import { useState, useEffect } from 'react';
// import './AddProduct.css';


// const AddProduct = () => {


//     const [todos, setTodos] = useState(() => {
//         const savedTodos = localStorage.getItem("todos");
//         if (savedTodos) {
//             return JSON.parse(savedTodos);
//         }
//         else {
//             return []
//         }
//     });

//     const [todo, setTodo] = useState("");
//     const [isEditing, setIsEditing] = useState(false);
//     const [currentTodo, setCurrentTodo] = useState({
//         name: "",
//         price: "",
//         quantity: ""
//     });
//     const [todoList, setTodoList] = useState({})

//     const handleInputChange = (e) => {

//         setCurrentTodo({
//             ...currentTodo,
//             [e.target.name]: e.target.value
//         })

//     }


//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (todo !== "") {

//             setTodos([...todos, {
//                 id: todos.length + 1,
//                 Text: todo.trim()
//             }])
//         }
//         setTodo("");
//     }


//     useEffect(() => {
//         localStorage.setItem("todos", JSON.stringify(todos));
//     }, [todos]);


//     const handleDeleteClick = (id) => {
//         const removeItem = todos.filter((todo) => {
//             return todo.id !== id;
//         })
//         setTodos(removeItem);
//     }

//     const handleEditInputChange = (e) => {
//         setCurrentTodo({ ...currentTodo, Text: e.target.value })
//         console.log(currentTodo);
//     }

//     const handleEditClick = (todo) => {
//         setIsEditing(true);
//         setCurrentTodo({ ...todo });
//     }

//     const handleUpdate = (id, updatedTodo) => {
//         const updatedItem = todos.map((todo) => {
//             return todo.id === id ? updatedTodo : todo;
//         });

//         setIsEditing(false);

//         setTodos(updatedItem);
//     }


//     const handleEditFormSubmit = () => {
//         handleUpdate(currentTodo.id, currentTodo);
//     }


//     return (
//         <div>
//             <div className='bg_color'>
//                 <div className='background_color_resetpassword vh-100'>
//                     <div className="row align-items-center">
//                         <div className="card col-4 mx-auto">
//                             <div className="card-body">
//                                 {isEditing ? (
//                                     // <form onSubmit={handleEditFormSubmit}>
//                                     //     <input
//                                     //         type="text"
//                                     //         name="edit"
//                                     //         placeholder='edit your name'
//                                     //         value={currentTodo.Text}
//                                     //         onChange={handleEditInputChange}
//                                     //     /> <br /> <br />
//                                     //     <button>update</button>
//                                     // </form>
//                                     <form action="" method="" className="form-horizontal mt-2" onSubmit={handleEditFormSubmit}>
//                                         <h6 className="card-subtitle mb-2 text-danger name_left">Name</h6>
//                                         <input type="" className="form-control mb-4" placeholder="Name" name="name" value={currentTodo.name} onChange={handleEditInputChange} />
//                                         <h6 className="card-subtitle mb-2 text-danger price_left">Price</h6>
//                                         <input type="password" className="form-control mb-4" placeholder="Price" name="price" value={currentTodo.price} onChange={handleEditInputChange} />
//                                         <h6 className="card-subtitle mb-2 text-danger quantity_left">Quantity</h6>
//                                         <input type="password" className="form-control mb-4" placeholder="Quantity" name="quantity" value={currentTodo.quantity} onChange={handleEditInputChange} />
//                                         <button type="submit" className="btn btn-primary mt-5 mb-5" >Submit</button>
//                                     </form>

//                                 ) : (
//                                     // <form onSubmit={handleFormSubmit}>
//                                     //     <input
//                                     //         type="text"
//                                     //         name="name"
//                                     //         placeholder='Enter Name...'
//                                     //         value={todo}
//                                     //         onChange={handleInputChange}
//                                     //     /><br /> <br />
//                                     //     <button>Update</button>
//                                     // </form>
//                                     <form action="" method="" className="form-horizontal mt-2" onSubmit={handleFormSubmit}>
//                                         <h6 className="card-subtitle mb-2 text-danger name_left">Name</h6>
//                                         <input type="" className="form-control mb-4" placeholder="Name" name="name" value={currentTodo.name} onChange={handleInputChange} />
//                                         <h6 className="card-subtitle mb-2 text-danger price_left">Price</h6>
//                                         <input type="password" className="form-control mb-4" placeholder="Price" name="price" value={currentTodo.price} onChange={handleInputChange} />
//                                         <h6 className="card-subtitle mb-2 text-danger quantity_left">Quantity</h6>
//                                         <input type="password" className="form-control mb-4" placeholder="Quantity" name="quantity" value={currentTodo.quantity} onChange={handleInputChange} />
//                                         <button type="submit" className="btn btn-primary mt-5 mb-5" >Submit</button>
//                                     </form>
//                                 )}

//                                 <ul>
//                                     {todos.map((todo) => (<li key={todo.id}>{todo.Text} <br /> <br />

//                                         <div><button onClick={() => handleDeleteClick(todo.id)}> Delete</button>
//                                             <button onClick={() => handleEditClick(todo)}>Edit</button></div>
//                                     </li>))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddProduct;



// import React, { useState } from 'react';
// const getDatafromLS = () => {
//     const data = localStorage.getItem('details');
//     if (data) {
//         return JSON.parse(data);
//     } else {
//         return [];
//     }
// };
// const AddProduct = () => {
//     const [name, setName] = useState('');
//     const [number, setNumber] = useState(null);
//     const [showPreview, setShowPreview] = useState(false);
//     const [details, setdetails] = useState(getDatafromLS());

//     const handleDetailsSubmit = e => {
//         e.preventDefault();

//         let detail = {
//             name,
//             number
//         };
//         setdetails([...details, detail]);
//         setName('');
//         setNumber('')
//     };
//     return (
//         <div>
//             <form onSubmit={handleDetailsSubmit}>
//                 Name: {" "}
//                 <input type="text" placeholder="Enter name" onChange={e => setName(e.target.value)} /><br />
//                 Contact No.: {" "}
//                 <input type="number" placeholder="Enter contact number" onChange={e => setNumber(e.target.value)} />
//                 <br />
//                 <input type="button" value="submit" onClick={() => setShowPreview(!showPreview)} />
//             </form>
//             <div>
//                 <ul>
//                     {details.map((detail) => {
//                         return (
//                             <li>
//                                 {detail.name} - {detail.number} years old.
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </div>
//     );
// }


// export default AddProduct;




import React, { useState, useEffect } from 'react';
import Data from './data';
import './AddProduct.css';
import Header from './Header';

// const getDatafromLS = () => {
//     const data = localStorage.getItem('details');
//     if (data) {
//         return JSON.parse(data);
//     } else {
//         return [];
//     }
// };

function AddProduct() {
    const [details, setdetails] = useState([]);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        setdetails(JSON.parse(localStorage.getItem('detail')))
        // localStorage.setItem('detail', JSON.stringify(details));
    }, [])

    const handleDetailsSubmit = e => {
        console.log("Add")
        e.preventDefault();

        let detail = {
            name,
            quantity,
            price,
        };
        setdetails([...details, detail]);
        let newDetails = JSON.parse(localStorage.getItem("detail"))
        newDetails.push(detail)
        localStorage.setItem("detail", JSON.stringify(newDetails))
        setName('');
        setQuantity('');
        setPrice('');
    };

    const deleteDetails = price => {
        const filteredDetails = details.filter((element, index) => {
            return element.price !== price;
        });
        setdetails(filteredDetails);
    };
    

    // const handleEdit = e => {
    //     const employee = this.state.employees.find(function (emp) {
    //         if (emp.id === e.target.id) {
    //             return emp;
    //         }
    //     });
    //     this.setState({
    //         name: employee.name,
    //         quantity: employee.quantity,
    //         price: employee.price,
    //         create: false
    //     });
    // };


    return (
        <div className=''>
            <Header />
            <div className='background_color_resetpassword container'>
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
                                value={name}
                            ></input>
                            <br /> <br />
                            <label className='h4'>Quantity</label>
                            <input
                                type="text"
                                className="form-control"
                                required
                                onChange={e => setQuantity(e.target.value)}
                                value={quantity}
                            ></input>
                            <br /> <br />
                            <label className='h4'>Price</label>
                            <input
                                type="number"
                                className="form-control"
                                required
                                onChange={e => setPrice(e.target.value)}
                                value={price}
                            ></input>
                            <br /> <br />
                            <button type="button" className="btn btn-primary" onClick={handleDetailsSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="view-container">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Data details={details} deleteDetail={deleteDetails} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;