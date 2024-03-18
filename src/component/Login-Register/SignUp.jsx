import { useState } from "react";
import { registerUser } from "../../fetchFunctions";

function SignUp(props) {
  // eslint-disable-next-line react/prop-types
  const { loginUser } = props;
  const { showNotif } = props;

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    lastname: "",
    username: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const { name, email, password, lastname, username } = state;

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }

    registerUser(state).then((data) => {
      if (data) {
        setTimeout(() => {
          setIsLoading(false);
          loginUser();
          showNotif();
        }, 3000);
      } else {
        setIsLoading(false);
      }
    });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="lastname"
          value={state.lastname}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {isLoading ? <div className="dots"></div> : <button>Sign Up</button>}
      </form>
    </div>
  );
}

export default SignUp;
