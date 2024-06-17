import Login from '@/components/Login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page',
};

const LoginPage = () => {
  return (
    <Login />
  );
};

export default LoginPage;
