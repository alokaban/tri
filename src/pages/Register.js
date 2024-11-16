import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, referralCode }),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Имя пользователя"
        required
      />
      <input
        type="text"
        value={referralCode}
        onChange={(e) => setReferralCode(e.target.value)}
        placeholder="Реферальный код"
        required
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Register;
