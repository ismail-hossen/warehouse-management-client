import React from "react";
import { Button} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, googleError] = useSignInWithGoogle(auth);
  
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state ? location.state.from?.pathname : "/";

  if (loading) {
    return <h1>loading...</h1>
}
  if (user) {
    navigate(from, { replace: true });
}

  return (
    <div>
      <Button variant="primary" onClick={() => signInWithGoogle()}>Google</Button>
    </div>
  );
};

export default Login;
