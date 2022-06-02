import React, { useState } from 'react'
import { useForm } from "react-hook-form";


const AddChar = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(inputs);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Name:
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Birthday:
                <input
                    type="text"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Occupation:
                <input
                    type="text"
                    name="occu"
                    value={inputs.occu || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Image URL:
                <input
                    type="text"
                    name="img"
                    value={inputs.img || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Status:
                <input
                    type="text"
                    name="sta"
                    value={inputs.sta || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Nickname:
                <input
                    type="text"
                    name="nic"
                    value={inputs.nic || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Appearance:
                <input
                    type="text"
                    name="appe"
                    value={inputs.appe || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Portrayed:
                <input
                    type="text"
                    name="port"
                    value={inputs.port || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Category:
                <input
                    type="text"
                    name="cat"
                    value={inputs.cat || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default AddChar
