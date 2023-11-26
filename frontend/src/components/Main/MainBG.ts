import styled, {keyframes} from 'styled-components';
import clouds from '../../images/clouds.png'

const Animation = keyframes`
  0%{
    filter: blur(0px) invert(0%);
  }
  50%{
    filter: blur(10px) invert(5%);
    transform: scale(1.05);
  }
  100%{
    filter: blur(0px) invert(0%);
  }
`

const MainBG = styled.div`
  z-index: -1;
  position: fixed;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.2), rgba(155, 89, 182, 0.2), rgba(231, 76, 60, 0.2)),
  url(${clouds}) center/cover no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Animation} 4s infinite linear;
`;

export default MainBG;
