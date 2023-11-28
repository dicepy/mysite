import styled from "styled-components";
import colors from "../../Global/colors";

const TechsContainer = styled.div`
  width: 100%;
  background: linear-gradient(to left, ${colors.main}, ${colors.accent});
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
    `

export default TechsContainer