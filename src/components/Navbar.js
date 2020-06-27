import React from 'react'

function Navbar(props) {

    const style = {
        backgroundColor: props.backgroundColor
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-light' style={style}>
            <h5>Calendar</h5>
        </nav>
    )
}

export default Navbar


