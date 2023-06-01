import React, { useState } from 'react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!name || !email || !password) {
      setError('Please enter all required fields');
      return;
    }

    const formData = {
      name,
      email,
      password,
      rememberMe,
    };

    try {
      const response = await fetch('https://63fead88370fe830d9d71604.mockapi.io/formData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful signup, navigate to the login page
        console.log('Signup successful');
        // Replace the line below with your desired navigation logic
        window.location.href = '/signin';
      } else {
        // Handle error response
        setError('Signup failed');
      }
    } catch (error) {
      // Handle network or fetch error
      console.error('Error:', error);
      setError('Error occurred during signup');
    }

    // Clear form fields after submission
    setName('');
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  const handleSocialMediaLogin = (provider) => {
    // Handle social media login here
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="main">
      <div className="container">
        <div className="signup">
          <h2>Sign Up</h2>
          <p>Register with</p>
          <div className="socialmedia">
            <button onClick={() => handleSocialMediaLogin('Facebook')}>Facebook</button>
            <button onClick={() => handleSocialMediaLogin('Apple')}>Apple</button>
            <button onClick={() => handleSocialMediaLogin('Google')}>Google</button>
          </div>
          <span>or</span>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <button type="submit">Sign Up</button>
          </form>
          <div>
            Already have an account? <a href="/signin
">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
