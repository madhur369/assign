import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Perform a GET request to retrieve user data from the API
    try {
      const response = await fetch('https://63fead88370fe830d9d71604.mockapi.io/formData');
      if (!response.ok) {
        setError('Error retrieving user data');
        return;
      }

      const userData = await response.json();

      // Find the user with matching email and password
      const user = userData.find((user) => user.email === email && user.password === password);

      if (user) {
        // Authentication successful, navigate to the home page
        console.log('Login successful');
        // Replace the line below with your desired navigation logic
        window.location.href = '/dashboard';
      } else {
        // Authentication failed, display an error message
        setError('Invalid email or password');
      }
    } catch (error) {
      console.log('Error:', error);
      setError('Error retrieving user data');
    }

    // Clear form fields after submission
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="login">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit">Sign In</button>
          </form>
          <div>
            Don't have an account? <a href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
