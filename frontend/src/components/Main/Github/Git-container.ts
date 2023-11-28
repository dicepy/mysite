import styled from "styled-components";
import colors from "../../Global/colors";

const GitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 20px;
  padding: 20px;
  background-color: ${colors.back};
  border-radius: 20px;
  box-shadow: 0 0 10px ${colors.main};
  
  img{
    height: 300px;
    filter: drop-shadow(0px 0px 10px ${colors.main});
  }
  
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 3rem;
    color: ${colors.main};
  }
    `

export default GitContainer