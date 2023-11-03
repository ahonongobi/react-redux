import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUsers } from '../store/actions'

const UserList = () => {
   const dispatch = useDispatch()
   const {loading, users, error} = useSelector(state => state.users)

   useEffect(()=>{
    dispatch(fetchUsers())
   }, [dispatch]);


   return(
    <div>
        {loading && <p>chargement en cours</p>}
        {error && <p>Erreur: {error}</p>}

        <ul>
            {users.length > 0 ? (
               users.map(user => (
                  <li key={user.id}>{user.name}</li>
               ))
            ) : (
               !loading && <p>Aucun utilisateur trouvé</p>
            )}
         </ul>
    </div>
   )

}

export default UserList
