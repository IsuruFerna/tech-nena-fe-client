import { useState } from "react";
import { loginUser } from "../../fetchFunctions";

function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const login = () => {
    setIsLoading(true);
    loginUser(state).then((res) => {
      if (res) {
        console.log(res);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = state;

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }

    login();
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        {isLoading ? <div className="dots"></div> : <button>Sign In</button>}
      </form>
    </div>
  );
}

export default SignIn;
