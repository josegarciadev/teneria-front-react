import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import ModalCreateEmployee from "../../../components/Admin/Employees/ModalCreateEmployee";
import TableListEmployees from "../../../components/Admin/Employees/TableListEmployees";
import ButtonExport from "../../../components/ButtonExport/ButtonExport";
import { getDeparments, selectDeparments } from "../../../feactures/Departments/DepartmentsSlice";
import { getEmployees, selectEmployees } from "../../../feactures/Employees/EmployeeSlice";
const Employees = () => {
    const dispatch = useDispatch();
    const departments = useSelector(selectDeparments)
    const employees = useSelector(selectEmployees)
  const handleDispatch = () => {
    dispatch(getDeparments());
    dispatch(getEmployees());
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
              Empleados
            </CardTitle>
            <CardBody>

              <div className="py-2 d-flex justify-content-between">
              <ModalCreateEmployee handleDispatch={handleDispatch} departments={departments}/>

                <ButtonExport url='http://127.0.0.1:8000/api/v1/PDF/employeesPdf' />
              </div>
              <TableListEmployees handleDispatch={handleDispatch} departments={departments} employees={employees}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
        </div>
    )
}

export default Employees
