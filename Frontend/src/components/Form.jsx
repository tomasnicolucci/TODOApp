import React from 'react'
import { postItem } from '../Services/Items/index.js'

const Form = ({item, setItem}) => {
    let {title} = item

    const handleChange = e => {
        setItem({
            ...item, [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async () => {
        const request = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(item)
        }
        try{
           await postItem(request)
        }catch(error){
            console.log(error);
        }
        setItem({
            title: ''
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input value={title} name="title" onChange={handleChange} type="text" id="title" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    );
}

export default Form;