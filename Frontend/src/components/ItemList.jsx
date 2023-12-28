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
        <>
        <h2 style={{textAlign: 'center'}}>Tareas pendientes</h2>
        <table className="table table-hover table-striped table-dark table-bordered">
            <thead>
                <tr>
                    <th>Tarea</th>
                    <th>Finalizada</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </td>
                        <td>
                            <button onClick={() => handleUpdate(item._id)} className="btn btn-outline-warning">Editar</button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(item._id)} className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        <h2 style={{textAlign: 'center'}}>Tareas finalizadas</h2>
        <table className="table table-hover table-striped table-dark table-bordered">
            <thead>
                <tr>
                    <th>Tarea</th>
                    <th>Finalizada</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </td>
                        <td>
                            <button onClick={() => handleUpdate(item._id)} className="btn btn-outline-warning">Editar</button>
                        </td>
                        <td>
                            <button onClick={() => handleDelete(item._id)} className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}

export default ItemList;