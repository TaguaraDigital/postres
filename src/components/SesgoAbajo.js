import React from 'react';
import styled from 'styled-components';

const Sesgo = styled.div`
    position: absolute;
    width: 100%;
    height: 150px;
    background: ${props => props.bgClr};
    bottom:0;
    left:0;
    clip-path: polygon(70% 100%, 100% 50%, 100% 100%, 0 100%, 0 0);
`;

const SesgoAbajo = ({bgClr}) => {
    console.log('color', bgClr);

    return (
        <Sesgo bgClr={bgClr} />
    )
}

export default SesgoAbajo
