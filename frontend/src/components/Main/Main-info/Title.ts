import styled from "styled-components";
interface TitleProps {
    size?: string;
}

const Title = styled.h1<TitleProps>`
  font-size: ${(props) => props.size || '3rem'}; // Default to 16px if size is not provided
  font-weight: bold;
`;

export default Title