import styled from 'styled-components';


const MainWrapper = styled.main`
   display: flex;
   flex-direction: column;
   justify-content: center;
   max-width: 1280px;
   margin: 20px auto;
   align-items: center;
   @media(max-width: 1280px){
      margin: 20px;
   }
   `

export default MainWrapper