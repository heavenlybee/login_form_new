import React, { useState } from 'react';
import * as Components from './Components';

function FormLogin() {
  const [signIn, setSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleToggle = () => {
    setSignIn(!signIn);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform password validation or make server request here
    if (password.length < 6) {
      setError('Password should be at least 6 characters long');
      return;
    }

    // Make server request here using email and password

    // Reset form fields
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type='text'
            placeholder='Name'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Components.Input
            type='email'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Components.Input
            type='password'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleSubmit}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            type='email'
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Components.Input
            type='password'
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
          <Components.Button>Sigin In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To access the services of the collage office please login here
            </Components.Paragraph>
            <Components.GhostButton onClick={handleToggle}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Student!</Components.Title>
            <Components.Paragraph>
              Enter the details to create your own account
            </Components.Paragraph>
            <Components.GhostButton onClick={handleToggle}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default FormLogin;
