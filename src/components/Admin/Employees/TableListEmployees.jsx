import React from 'react'
import { Table } from "reactstrap";
import moment from "moment";

const TableListEmployees = ({handleDispatch,employees}) => {
    const handleChangeTime = (date) => {
        return moment(date).format("ll");
      };
      return (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Creado</th>
                <th>DNI</th>
                <th>Nombre</th>
                <th>Genero</th>
                <th>Departamento</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
               {employees.length >= 1 ? (
                employees.map((emp, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{handleChangeTime(emp.created_at)}</th>
                      <td>{emp.dni}</td>
                      <td>{emp.name}</td>
                      <td>{emp.gender.name}</td>
                      <td>{emp.department.name}</td>
                      <td>{emp.delete ? "Eliminado" : "Activo"}</td>
                      <td className="d-flex justify-content-between">
 
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
}

export default TableListEmployees
