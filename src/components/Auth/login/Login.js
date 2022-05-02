import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  const [signInWithEmail, user2, loading2] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmail(data.email, data.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state ? location.state.from?.pathname : "/";

  if (loading || loading2) {
    return <h1>loading...</h1>;
  }
  if (user || user2) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}

        <input
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>

      <Button variant="primary" onClick={() => signInWithGoogle()}>
        Google
      </Button>
    </div>
  );
};

export default Login;
