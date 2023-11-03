# Processus d'Inscription d'Utilisateurs avec Redux

Ce guide décrit comment gérer le processus d'inscription des utilisateurs en utilisant Redux dans une application React.

## Actions

Créez des actions pour gérer les différentes étapes du processus d'inscription des utilisateurs. Ces actions incluent la demande d'inscription, la réussite de l'inscription et l'échec de l'inscription.

### signupActions.js

```javascript
// Action Types
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// Action Creators
export const signupRequest = () => ({ type: SIGNUP_REQUEST });
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
export const signupFailure = error => ({ type: SIGNUP_FAILURE, payload: error });
```

## Reducers

Définissez des reducers pour mettre à jour l'état global associé à l'inscription des utilisateurs.

### signupReducer.js

```javascript

import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './signupActions';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case SIGNUP_SUCCESS:
      return { ...state, loading: false, success: true, error: null };
    case SIGNUP_FAILURE:
      return { ...state, loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export default signupReducer;
```

## Intégration dans le Root Reducer

Ajoutez le reducer d'inscription dans le rootReducer pour gérer l'état global de l'application.

### rootReducer.js

```javascript
import { combineReducers } from 'redux';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
  // ...autres reducers
  signup: signupReducer, // Ajout du reducer de l'inscription dans le rootReducer
});

export default rootReducer;
```

### Utilisation dans un Composant

Utilisez les actions et le state Redux pour gérer l'interface utilisateur et les actions liées à l'inscription des utilisateurs.

### SignupComponent.js

```javascript
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupRequest, signupSuccess, signupFailure } from './signupActions'; // Import des actions

const SignupComponent = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(state => state.signup);

  const handleSignup = async () => {
    dispatch(signupRequest());

    try {
      // Logique d'inscription ici, par exemple appel à une API
      // Si l'inscription est réussie :
      dispatch(signupSuccess());
    } catch (err) {
      dispatch(signupFailure(err.message)); // En cas d'échec avec un message d'erreur
    }
  };

  return (
    <div>
      {loading && <p>Chargement en cours...</p>}
      {error && <p>Erreur : {error}</p>}
      {success && <p>Inscription réussie !</p>}
      <button onClick={handleSignup}>S'inscrire</button>
    </div>
  );
};

export default SignupComponent;
```