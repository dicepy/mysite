import styled from 'styled-components';
import colors from "../Global/colors";

const HeaderContainer = styled.div`
  background: linear-gradient(to right, ${colors.main}, ${colors.accent});
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding-right: 20px;
  box-shadow: 0 0 10px ${colors.main};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

export default HeaderContainer