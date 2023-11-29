import styled from 'styled-components';


const MainWrapper = styled.main`
   display: flex;
   flex-direction: column;
   justify-content: center;
   max-width: 1280px;
   margin: 60px auto;
   margin-bottom: 20px;
   align-items: center;
   @media(max-width: 1280px){
      padding: 20px;
      margin-bottom: 0;
   }
   `

export default MainWrapper