import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage() {
  useEffect(() => {
    axios
      .get('/api/hello')
      .catch(err => console.error(err))
      .then(res => console.log(res));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
      }}>
        <h1>시작 페이지 </h1>
    </div>
  );
}

export default LandingPage;
