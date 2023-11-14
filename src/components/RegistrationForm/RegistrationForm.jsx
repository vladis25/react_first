import React, { useState } from 'react';

import './registrationForm.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    userName: '',
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
      <h2>Форма реєстрації</h2>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>
      <div>
        <label>Ім'я користувача:</label>
        <input type="text" name="userName" value={formData.userName} onChange={handleInputChange} />
      </div>
      <div>
        <label>Пароль:</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </div>
      <div>
        <label>Вік:</label>
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
      </div>
      <button onClick={handleSubmit}>Відправити</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RegistrationForm;