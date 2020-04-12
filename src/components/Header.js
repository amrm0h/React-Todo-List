import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons'


export const Header = () => (
    <header>
        <div className="container">
            <h1>
                <FontAwesomeIcon icon={faListAlt} spin/>
                My <span>To-Do</span> List
            </h1>
            <span>Add your Todos Forever....</span>
        </div>
    </header>
);