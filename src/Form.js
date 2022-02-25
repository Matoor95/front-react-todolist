import React from "react";

export const Form = ({tacheform,add,settacheform,editing}) => {
  return (
    <form>
      <div className="m-3 col-md-6">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Nom tâche
        </label>
        <input type="text" className="form-control" value={tacheform.nom} onChange={(e)=>settacheform({...tacheform,nom:e.target.value})}  placeholder="entrer la tâche" />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Etat 
        </label>
        <input type="text" className="form-control" value={tacheform.etat} onChange={(e)=>settacheform({...tacheform,etat:e.target.value})}  placeholder="entrer etat" />
        <label htmlFor="exampleInputEmail1" className="form-label">
          user
        </label>
        <input type="text" className="form-control" value={tacheform.user} onChange={(e)=>settacheform({...tacheform,user:e.target.value})} placeholder="nom de l'utilisateur"  />
        <div className=" form-row text-center ">
        <button type="button" className="btn btn-primary m-3" onClick={add} >{!editing? "Ajouter":"Modifier"}</button>

        </div>
      </div>
    </form>
  );
};