import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/actions";

const Signup = () => {
  const [userData, setUserData] = useState({}); // Utilisation de useState pour initialiser l'état local

  const dispatch = useDispatch();
  const signupState = useSelector((state) => state.signup);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(userData));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* Créez des champs pour collecter les données utilisateur */}
        <input
          type="text"
          name="username"
          onChange={(e) =>
            setUserData({ ...userData, username: e.target.value })
          }
        />
        <input
          type="email"
          name="email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button type="submit">Signup</button>
      </form>

      {/* Affichez un message basé sur les états du store */}
      {signupState.loading && <p>En cours...</p>}
      {signupState.error && <p>Erreur: {signupState.error}</p>}
      {signupState.success && <p>Inscription réussie !</p>}
    </div>
  );
};

export default Signup;
