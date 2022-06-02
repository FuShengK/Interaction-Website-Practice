import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function CreateSales() {
    const [inputs, setInputs] = useState({
        name: '',
        price: '',
        content: ''
    });


    function handleChange (e) {
        const {name, value} = e.target;

        setInputs(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick (e) {
        e.preventDefault();
        const newItem = {
            name: inputs.name,
            price: inputs.price,
            content: inputs.content
        }
        
        axios.post('http://localhost:5000/secondhand/create', newItem)
    }


    return (
        <div className='container'>
            <h1>New Listing</h1>

            <form>
                <div className='form-group'>
                    <input onChange={handleChange} name='name' value={inputs.title} autoComplete='off' className='form-control' placeholder='item name'></input>
                </div>

                <br/>

                <div className='form-group'>
                    <input onChange={handleChange} name='price' value={inputs.price} autoComplete='off' className='form-control' placeholder='price'></input>
                </div>

                <br/>

                <div className='form-group'>
                    <textarea onChange={handleChange} name='content' value={inputs.content} autoComplete='off'  className='form-control' placeholder='the content'></textarea>
                </div>

                <br/>

                <button onClick={handleClick} className='btn btn-lg btn-info'> submit </button>

            </form>
        
            <br/>

            <button> <Link to='/secondhand'> Back to Marketplace </Link></button>
        </div>
  )
}
