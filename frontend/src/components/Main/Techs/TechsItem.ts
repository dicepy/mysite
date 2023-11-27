import styled from "styled-components";
import colors from "../../Global/colors";

const TechsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  padding: 20px;
  margin: 10px;
  background-color: ${colors.back};
  color: ${colors.main};
  border-radius: 20px;
  width: 20%;
  box-shadow: 0 0 10px ${colors.back};
  min-width: 200px;
  min-height: 200px;
  img {
    width: 50%;
    margin: 20px;
  }
    `

export default TechsItem