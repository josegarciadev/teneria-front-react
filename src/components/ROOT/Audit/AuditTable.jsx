import React from 'react'
import { Table } from 'reactstrap'
import ModalAudit from './ModalAudit'

const AuditTable = ({data}) => {
    return (
        <Table responsive>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Tabla</th>
            <th>Acción</th>
            <th>Ip</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {
            (data && data.length >=1) 
            ?
                data.map((value,index) =>{
                    return(
                        <tr key={index}>
                            <td>{value.user_name}</td>
                            <td>{value.date_current}</td>
                            <td>{value.name_table}</td>
                            <td>{value.action_table}</td>
                            <td>{value.ip}</td>
                            <td><ModalAudit audit={value}/></td>
                        </tr>
                    )
                })
            :
            <span>No hay data</span>
            }
        </tbody>
      </Table>
    )
}

export default AuditTable
