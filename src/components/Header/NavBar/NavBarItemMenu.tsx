import React from "react";

import DropDownItem from "@/interfaces/nav-drop-down-item";
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarItemMenu: React.FC<{ item: DropDownItem }> = (props) => {
    return (
        <NavDropdown title={props.item.name} id="navbarScrollingDropdown">
            <NavDropdown.Header>{props.item.description}</NavDropdown.Header>
            {props.item.options.map(option => <NavDropdown.Item key={option.name} href={option.link} >{option.name}</NavDropdown.Item>)}
        </NavDropdown>
    );
}

export default NavBarItemMenu;