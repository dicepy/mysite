import styled from "styled-components";
import colors from "../../Global/colors";


const List = styled.ul`
  list-style: none;
  margin: 0;
  background-color: ${colors.main};
  padding: 0 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  box-shadow: 0 0 10px ${colors.main};
`;

export default List;