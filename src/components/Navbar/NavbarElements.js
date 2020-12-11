import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
    position:fixed;
    width:100%;   
    height:80px;
    
    background-color: var(--bg-clr);
    color: var(--tx-clr);
    
    display: flex;
    justify-content: center;
    align-items:center;
`;

export const NavLink = styled(Link)`
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: #1c2732;
    cursor: pointer;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;