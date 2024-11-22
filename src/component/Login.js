import { useState } from 'react';
import { Form, useLoaderData, useNavigation } from 'react-router-dom';

export function action({ request }) {
  const formData = request.formData();
  const email = formData.get('email');
  const pass = formData.get('password');
  return null;
}

export function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const msg = useLoaderData();

  const nav = useNavigation();

  return (
    <Form className="login-form">
      {msg && (
        <h3 style={{ color: 'red', textAlign: 'center', marginBottom: '2px' }}>
          {msg}
        </h3>
      )}
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Enter password" name="password" />
      <button disabled={nav.state === 'loading'}>
        {nav.state === 'loading' ? 'Logging In...' : 'Log In'}
      </button>
    </Form>
  );
}
