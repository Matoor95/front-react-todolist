import React from 'react';
import { Tache } from './Tache';

export const Liste = ({taches,del,edit,compter}) => {
  return <div>
    
<table className='table'>
  <thead>
  <tr>
          <th>id</th>
          <th>tache</th>
          <th>etat</th>
          <th>user</th>
          <th>Action</th>
        </tr>
  </thead>
  <tbody>
    { 
    taches.map(t=><Tache tache={t} del={del} edit={edit} key={t.id}/>)
    }
  

   </tbody>
</table>


  </div>;
};