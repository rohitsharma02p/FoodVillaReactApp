import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Rohit",
    email: "rohit@radiansys.com",
  },
});

UserContext.displayName = "UserContext";
export default UserContext;
