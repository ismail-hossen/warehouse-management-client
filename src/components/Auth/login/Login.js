import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [check, setCheck] = useState(false);
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  const [signInWithEmail, user2, loading2] =
    useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword, user3, loading3] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (check) {
      createUserWithEmailAndPassword(data.email, data.password);
    } else {
      signInWithEmail(data.email, data.password);
      fetch("http://localhost:8080/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      })
        .then((data) => data.json())
        .then((res) => {
          localStorage.setItem("accessToken", res.token);
        });
    }
  };

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state ? location.state.from?.pathname : "/";

  if (loading || loading2 || loading3) {
    return <h1>loading...</h1>;
  }
  if (user || user2 || user3) {
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
        <input type="submit" value={check ? "SignUp" : "Login"} />
      </form>

      <span>
        {check
          ? "Alredy have account? Login here!"
          : "Haven't account? please click here to signup!"}
        <input type="checkbox" onChange={(e) => handleCheck(e)} />
      </span>
      <br />
      <Button variant="primary" onClick={() => signInWithGoogle()}>
        Google
      </Button>
    </div>
  );
};

export default Login;
