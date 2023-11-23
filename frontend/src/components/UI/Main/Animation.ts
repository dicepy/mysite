import {keyframes} from "styled-components";

const lagAnimation = keyframes`
  0% {
    transform: translate(0%,0%);
  }
  2%{
    transform: translate(10%,5%);
  }
  4%{
    transform: translate(0%,0%);
  }
  10%{
    transform: translate(0%,0%);
  }
  12%{
    transform: rotateX(30deg);
    transform: translate(5%,5%);
  }
  14%{
    transform: rotateX(50deg);
  }
  16%{
    transform: rotateX(0deg);
  }
  25% {
    transform: translate(0%,0%);
  }
  28%{
    transform: translate(10%,5%);
  }
  31%{
    transform: translate(1%,5%);
  }
  33%{
    transform: translate(7%,80%);
  }
  35%{
    transform: rotateX(30deg);
    transform: translate(5%,5%);
  }
  50%{
    transform: rotateX(50deg);
  }
  55%{
    transform: rotateX(0deg);
  }
`;

export default lagAnimation;