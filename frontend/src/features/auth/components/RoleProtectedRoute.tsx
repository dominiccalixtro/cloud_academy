import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";


interface Props {

  children:ReactNode;

  role:
    "student"
    |
    "instructor";

}



export function RoleProtectedRoute({
  children,
  role
}:Props){


const {
  user
}=useAuth();



if(!user){

  return (
    <Navigate
      to="/login"
      replace
    />
  );

}



if(user.role !== role){

  return (

    <Navigate

      to="/dashboard"

      replace

    />

  );

}



return children;


}