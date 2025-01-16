import { User } from "@/class/User";
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type UserContextType = User | undefined;
type UserDispatchContextType = Dispatch<SetStateAction<User | undefined>> | undefined;

const UserContext = createContext<UserContextType>(undefined);
const UserDispatchContext = createContext<UserDispatchContextType>(undefined);

function UserProvider({ children }: { children: ReactNode }) {
  const [userDetails, setUserDetails] = useState<User | undefined>(undefined);

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };
