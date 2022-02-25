import React from "react";

export const Tache = ({ tache, del, edit }) => {
  return (
    <tr onDoubleClick={() => edit(tache.id)} className="">
      <td>{tache.id}</td>
      <td>{tache.nom} </td>
      <td><div className="row">
      {tache.etat=== 'terminé' ? (
       <div className="text-success" role="alert">
         terminé
       </div>
      ) :<div className="text-danger" role="alert">
      en cours
    </div>}
    </div></td>
      <td> {tache.user}</td>
      <td>
        <button
          onClick={() => del(tache.id)}
          className="ms-auto btn btn-danger"
        >
          <i className="fa fa-trash"></i>
        </button>
        <button className="btn btn-primary" onClick={() => edit(tache.id)}>
        <i className="fa fa-edit"></i>
        </button>
      </td>
     
     
    </tr>
  );
};
