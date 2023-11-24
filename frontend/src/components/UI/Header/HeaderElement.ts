import styled from "styled-components";
import colors from "../colors";

const HeaderElement = styled.div`
    color: ${colors.back};
    padding: 10px;
    font-weight: 500;
    transition: opacity 0.3s ease;
    cursor: pointer;
    &:hover{
      opacity: 0.75;
    }
`

export default HeaderElement