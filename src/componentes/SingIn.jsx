import React from "react";
import { useContext } from "react";
import { ContextSAQ } from "./context/ProcedimientoContext";

function SingIn() {
  const { sinfInWithGoogle } = useContext(ContextSAQ);
  return (
    <div>
      <h1>SingIn</h1>
      <button
        onClick={() => {
          sinfInWithGoogle();
        }}
      >
        Sing In
      </button>
    </div>
  );
}

export default SingIn;
