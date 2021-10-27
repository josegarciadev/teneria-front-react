import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import ModalCreateDepartment from "../../../components/Admin/Deparments/ModalCreateDepartment";
import TableListDepartments from "../../../components/Admin/Deparments/TableListDepartments";
import ButtonExport from "../../../components/ButtonExport/ButtonExport";
import { getDeparments, selectDeparments } from "../../../feactures/Departments/DepartmentsSlice";

const Departments = () => {
  const dispatch = useDispatch();
    const departments = useSelector(selectDeparments)
  const handleDispatch = () => {
    dispatch(getDeparments());
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
              Departamentos
            </CardTitle>
            <CardBody>
              <div className="py-2 d-flex justify-content-between">
                <ModalCreateDepartment handleDispatch={handleDispatch} />

                <ButtonExport url='http://127.0.0.1:8000/api/v1/PDF/departmentsPdf' />
              </div>

              <TableListDepartments handleDispatch={handleDispatch} departments={departments} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Departments;
