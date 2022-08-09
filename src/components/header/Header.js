import React from 'react';
import "./Header.css"
function Header(props) {
    const {name} = props
    return (
            <div>
                <p>{name}</p>
            </div>
    );
};

export default Header;
