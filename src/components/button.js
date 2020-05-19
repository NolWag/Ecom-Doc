import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from "gatsby"


const ButtonBase = css`
    border: none;
    width: 10rem;
    height: 2.5rem;
    border-radius: 2rem;
    text-transform: uppercase;
    cursor: pointer;

    @media (max-width: 800px) {
        margin: .5rem 0;
    }
`;

const SecondaryButton = styled('button')`
    background-color: #ccc;
    color: #000;
    margin-right: 2rem;
    ${ButtonBase}

    @media (max-width: 800px) {
        margin-right: 0;
    }
    &:hover {
        background-color: #eee;
        transition: .4s;
    }
`;

const PrimaryButton = styled('button')`
    background-color: #ef4538;
    color: #fff;
    ${ButtonBase}
    &:hover {
        background-color: #ef685e;
        transition: .4s;
    }
`;

const Button = (props) => {
    const buttonType = props.type;
    if  (buttonType == 'primary') {
        return (
            <Link to={props.link}>
            <PrimaryButton>{props.name}</PrimaryButton>
            </Link>
        )
    }
       return (
            <Link to={props.link}> 
            <SecondaryButton>{props.name}</SecondaryButton>
            </Link>
       )
}

export default Button;