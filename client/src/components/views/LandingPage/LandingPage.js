import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage() {

  useEffect(() => {
    axios
      .get('/api/hello')
      .catch(err => console.error(err))
      .then(res => console.log(res));
  }, []);

  return <div>landing Page</div>;
}

export default LandingPage;
