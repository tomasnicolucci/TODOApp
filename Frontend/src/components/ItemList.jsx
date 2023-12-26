import React from 'react'

const ItemList = ({items}) => {
    return(
        <table className='table'>
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
                        <th>{item.title}</th>
                        <th>check1</th>
                        <th><button className='btn btn-secondary'>Editar</button></th>
                        <th><button className='btn btn-danger'>Eliminar</button></th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ItemList;