import React from 'react'
import { deleteItem, putItem } from '../Services/Items/index.js';

const ItemList = ({item, setItem, items, setUpdate}) => {

    const handleDelete = async (id) => {
        const request = {
            method: 'DELETE'
        }
        try{
            await deleteItem(id, request);
            setUpdate(true);
        } catch(error){
            console.log(error);
        }
    }

    let{title} = item
    const handleUpdate = async (id) => {
        if(title === ''){
            alert('Debe ingresar un nombre')
            return
        }
        const request = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(item)
        }
        try{
            await putItem(id, request);
        } catch(error){
            console.log(error);
        }
        
        setItem({
            title: ''
        })
        setUpdate(true);
    }

    return(
        <table className="table table-hover table-striped table-dark table-bordered">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Check</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>check1</td>
                        <td><button onClick={() => handleUpdate(item._id)} className="btn btn-outline-warning">Editar</button></td>
                        <td><button onClick={() => handleDelete(item._id)} className="btn btn-danger">Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ItemList;