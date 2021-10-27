import React from 'react'
import { Table } from "reactstrap";
import moment from "moment";
import ModalEditProvider from './ModalEditProvider';
import ModalDeleteProvider from './ModalDeleteProvider';

const TableListProvider = ({data,handleDispatch}) => {
    const handleChangeTime = (date) => {
        return moment(date).format("ll");
      };
    return (
        <div>
            <Table>
        <thead>
          <tr>
            <th>Creado</th>
            <th>Nombre</th>
            <th>Estatus</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.length >= 1 ? (
            data.map((prod, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{handleChangeTime(prod.created_at)}</th>
                  <td>{prod.name}</td>
                  <td>{prod.delete ? "Eliminado" : "Activo"}</td>
                  <td className="d-flex justify-content-between">
                      <ModalEditProvider handleDispatch={handleDispatch} data={prod} />
                      <ModalDeleteProvider handleDispatch={handleDispatch} data={prod} />
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
    )
}

export default TableListProvider
