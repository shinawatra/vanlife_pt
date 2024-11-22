import { Navigate, redirect } from 'react-router-dom';

export default function RequiredAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    throw redirect('/login?message=You must log in first.');
  }

  return null;
}
