import styled from "styled-components";


const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 20px;
  @media(max-width: 768px){
    flex-direction: column;
    align-items: start;
  }
`;

export default ContactWrapper
