import React from "react";
import { Table } from "reactstrap";
import moment from "moment";
import ModalEditDepartment from "./ModalEditDepartment";
import ModalDeleteDepartment from "./ModalDeleteDepartment";

const TableListDepartments = ({ departments,handleDispatch }) => {
  const handleChangeTime = (date) => {
    return moment(date).format("ll");
  };
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Creado</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Estatus</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {departments.length >= 1 ? (
            departments.map((dep, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{handleChangeTime(dep.created_at)}</th>
                  <td>{dep.name}</td>
                  <td>{dep.description}</td>
                  <td>{dep.delete ? "Eliminado" : "Activo"}</td>
                  <td className="d-flex justify-content-between">
                      <ModalEditDepartment handleDispatch={handleDispatch} department={dep}/>
                      <ModalDeleteDepartment handleDispatch={handleDispatch} department={dep}/>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No hay data</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TableListDepartments;
