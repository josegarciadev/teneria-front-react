import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import ModalCreateLineLogs from "../../../components/Admin/LineLogs/ModalCreateLineLogs";
import TableListLineLogs from "../../../components/Admin/LineLogs/TableListLineLogs";
import ButtonExport from "../../../components/ButtonExport/ButtonExport";
import { getEmployees,selectEmployees } from "../../../feactures/Employees/EmployeeSlice";

import { getLinesLogs,selectLinesLogs} from "../../../feactures/LinesLogs/LinesLogs";
import { getLinesProds,selectLinesProds } from "../../../feactures/LinesProds/LinesProds";

const LinesLogs = () => {
    const dispatch = useDispatch();
    const employees = useSelector(selectEmployees)
    const linesProds = useSelector(selectLinesProds)
    
    const linesLogs = useSelector(selectLinesLogs)
  const handleDispatch = async() => {
  
    dispatch(getEmployees());
    dispatch(getLinesProds())
    dispatch(getLinesLogs());
  };
  useEffect(() => {
    handleDispatch();
  }, []);
    return (
        <div>
             <Row>
        <Col xs="12">
          <Card>
            <CardTitle className="bg-light border-bottom p-3 mb-0 text-center">
              <i className="mdi mdi-priority-high mr-2"> </i>
              Entrada y Salidas de lineas
            </CardTitle>
            <CardBody>
            <div className="py-2 d-flex justify-content-between">
                <ModalCreateLineLogs handleDispatch={handleDispatch} linesProds={linesProds}  employees={employees}/>
                <ButtonExport url='http://127.0.0.1:8000/api/v1/PDF/linesProductsLogsPdf' />
              </div>

              <TableListLineLogs handleDispatch={handleDispatch} linesProds={linesProds} employees={employees} linesLogs={linesLogs} />
            </CardBody>
          </Card>
        </Col>
      </Row>
        </div>
    )
}

export default LinesLogs
