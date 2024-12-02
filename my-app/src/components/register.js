import { useState } from "react";
import { useAuth } from './hooks/AuthProvider';

const Register = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "" && input.confirmPasswordv !== "") {
      console.log(input);
      if (input.password !== input.confirmPassword) {
        alert("passwords do not match");
        return;
      }
      const req = { username: input.username, password: input.password };
      auth.registerAction(req);
      return;
    }
    alert("please provide a valid input");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id="register-form">
      <h2>Register for aura.</h2>
    <form onSubmit={handleSubmitEvent}>
      <div className="form_control">
        <label htmlFor="user-email">Email:</label>
        <input
          type="email"
          id="user-email"
          name="username"
          placeholder="example@yahoo.com"
          aria-describedby="user-email"
          aria-invalid="false"
          onChange={handleInput}
        />
        <div id="user-email" className="sr-only">
          Please enter a valid username. It must contain at least 6 characters.
        </div>
      </div>
      <div className="form_control">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          aria-describedby="user-password"
          aria-invalid="false"
          onChange={handleInput}
        />
        <div id="user-password" className="sr-only">
          your password should be more than 6 character
        </div>
      </div>
      <div className="form_control">
        <label htmlFor="confirm-password">Confirm password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          aria-describedby="user-password"
          aria-invalid="false"
          onChange={handleInput}
        />
        <div id="confirm-password" className="sr-only">
          your password should be more than 6 character
        </div>
      </div>
      <button className="btn-submit">Submit</button>
      <div>
        <a href="/login">Already have an account? Login here.</a>
      </div>
    </form>
    </div>
  );
};

export default Register;