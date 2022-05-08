import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state ? location.state.from?.pathname : "/";

  const [check, setCheck] = useState(false);
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  const [signInWithEmail, user2, loading2] =
    useSignInWithEmailAndPassword(auth);
  const [createUserWithEmailAndPassword, user3, loading3] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [sendPasswordResetEmail, loading4] = useSendPasswordResetEmail(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // first click the checkbox for create account then login to access all user Credentials
  const onSubmit = (data) => {
    setEmail(data.email);
    if (check === true) {
      createUserWithEmailAndPassword(data.email, data.password);
    } else {
      signInWithEmail(data.email, data.password);
      fetch("  http://localhost:8080/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      }).then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson ? await response.json() : null;
        const myData = JSON.parse(JSON.stringify(data, null, 4));
        localStorage.setItem("accessToken", myData.token);
      });
    }
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent Reset email");
    } else {
      toast.warn(
        "provide email and password then try to login then try reset button"
      );
    }
  };

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

  if (loading || loading2 || loading3 || loading4) {
    return (
      <div className="container d-flex justify-content-center">
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="lg"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    );
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

        {check ? (
          ""
        ) : (
          <p>
            Forget Password? <span onClick={resetPassword}>Reset Password</span>{" "}
          </p>
        )}
      </span>
      <ToastContainer />
      <br />
      <Button variant="primary" onClick={() => signInWithGoogle()}>
        Google
      </Button>
    </div>
  );
};

export default Login;
