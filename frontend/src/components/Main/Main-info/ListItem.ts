import styled from "styled-components";
import colors from "../../Global/colors";

const ListItem = styled.li`
  margin: 8px 0;
  font-size: 3rem;
  color: ${colors.back};
  @media(max-width: 1280px){
    font-size: 1.5rem;
  }
  @media(max-width: 768px){
    font-size: 0.75rem;
  }
`;


export default ListItem;