import React, { useState } from 'react';

function LoginPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = e => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type='email' value={email} onChange={onEmailHandler} />
        <label>PW</label>
        <input type='password' value={password} onChange={onPasswordHandler} />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
