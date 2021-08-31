import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage() {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/hello')
      .catch(err => console.error(err))
      .then(res => console.log(res.data));
  }, []);

  return <div>Landing Page</div>;
}

export default LandingPage;
