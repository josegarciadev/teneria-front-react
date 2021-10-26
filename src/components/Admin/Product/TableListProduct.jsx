import React from 'react'
import { Table } from "reactstrap";
import moment from "moment";
import ModalEditProduct from './ModalEditProduct';
import ModalDeleteProduct from './ModalDeleteProduct';
const TableListProduct = ({products,handleDispatch}) => {
    const handleChangeTime = (date) => {
        return moment(date).format("ll");
      };
    return (
        <div>
            <Table>
        <thead>
          <tr>
            <th>Creado</th>
            <th>Code</th>
            <th>Nombre</th>
            <th>Unidad de Medida</th>
            <th>Estatus</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.length >= 1 ? (
            products.map((prod, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{handleChangeTime(prod.created_at)}</th>
                  <td>{prod.code}</td>
                  <td>{prod.name}</td>
                  <td>{prod.type_product.name}</td>
                  <td>{prod.delete ? "Eliminado" : "Activo"}</td>
                  <td className="d-flex justify-content-between">
                      <ModalEditProduct handleDispatch={handleDispatch} product={prod} />
                      <ModalDeleteProduct handleDispatch={handleDispatch} product={prod}/>
                      {/* <ModalEditDepartment handleDispatch={handleDispatch} department={dep}/>
                      <ModalDeleteDepartment handleDispatch={handleDispatch} department={dep}/> */}
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

export default TableListProduct
