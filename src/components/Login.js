import { useContext } from "react";
import UserContext from "../context/UserContext.js";

const Input = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="mt-2 p-2 border rounded"
  />
);

export const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const handleNameChange = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  return (
    <div className="mt-56 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <span>{user.name}</span>
        <span>{user.email}</span>
        <Input
          type="text"
          placeholder="Type Name Here"
          value={user.name}
          onChange={handleNameChange}
        />
        <Input
          type="text"
          placeholder="Type Email Here"
          value={user.email}
          onChange={handleEmailChange}
        />
      </div>
    </div>
  );
};

export default Login;
