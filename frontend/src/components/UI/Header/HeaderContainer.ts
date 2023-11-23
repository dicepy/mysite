import styled from 'styled-components';
import colors from "../colors";

const HeaderContainer = styled.div`
  background: linear-gradient(to right, ${colors.main}, ${colors.accent});
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding-right: 20px;
  box-shadow: 0 0 10px ${colors.main};
`

export default HeaderContainer