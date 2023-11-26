import styled from "styled-components";
import colors from "../Global/colors";
interface TitleProps {
    size?: string;
}

const SubTitle = styled.h1<TitleProps>`
  color: ${colors.main};
  font-size: ${(props) => props.size || '3rem'}; // Default to 16px if size is not provided
  font-weight: bold;
  width: 100%;
  padding: 20px 0;
`;

export default SubTitle