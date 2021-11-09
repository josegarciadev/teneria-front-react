import React from "react";
import { Table } from "reactstrap";
import moment from "moment";
import ModalEditLine from "./ModalEditLine";
import ModalDeleteLine from "./ModalDeleteLine";
const TableListLine = ({ lines ,handleDispatch,departments}) => {
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
            <th>Departamento</th>
            <th>Estatus</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {lines.length >= 1 ? (
            lines.map((value, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{handleChangeTime(value.created_at)}</th>
                  <td>{value.line_name}</td>
                  <td>{value.department_name}</td>
                  <td>{value.delete ? "Eliminado" : "Activo"}</td>
                  <td className="d-flex justify-content-between">
                      <ModalEditLine handleDispatch={handleDispatch} departments={departments} data={value}/>
                      <ModalDeleteLine handleDispatch={handleDispatch} data={value}/>
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

export default TableListLine;
