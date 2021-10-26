import React from "react";
import { Table } from "reactstrap";
import moment from "moment";
import ModalEditEmployeesLogs from "./ModalEditEmployeesLogs";
import ModalDeleteEmployeeLogs from "./ModalDeleteEmployeesLogs";

const TableEmployeesLogs = ({handleDispatch, empLogs,employees}) => {
  const handleChangeTime = (date) => {
    return moment(date).format("ll");
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Creado</th>
            <th>Empleado</th>
            <th>Fecha</th>
            <th>Descripcion</th>
            <th>Tipo</th>
            <th>Estatus</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
           {empLogs.length >= 1 ? (
            empLogs.map((value, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{handleChangeTime(value.created_at)}</th>
                  <td>{value.employee.name}</td>
                  <td>{value.date}</td>
                  <td>{value.description}</td>
                  <td>{value.employee_scene.name}</td>
                  <td>{value.delete ? "Eliminado" : "Activo"}</td>
                  <td className="d-flex justify-content-between">
                    <ModalEditEmployeesLogs handleDispatch={handleDispatch} employees={employees} data={value}/>
                    <ModalDeleteEmployeeLogs handleDispatch={handleDispatch} data={value}/>
                       {/* <ModalEditLine handleDispatch={handleDispatch} linesProds={linesProds} employees={employees} data={value}/>
                      <ModalDeleteLine handleDispatch={handleDispatch} data={value}/> */}
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

export default TableEmployeesLogs;
