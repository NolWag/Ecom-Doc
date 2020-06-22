import React from "react"
import styled from '@emotion/styled-base';

const MinHeightContainer = styled('div')`
    min-height: 25vh;
`

const NavContainer = ({ children }) => (
    <MinHeightContainer>
        {children}
    </MinHeightContainer>
)

export default NavContainer