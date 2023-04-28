const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  const planner = async () => {
    const response = await fetch('/api/planner', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/api/planner');
    } else {
      alert(response.statusText);
    }
  };

  
  document.querySelector('#logout').addEventListener('click', logout);

  // document.querySelector('#btn-playlist').addEventListener('click', playlist);