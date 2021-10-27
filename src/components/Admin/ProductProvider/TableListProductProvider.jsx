import React from 'react'
import { Table } from "reactstrap";
import ModalDeleteProductProvider from './ModalDeleteProductProvider';

const TableListProductProvider = ({data,handleDispatch}) => {
    return (
        <div>
            <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Provider</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.length >= 1 ? (
            data.map((prod, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{prod.id}</th>
                  <td>{prod.product_name}</td>
                  <td>{prod.provider_name}</td>
                  <td className="d-flex justify-content-between">
                    <ModalDeleteProductProvider data={prod} handleDispatch={handleDispatch}/>
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

export default TableListProductProvider
