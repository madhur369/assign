import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Retrieve the authenticated user's ID from the API or authentication context
    // const getAuthenticatedUserId = async () => {
    //   try {
    //     // Make a request to your authentication API or fetch the user data from your authentication context
    //     const response = await fetch('https://63fead88370fe830d9d71604.mockapi.io/formData', {
    //       method: 'GET',
    //       headers: {
    //         // Include any necessary headers or authentication tokens
    //       },
    //     });

    //     if (response.ok) {
    //       const data = await response.json();
    //       const authenticatedUserId = data.userId;

    //       // Update the authenticated user's ID and authentication state
    //       setUserId(authenticatedUserId);
    //       setIsAuthenticated(true);
    //     } else {
    //       // Handle error response
    //       console.error('Error retrieving authenticated user ID');
    //     }
    //   } catch (error) {
    //     // Handle network or fetch error
    //     console.error('Error:', error);
    //   }
    // };
    // getAuthenticatedUserId();

    // Retrieve the user's ID from the API
    const fetchUser = async () => {
      try {
        const response = await fetch('https://63fead88370fe830d9d71604.mockapi.io/formData');
        if (response.ok) {
          const userData = await response.json();

          // Find the user with matching ID
          const user = userData.find((user) => user.id === userId);

          if (user) {
            // User found, update the user ID and authentication state
            setIsAuthenticated(true);
          }
        } else {
          console.error('Error retrieving user data');
          // Handle error response
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle network or fetch error
      }
    };

    fetchUser();
  }, [userId]);

  const handleLogout = () => {
    // Update the authentication state to false
    setIsAuthenticated(false);
    // Redirect to the home page
    window.location.href = '/';
  };

  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li> <Link to="/signup">Sign Up</Link></li>
            <li>
                  <Link to="/signin">Sign In</Link>
            </li>
          </ul>
          <button>
            <Link to="/buy">Buy Now</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
