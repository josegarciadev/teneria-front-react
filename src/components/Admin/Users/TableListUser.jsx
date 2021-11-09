import React from "react";
import { Table } from "reactstrap";
import moment from 'moment'
import { ModalEditUser,ModalDelete } from ".";

const TableListUser = ({users,handleDispatch}) => {
  const handleChangeTime = (date)=>{
   return moment(date).format("ll");
  }
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Creado</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Estatus</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
         
         {
           users.length>=1 ? users.map((user,index)=>{
            return(
              <tr key={index}>
              <th scope="row">{handleChangeTime(user.created_at)}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>

              {user.roles.map((rol,index)=>{
                return(
                  <td key={index} className=''>{rol.name}</td>
                )
              })}
               <td>
                 {user.delete?'Eliminado':'Activo'}
               </td>
              <td className='d-flex justify-content-between'>
              
                <ModalEditUser  title='Editar Usuario' handleDispatch={handleDispatch} user={user} />
      
              <ModalDelete handleDispatch={handleDispatch} user={user}/>
              </td>
            </tr>
            
            )
           })
           :<tr>
             <td>No hay data</td>
           </tr>
         }
        </tbody>
      </Table>
    </div>
  );
};

export default TableListUser;
