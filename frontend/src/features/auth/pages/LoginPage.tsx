import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";


export function LoginPage() {

  const [email, setEmail] =
    useState("");

  const [error, setError] =
    useState("");

  const {
    signIn,
  } = useAuth();


  const navigate =
    useNavigate();



  function handleLogin() {

    const success =
      signIn(email);


    if (!success) {

      setError(
        "User not found"
      );

      return;

    }


    navigate("/dashboard");

  }



  return (
    <div className="
      flex
      min-h-screen
      items-center
      justify-center
    ">


      <div className="
        w-full
        max-w-md
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-8
      ">


        <h1 className="
          text-3xl
          font-bold
          text-white
        ">
          Cloud Academy Login
        </h1>


        <p className="
          mt-2
          text-slate-400
        ">
          Enter your account email
        </p>


        <input
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Email"
          className="
            mt-6
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-950
            px-4
            py-3
            text-white
          "
        />


        {error && (
          <p className="
            mt-3
            text-red-400
          ">
            {error}
          </p>
        )}


        <button
          onClick={handleLogin}
          className="
            mt-6
            w-full
            rounded-lg
            bg-orange-500
            px-5
            py-3
            font-medium
            text-slate-950
          "
        >
          Login
        </button>


        <div className="
          mt-6
          text-sm
          text-slate-400
        ">

          <p>
            Instructor:
          </p>

          <p>
            dominic@cloudacademy.com
          </p>


          <p className="mt-3">
            Student:
          </p>

          <p>
            john@student.com
          </p>

        </div>


      </div>


    </div>
  );
}