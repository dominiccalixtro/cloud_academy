import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { User } from "../types";

import {
  getCurrentUser,
  login,
  logout,
} from "../services/auth.service";


interface AuthContextType {

  user: User | null;

  signIn:
    (
      email: string
    ) => boolean;

  signOut:
    () => void;

}



const AuthContext =
  createContext<AuthContextType | undefined>(
    undefined
  );



export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {


  const [user, setUser] =
    useState<User | null>(
      getCurrentUser()
    );



  function signIn(
    email: string
  ) {


    const loggedUser =
      login(email);


    if (!loggedUser) {
      return false;
    }


    setUser(loggedUser);


    return true;

  }



  function signOut() {

    logout();

    setUser(null);

  }



  return (

    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}



export function useAuth() {

  const context =
    useContext(AuthContext);


  if (!context) {

    throw new Error(
      "useAuth must be used inside AuthProvider"
    );

  }


  return context;

}