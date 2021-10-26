import React from "react";
import { Table } from "reactstrap";
import moment from "moment";
import ModalEditLine from "./ModalEditLineProd";
import ModalDeleteLine from "./ModalDeleteLineProd";
const TableListLine = ({prods, lines ,handleDispatch, linesprods}) => {
  const handleChangeTime = (date) => {
    return moment(date).format("ll");
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Creado</th>
            <th>Producto</th>
            <th>Proveedor</th>
            <th>Linea</th>
            <th>Departamento</th>
            <th>Stock</th>
            <th>Estatus</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {linesprods.length >= 1 ? (
            linesprods.map((value, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{handleChangeTime(value.created_at)}</th>
                  <td>{value.product_name}</td>
                  <td>{value.provider_name}</td>
                  <td>{value.line_name}</td>
                  <td>{value.department_name}</td>
                  <td>{value.stock}</td>
                  <td>{value.delete ? "Eliminado" : "Activo"}</td>
                  <td className="d-flex justify-content-between">
                      <ModalEditLine handleDispatch={handleDispatch}  data={value}/>
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
