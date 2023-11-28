import styled from "styled-components";
import colors from "../Global/colors";

interface HeaderProps {
    active: boolean;
}

const HeaderElement = styled.div<HeaderProps>`
  color: ${({ active }) => (active ? colors.main : colors.back)};
  padding: 10px;
  font-weight: 500;
  transition: opacity 0.3s ease, color 0.3s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

export default HeaderElement;
