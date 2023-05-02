import styled from 'styled-components';
import { Navbar, Button } from 'react-bootstrap';

const backgroundColor = "rgba(56, 196, 240)";
const fontColor = "green";
// const fontColor = "rgba(202, 220, 109)";

export const NavbarStyle = styled(Navbar)`
    background-color: ${backgroundColor};
    
    .navbar-brand, .nav-link {
        color: ${fontColor};
    }

    .nav-link:hover {
        color: white;
    }
    `;

export const ButtonStyle = styled(Button)`
    color: ${fontColor};
    border-color: ${fontColor};
`;