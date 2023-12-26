import React from 'react'

const Navbar = ({brand}) => {
    return(
        <nav className='navbar navbar-dark bg-dark'>
            
            <h2 style={{color: "white", marginLeft:"20px"}}>{brand}</h2>
            
        </nav>
    );
}

export default Navbar;