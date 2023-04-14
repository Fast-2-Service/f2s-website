import DropDownItem from "@/interfaces/nav-drop-down-item";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavBarItemMenu from "./NavBarItemMenu";

import navBarClasses from './NavBar.module.css';


const menuItems: DropDownItem[] = [
    {
        name: "Quick Repairs",
        description: "Appliance repairs & fixes comfortably at your home",
        options: [
            {
                name: "AC Service and Repair",
                link: "",
            },
            {
                name: "Washing Machine Repair",
                link: "",
            },
            {
                name: "Refrigerator Repair",
                link: "",
            },
            {
                name: "Television Repair",
                link: "",
            },
        ],
    },
    {
        name: "Home Appliances",
        description: "Extended Warranty Plans | Accidental Damage, Breakdown, Burglary Protection Plans",
        options: [
            {
                name: "Unlimited Service",
                link: "",
            },
            {
                name: "Extended Warranty",
                link: "",
            },
            {
                name: "HomeAssist",
                link: "",
            },
        ]
    },
];

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid className={navBarClasses.navContainer}>
                <Navbar.Brand href="#"><img
                    src="/nav-logo.png"
                    className="d-inline-block align-top"
                    alt="F2S logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`me-auto ${navBarClasses.navItems}`}>
                        {menuItems.map(menuItem => <NavBarItemMenu key={menuItem.name} item={menuItem} />)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
