import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { FormInput } from '../../components/FormInput/FormInput';
import { TextArea } from '../../components/TextArea/TextArea';
import './Contact.css';

const Contact = () => {
  const [contact, setContact] = useState({
    data: {
      fullname: '',
      email: '',
      message: '',
    },
  });

  const { fullname, email, message } = contact.data;

  const onChange = (e) => {
    const { name, value } = e.target;
    const { data } = contact;
    setContact({
      data: {
        ...data,
        [name]: value,
      },
    });
  };

  console.log(contact.data);

  return (
    <div className='app__contact' id='contact'>
      <div className='app__contact-form'>
        <FormInput
          name='fullname'
          label='Full name'
          placeholder='Enter your full name'
          value={fullname}
          onChange={onChange}
        />
        <FormInput
          name='email'
          label='email'
          placeholder='Enter your email'
          value={email}
          onChange={onChange}
        />
        <TextArea
          name='message'
          label='message'
          placeholder='Enter your message'
          value={message}
          onChange={onChange}
        />
        <Button
          className='btn btn-primary'
          label='send message →'
          disabled={!fullname || !email || !message}
        />
      </div>
    </div>
  );
};

export default Contact;
