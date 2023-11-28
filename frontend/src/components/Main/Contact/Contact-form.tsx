import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import colors from "../../Global/colors";


const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.main};
  padding: 20px;
  color: ${colors.back};
  border-radius: 20px;
  box-shadow: 0 0 10px ${colors.main};
`;



const Form = styled.form`
  display: flex;
  flex-direction: column;
  
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: ${colors.main};
  box-shadow: 0 0 5px ${colors.back};
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
  font-size: 1rem;
  border: none;
  outline: none;
  color: ${colors.main};
  box-shadow: 0 0 5px ${colors.back};
`;

const FormButton = styled.button`
  padding: 10px;
  font-size: 1.5rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  color: ${colors.main};
  box-shadow: 0 0 5px ${colors.back};
  transition: opacity 0.5s ease;
  &:hover{
    opacity: 0.8;
  }
`;
const ContactHeader = styled.h2`
    margin-bottom: 20px;
  font-size: 3rem;
`;

const ContactForm = () => {
    const [name, setName] = useState('');
    const [contacts, setContacts] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Отправка данных на бекенд
        try {
            await axios.post('http://localhost:4444/telegram-bot', {
                text: `Имя: ${name}\nEmail: ${contacts}\nСообщение: ${message}`,
            });

            // Очистка полей после успешной отправки
            setName('');
            setContacts('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <ContactFormWrapper>
            <ContactHeader>Оставьте сообщение</ContactHeader>
            <Form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <FormInput
                    type="email"
                    placeholder="Ваши контакты для ответа"
                    value={contacts}
                    onChange={(e) => setContacts(e.target.value)}
                />
                <FormTextarea
                    placeholder="Ваше сообщение"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <FormButton type="submit">Отправить</FormButton>
            </Form>
        </ContactFormWrapper>
        )

}

export default ContactForm;