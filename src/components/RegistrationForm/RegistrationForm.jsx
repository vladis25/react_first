import React, { useState } from 'react';

import Button from '../Button';
import './registrationForm.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    age: '',
  });
  

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    for (const key in formData) {
      if (formData[key] === '') {
        setError(`Поле "${key}" не може бути порожнім.`);
        return;
      }
    }

    console.log('Дані користувача:', formData);

    setError('');
  };

  return (
    <div className='form'>
      <div>
        <label>Email: 
          <input label="" placeholder="Email" type="email" value={formData.email} onChangeFunction={handleInputChange} />
        </label>
      </div>
      <div>
        <label>Ім'я користувача:
          <input label="" placeholder="name user" type="text" value={formData.userName} onChangeFunction={handleInputChange} />
        </label>
      </div>
      <div>
        <label>Пароль: 
          <input label="" placeholder="password" type="password" value={formData.password} onChangeFunction={handleInputChange} />
        </label>
      </div>
      <div>
        <label>Вік:
          <input label=" " placeholder="age" type="number" value={formData.age} onChangeFunction={handleInputChange} />
        </label>
      </div>
      <Button variant="primary" onClick={handleSubmit}>Відправити</Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RegistrationForm;