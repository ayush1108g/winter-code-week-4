import React, { useState } from 'react';
import Modal from './../UI/Modal'
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, for instance, sending data to a server
    console.log('Form submitted:', formData);
  };

  return (
    <Modal>
      <h2>Sign Up</h2>
      
    </Modal>
  );
};

export default SignUpForm;
