import React, {useEffect} from 'react';
import styled from 'styled-components';
import ContactWrapper from "./Main/Contact/Contact-wrapper";
import ContactForm from "./Main/Contact/Contact-form";
import colors from "./Global/colors";
import {useStore} from "../Store";
import {useInView} from "react-intersection-observer";

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.5rem;
  color: ${colors.main};
  
`;
const ContactHeader = styled.h2`
  font-size: 3rem;
`;



const Contact: React.FC = () => {
    const { setActiveElement } = useStore();
    const { ref, inView, entry} = useInView({
        /* Optional options */
        threshold: 1,
    });

    useEffect(() => {
        if (entry) {
            if (entry.isIntersecting) {
                setActiveElement("contacts");
            }
        }
    }, [inView]);
    return (
        <ContactWrapper id="contacts" ref={ref}>
            <ContactDetails>
                <ContactHeader>Связаться со мной</ContactHeader>
                <p>Telegram: @Deniisus</p>
                <p>Mail: mdi.2005@mail.ru</p>
                <p>Номер: +79824750308</p>
            </ContactDetails>
            <ContactForm/>
        </ContactWrapper>
    );
};

export default Contact;
