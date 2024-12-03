/** @format */

import React from "react";

const Welcome = () => {
  return (
    <form action="#" className="welcome">
      <h1>Welcome to HDC</h1>
      <p>
        Where numbers meet clarity and success. We’re dedicated to simplifying
        your financial journey with expert accounting solutions tailored to your
        needs.
      </p>
      <p>
        From managing business accounts to organizing personal finances, our
        team ensures accuracy, reliability, and peace of mind every step of the
        way. Your success is our priority—let’s build it together!
      </p>
      <div className="welcome-links">
              <a href="/login" className="login">Login</a>
      <a href="/signup" className="signup">Sign-Up</a>
      </div>

    </form>
  );
};

export default Welcome;
