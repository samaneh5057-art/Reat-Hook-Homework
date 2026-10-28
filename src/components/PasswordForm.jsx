
import { useState } from "react";

function PasswordForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="card">
      <h2>Login Form</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          required
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default PasswordForm;
