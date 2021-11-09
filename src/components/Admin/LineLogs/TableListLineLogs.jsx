import React from "react";
import { Table } from "reactstrap";
import moment from "moment";
import ModalEditLine from "./ModalEditLineLogs";
import ModalDeleteLine from "./ModalDeleteLineLogs";
const TableListLine = ({handleDispatch, linesLogs,linesProds,employees}) => {
  const handleChangeTime = (date) => {
    return moment(date).format("ll");
  };
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Creado</th>
            <th>Empleado</th>
            <th>Linea</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Tipo</th>
            <th>Estatus</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
           {linesLogs.length >= 1 ? (
            linesLogs.map((value, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{handleChangeTime(value.created_at)}</th>
                  <td>{value.employee_name}</td>
                  <td>{value.line_name}</td>
                  <td>{value.product_name}</td>
                  <td>{value.count}</td>
                  <td>{value.type}</td>
                  <td>{value.delete ? "Eliminado" : "Activo"}</td>
                  <td className="d-flex justify-content-between">
                       <ModalEditLine handleDispatch={handleDispatch} linesProds={linesProds} employees={employees} data={value}/>
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
