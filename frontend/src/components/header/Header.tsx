import React from 'react';
import styled from 'styled-components';
import colors from "../UI/colors";

const Container = styled.div`
  color: ${colors.back};
  background-color: ${colors.main};
  height: 80px;
  
`

const Header:React.FC = () => {
    return (
        <Container>

        </Container>
    )
};

export default Header;