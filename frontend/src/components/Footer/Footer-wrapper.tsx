import styled from "styled-components";
import colors from "../Global/colors";

const FooterWrapper = styled.div`
  background: linear-gradient(to right, ${colors.main}, ${colors.accent});
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  box-shadow: 0 0 10px ${colors.main};
  position: relative;
  width: 100%;
  color: ${colors.back};
  font-size: 1rem;
  text-align: center;
    `;

export default FooterWrapper;