import { useState } from "react";
import Button from "../../components/button";
import TextInput from "../../components/textInput";
import styles from "./login.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Manual Validator to enable submit button
  const isDisabled = email === "" || password === "";

  return (
    <div className={styles.container}>
      <h4>Login Page</h4>
      <TextInput
        label="Email"
        type="email"
        value={email}
        onValueChange={(value) => setEmail(value)}
        placeholder="youremail@domain.com"
      />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onValueChange={(value) => setPassword(value)}
      />
      <Button disabled={isDisabled}>Login</Button>{" "}
      <Button variant="secondary">Forgot Password</Button>
    </div>
  );
};

export default LoginPage;
