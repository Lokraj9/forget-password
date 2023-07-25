import React from 'react';
import Signin from '@/components/Auth/SignIn';

const SignInPage = ({ searchParams }) => {
  // Check if searchParams is defined and has the callbackUrl property
  const callbackUrl = searchParams?.callbackUrl || "/";

  return (
    <Signin callbackUrl={callbackUrl} />
  );
}

export default SignInPage;
