import styled from "styled-components";
import colors from "../Global/colors";
interface TitleProps {
    size?: string;
    color?:string;
    align?:string;
}

const SubTitle = styled.h1<TitleProps>`
  color: ${(props) => props.color || colors.main };
  font-size: ${(props) => props.size || '3rem'}; 
  font-weight: bold;
  width: 100%;
  padding: 20px 0;
  text-align: ${(props) => props.align ||  'start'};
  @media(max-width: 1280px){
    font-size: 1.5rem;
  }
`;

export default SubTitle