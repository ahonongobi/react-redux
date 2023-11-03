import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions";

const Login = () => {
  const [userData, setUserData] = useState({}); // Utilisation de useState pour initialiser l'état local

  const dispatch = useDispatch();
  const signupState = useSelector((state) => state.login);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>

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
      {signupState.success && <p>Connexion réussie !</p>}
    </div>
  );
};

export default Login;
